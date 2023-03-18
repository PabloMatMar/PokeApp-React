import React from "react";
import { shallow } from "enzyme";
import AllPokemons from "./AllPokemons";

describe("AllPokemons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AllPokemons />);
    expect(wrapper).toMatchSnapshot();
  });
});
