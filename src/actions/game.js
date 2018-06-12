import { insert } from "ramda";
import {
  isoFetch,
  postWithJSONBody,
  deleteRequest,
  putRequestWithJSONBody
} from "./fetch-utils";
import { shuffle } from "../model/util";
export const START_GAME = "START_GAME";
export const JOIN_GAME = "JOIN_GAME";
export const CARD_SELECTED = "CARD_SELECTED";
export const CARD_PLACED_IN_TIMELINE = "CARD_PLACED_IN_TIMELINE";
export const LOGIN = "LOGIN";
export const ADMINISTRATE = "ADMINISTRATE";
export const FETCH_CARDS = "FETCH_CARDS";
export const LOAD_CARDS = "LOADED_CARDS";
export const LOAD_MATCHES = "LOAD_MATCHES";
export const ERROR_LOADING_CARDS = "ERROR_LOADING_CARDS";
export const DELETE_CARD = "DELETE_CARD";
export const ADD_CARD = "ADD_CARD";
export const WAIT_FOR_MATCH = "WAIT_FOR_MATCH";

export const login = playerName => ({
  type: LOGIN,
  player: {
    name: playerName
  }
});

export const fetchCards = () => async dispatch => {
  try {
    const response = await isoFetch("/cards");
    if (response.status !== 200) {
      dispatch(errorLoading(`Server error ${response.status}`));
    } else {
      const json = await response.json();
      dispatch(loadCards(json));
    }
  } catch (err) {
    dispatch(errorLoading(err));
  }
};

export const loadCards = cards => ({ type: LOAD_CARDS, cards });

export const localAddCard = card => ({
  type: ADD_CARD,
  card
});
export const addCard = (name, year, img, group) => async dispatch => {
  const card = { name: name, year: year, group: group, img: img };
  const response = await isoFetch("/cards", postWithJSONBody(card));
  const r = await response.json();
  dispatch(localAddCard(r.data));
};

export const errorLoading = error => ({ type: ERROR_LOADING_CARDS, error });

export const localDeleteCard = id => ({
  type: DELETE_CARD,
  id
});
export const deleteCard = id => async dispatch => {
  await isoFetch(`/cards/${id}`, deleteRequest());
  dispatch(localDeleteCard(id));
};

export const editCard = async (id, name, year, img, group) => {
  const card = { name: name, year: year, group: group, img: img };
  const response = await isoFetch(`/cards/${id}`, putRequestWithJSONBody(card));
  await response.json();
};

export const loadMatches = matches => ({ type: LOAD_MATCHES, matches });

export const fetchMatches = () => async dispatch => {
  try {
    const response = await isoFetch("/match");
    if (response.status !== 200) {
      dispatch(errorLoading(`Server error ${response.status}`));
    } else {
      const json = await response.json();
      dispatch(loadMatches(json));
    }
  } catch (err) {
    dispatch(errorLoading(err));
  }
};

export const administrate = () => ({
  type: ADMINISTRATE
});

export const joinGame = id => (dispatch, getState) => {
  //TODO por ahora hacemos lo mismo que creando una partida
  const { cards, player, matches } = getState();
  dispatch({
    type: WAIT_FOR_MATCH,
    matchSize: matches.filter(m => m._id === id)[0].size
  });

  window.setTimeout(() => {
    const mixedCards = shuffle(cards);
    dispatch({
      type: START_GAME,
      player: {
        ...player,
        playerHand: mixedCards.slice(0, 5)
      },
      opponents: generateOpponents(),
      matchName: "joined game",
      matchSize: 5,
      cards: mixedCards.slice(7, cards.length),
      timeline: mixedCards.slice(5, 6)
    });
  }, 3000);
};

export const startGame = (matchName, matchSize) => async (
  dispatch,
  getState
) => {
  try {
    const response = await isoFetch("/cards");
    const cards = await response.json();
    if (response.status !== 200) {
      dispatch(errorLoading(`Server error ${response.status}`));
    } else {
      dispatch({
        type: WAIT_FOR_MATCH,
        matchSize
      });

      window.setTimeout(async () => {
        const { player } = getState();
        const match = {
          name: matchName,
          size: matchSize,
          players: [player]
        };

        const response = await isoFetch("/match", postWithJSONBody(match));
        await response.json();

        const mixedCards = shuffle(cards);
        dispatch({
          type: START_GAME,
          player: {
            ...player,
            playerHand: mixedCards.slice(0, 5)
          },
          matchName,
          matchSize,
          opponents: generateOpponents(),
          cards: mixedCards.slice(7, cards.length),
          timeline: mixedCards.slice(5, 6)
        });
      }, 3000);
    }
  } catch (err) {
    dispatch(errorLoading(err));
  }
};

export const cardSelected = card => ({
  type: CARD_SELECTED,
  selectedCard: card
});

export const cardPlacedInTimeline = previousCard => (dispatch, getState) => {
  const { selectedCard, timeline, cards, discard, player } = getState();
  if (!selectedCard) return;

  const card = selectedCard.card;
  let newTimeline = timeline.slice();
  let newCards = cards;
  let newDiscard = discard;
  let newPlayerHand = player.playerHand.slice();
  let winner = null;

  const year = card.year;
  const prevYear = previousCard
    ? parseInt(previousCard.year, 10)
    : Number.NEGATIVE_INFINITY;
  const prevCardIndex = previousCard ? timeline.indexOf(previousCard) : -1;
  const nextCard =
    prevCardIndex < timeline.length - 1 ? timeline[prevCardIndex + 1] : null;
  const nextYear = nextCard
    ? parseInt(timeline[prevCardIndex + 1].year, 10)
    : Number.POSITIVE_INFINITY;

  newPlayerHand = newPlayerHand.filter(c => c.name !== card.name);
  if (prevYear < year && nextYear > year) {
    newTimeline = insert(prevCardIndex + 1, card, newTimeline);
    if (newPlayerHand.length < 1) {
      winner = player;
    }
  } else {
    newPlayerHand.push(cards[0]);
    newCards = newCards.slice(1, newCards.length);
    newDiscard = { quantity: newDiscard.quantity + 1 };
  }

  dispatch({
    type: CARD_PLACED_IN_TIMELINE,
    timeline: newTimeline,
    cards: newCards,
    discard: newDiscard,
    playerHand: newPlayerHand,
    winner: winner
  });
};

export const generateOpponents = () => [
  {
    name: "Juan",
    playerHand: [
      {
        _id: 123,
        name: "Invencion de la agricultura",
        year: 1,
        image: ""
      }
    ]
  },
  {
    name: "Sofia",
    playerHand: [{ _id: 124, name: "Llegada a la luna", year: 1969, image: "" }]
  },
  {
    name: "Carlos",
    playerHand: [
      {
        _id: 125,
        name: "Invencion de la agricultura",
        year: 1,
        image: ""
      },
      {
        _id: 126,
        name: "Invencion de la agricultura",
        year: 1,
        image: ""
      },
      {
        _id: 127,
        name: "Invencion de la agricultura",
        year: 1,
        image: ""
      }
    ]
  },
  {
    name: "Florencia",
    playerHand: [
      { _id: 128, name: "Llegada a la luna", year: 1969, image: "" },
      { _id: 129, name: "Llegada a la luna", year: 1969, image: "" }
    ]
  }
];
