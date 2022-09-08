import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Result from "../components/Result";

describe("Check single task", () => {
  it("task works", () => {
    render(
      <Provider store={store}>
        <Result id={5} done={true} text="React" />
      </Provider>
    );

    expect(screen.getByText(/react/i)).toBeInTheDocument();
  });
});
