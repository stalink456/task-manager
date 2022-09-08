import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("rendering Header", () => {
  it("Header works", () => {
    render(<Header />);

    expect(screen.getByText(/Task-manager/i)).toBeInTheDocument();
  });

  it("Header works", () => {
    render(<Header />);

    expect(
      screen.queryByText("Меня не должно быть в Header")
    ).not.toBeInTheDocument();
  });
});
