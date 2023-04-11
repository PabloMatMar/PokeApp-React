import React from "react";
import { shallow } from "enzyme";
import SpecialEffect from "./SpecialEffect";

describe("SpecialEffect", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SpecialEffect />);
    expect(wrapper).toMatchSnapshot();
  });
});
