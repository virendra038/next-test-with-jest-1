import { render, screen } from '@testing-library/react'
import About from '../../../pages/about/index'

describe("AboutPage", () => {
    it("should render the heading", () => {
      const textToFind = "About Page"
  
      render(<About />);
      const heading = screen.getByText(textToFind);
  
      expect(heading).toBeInTheDocument();
    });

    it("should render the link", () => {
        render(<About />);
        const link = screen.getByRole('link', {
            name: "Go to home",
          })
      
          expect(link).toBeInTheDocument()
      });

  });