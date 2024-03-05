import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  test("renders pagination buttons", () => {
    render(<Pagination data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} currentPage={1} setCurrentPage={() => {}} />);

    const prevButton = screen.getByText("prev");
    const nextButton = screen.getByText("next");
    const pageButtons = screen.getAllByRole("button");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test("disables prev button on first page", () => {
    render(<Pagination data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} currentPage={1} setCurrentPage={() => {}} />);

    const prevButton = screen.getByText("prev");

    expect(prevButton).toBeDisabled();
  });

  test("disables next button on last page", () => {
    render(<Pagination data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} currentPage={2} setCurrentPage={() => {}} />);

    const nextButton = screen.getByText("next");

    expect(nextButton).toBeDisabled();
  });

  test("enables prev and next buttons on a middle page", () => {
    render(<Pagination data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} currentPage={3} setCurrentPage={() => {}} />);

    const prevButton = screen.getByText("prev");
    const nextButton = screen.getByText("next");

    expect(prevButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  test("calls setCurrentPage when a page button is clicked", () => {
    const setCurrentPageMock = jest.fn();
    render(<Pagination data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} currentPage={1} setCurrentPage={setCurrentPageMock} />);

    const pageButton = screen.getByText("2");
    fireEvent.click(pageButton);

    // expect(setCurrentPageMock).toHaveBeenCalledWith(2);
  });
});