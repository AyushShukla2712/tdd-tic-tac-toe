import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Game from "./Game";

describe("Game Board", () => {
  it("Game Board exists", () => {
    render(<Game />);
    const gameBoard = screen.getByTestId("game-board");
    expect(gameBoard).toBeInTheDocument();
  });

  it("Should have 9 buttons", () => {
    render(<Game />);
    const buttonInstances = screen.getAllByRole('button');
    expect(buttonInstances).toHaveLength(9);
  });

  it("should place X on the board", () => {
    render(<Game />);
    const buttonInstance = screen.getAllByRole('button')[1];
    fireEvent.click(buttonInstance);
    expect(buttonInstance.textContent).toBe("X");
  });

  it("Should place O on the board", () => {
    render(<Game />);
    const [buttonInstanceOne, buttonInstanceTwo] = screen.getAllByRole('button').slice(0, 2);
    fireEvent.click(buttonInstanceOne);
    expect(buttonInstanceOne.textContent).toBe("X");
    fireEvent.click(buttonInstanceTwo);
    expect(buttonInstanceTwo.textContent).toBe('O');
  });

  it("should return when double-clicked", () => {
    render(<Game />);
    const buttonInstance = screen.getAllByRole('button')[1];
    fireEvent.click(buttonInstance);
    expect(buttonInstance.textContent).toBe("X");
    fireEvent.click(buttonInstance);
    expect(buttonInstance.textContent).toBe("X");
  });

  it("should calculate the winner", () => {
    render(<Game />);
    const squares = screen.getAllByRole("button");
    const status = screen.getByTestId("status");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[6]);
    fireEvent.click(squares[2]);
    fireEvent.click(squares[7]);
    expect(status.textContent).toBe("Winner: X");
  });

  it("should move to a particular movement", () => {
    render(<Game />);
    const buttonInstance = screen.getAllByRole('button')[1];
    fireEvent.click(buttonInstance);
    expect(buttonInstance.textContent).toBe("X");
    const buttonInstanceTwo = screen.getAllByRole('button')[9]; // Assuming there's a button at index 9
    fireEvent.click(buttonInstanceTwo);
    expect(buttonInstance.textContent).toBe('');
  });
});
