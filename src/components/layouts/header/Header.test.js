import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from './Header'
import routes from '../../../routes'



describe("Testing Header", () => {
    it('Should render', () => {
        render(<MemoryRouter><Header /></MemoryRouter>)
    })

    it('Should contain the Logo', () => {
        render(<MemoryRouter><Header /></MemoryRouter>)
        const logoEl = screen.getByText(/Exam Encoded/i)
        expect(logoEl).toBeInTheDocument()
    })

    it('Should render routes with displayName as nav links', () => {
        render(<MemoryRouter><Header /></MemoryRouter>)
        let links = screen.getAllByRole('link')
        const displayableLinks = routes.filter(r => r.displayName)
        expect(links.length).toBe(displayableLinks.length)
    })
})