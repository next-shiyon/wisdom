import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe("Application page routing", () => {
  test("Should routes Main page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/MainPage/i)).toBeInTheDocument();
  });

  test("Should routes History page", async () => {
    render(
      <MemoryRouter initialEntries={["/history"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/HistoryPage/i)).toBeInTheDocument();
  });

  test("Should routes History Create page", async () => {
    render(
      <MemoryRouter initialEntries={["/history/create"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/HistoryCreatePage/i)).toBeInTheDocument();
  });

  test("Should routes Habit Create page", async () => {
    render(
      <MemoryRouter initialEntries={["/habit/create"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/HabitCreatePage/i)).toBeInTheDocument();
  });

  test("Should routes Login page", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/LoginPage/i)).toBeInTheDocument();
  });
});
