import React from "react";
import { shallow } from "enzyme";
import DetailsPokemonLocal from "./DetailsPokemonLocal";

describe("DetailsPokemonLocal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailsPokemonLocal />);
    expect(wrapper).toMatchSnapshot();
  });
});
