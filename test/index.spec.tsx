import "jsdom-global/register";
import { expect } from "chai";
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../src/App";

Enzyme.configure({ adapter: new Adapter() });

describe("renders learn react link", () => {
  it("get text", () => {
    const wrapper = mount(<App />);
    const linkElementText = wrapper.find("a").text();
    expect(linkElementText).to.equal("Learn React");
  });
});
