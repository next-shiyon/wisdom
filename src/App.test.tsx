import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Application page routing", () => {
  test("Should routes Main page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });

  test("Should routes History page", async () => {
    render(
      <MemoryRouter initialEntries={["/history"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/History/i)).toBeInTheDocument();
  });

  test("Should routes History Create page", async () => {
    render(
      <MemoryRouter initialEntries={["/history/create"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/HistoryCreate/i)).toBeInTheDocument();
  });

  test("Should routes Habit Create page", async () => {
    render(
      <MemoryRouter initialEntries={["/habit/create"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/HabitCreate/i)).toBeInTheDocument();
  });

  test("Should routes Login page", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test("Should routes 404 not found page", async () => {
    render(
      <MemoryRouter initialEntries={["/something/wrong/url"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/404 not found/i)).toBeInTheDocument();
  });
});
