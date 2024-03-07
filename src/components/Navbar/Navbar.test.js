import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("renders navigation links", () => {
    render(<Navbar />);
    
    const homeLink = screen.getByText("Home");
    const shopLink = screen.getByText("Shop");
    const magazineLink = screen.getByText("Magazine");
    
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(magazineLink).toBeInTheDocument();
  });

  test("renders search input and button", () => {
    render(<Navbar />);
    
    const searchInput = screen.getByPlaceholderText("search");
    const searchButton = screen.getByAltText("search");
    
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("renders login button", () => {
    render(<Navbar />);
    
    const loginButton = screen.getByText("Login");
    
    expect(loginButton).toBeInTheDocument();
  });
  test("renders cart icon", () => {
    render(<Navbar />);
    
    const cartIcon = screen.getByAltText("cart");
    
    expect(cartIcon).toBeInTheDocument();
  });
});