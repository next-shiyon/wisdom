import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Heading UI", () => {
  test("renders header menu", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText("main")).toBeInTheDocument();
    expect(screen.getByText("history")).toBeInTheDocument();
  });
});
