import "jsdom-global/register";
import { expect } from "chai";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "@/App";
import { Header } from "@/components/Header";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("Headerコンポーネントが存在すること", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Header)).to.equal(true);
  });
});
