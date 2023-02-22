import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe("HomePage", () => {
    it("should render the heading", () => {
      const textToFind = "Hello World!"
  
      render(<Home />);
      const heading = screen.getByText(textToFind);
  
      expect(heading).toBeInTheDocument();
    });

    it("should render the link", () => {
      render(<Home />);
      const link = screen.getByRole('link', {
          name: "About Us",
        })
    
        expect(link).toBeInTheDocument()
    });
  });