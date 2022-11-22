// import "jsdom-global/register";
import { equal } from "assert";
import { expect } from "chai";
import React from "react";
// import { mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("Typescript + Babel usage suite", () => {
  it("should return string correctly", () => {
    equal("Hello mocha", "Hello mocha");
  });
});

describe("renders learn react link", () => {
  render(<App />);
  // const wrapper = mount(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // const linkElementText = wrapper.find("a").text();
  expect(linkElement).to.equal("Learn React");
});
