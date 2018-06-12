import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

{
  it("Renderiza todos los componentes", () => {
    const home = shallow(<Home name={"Cornelio"} />);
    expect(home.find("div.greet").text()).toEqual("Hola Cornelio");
    expect(home.find("div.section")).toHaveLength(3);
  });
}
