import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Form from "../components/Form";

describe("CheRendering Form", () => {
  it("check label", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    expect(screen.getByText(/Опишите свою задачу/)).toBeInTheDocument();
    expect(screen.getByText(/Создать/)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Опишите свою задачу/)
    ).toBeInTheDocument();
  });
});
