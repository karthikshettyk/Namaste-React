import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("testing the contat us page", () => {
  test("should first heading in the component", () => {
    render(<ContactUs></ContactUs>);
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside the component", () => {
    render(<ContactUs></ContactUs>);
    const button = screen.getByRole("button");
    //assertion
    expect(button).toBeInTheDocument();
  });

  test("should get placeholder text inside the component", () => {
    render(<ContactUs></ContactUs>);
    const placeholdertext = screen.getByPlaceholderText("name");
    //assertion
    expect(placeholdertext).toBeInTheDocument();
  });

  test("should load two input boxes in the component", () => {
    render(<ContactUs></ContactUs>);
    const textbox = screen.getAllByRole("textbox");
    //assertion
    expect(textbox.length).toBe(2)
  });
});
