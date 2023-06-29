import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Testing Footer", () => {

    test('Footer should render', () => {
        render(<Footer />)
    })

    it('Should contain copyright info', () => {
        render(<Footer />)
        const copyrightEl = screen.getByText(/ExamEncoded/i)
        expect(copyrightEl).toBeInTheDocument()
    })

})