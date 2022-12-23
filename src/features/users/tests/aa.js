// // I use msw to intercept the request
// // and return the response 'Haydar Cetin' after 150ms
// // endpoint is : /api/user

// import { screen } from "@testing-library/react";
// import { rest } from "msw";
// import { setupServer } from 'msw/node';
// import { renderWithProviders } from "../../../utils/test-utils";
// import UserDisplay from "../UqwwserDisplay";

// // * To handle requests
// export const handlers = [
//   rest.get('/api/user', (req, res, ctx) => {
//     return res(ctx.json({ name: 'Haydar Cetin' }), ctx.delay(150))
//   })
// ]

// const server = setupServer(...handlers)

// // enable API mocking before ALL TESTS
// beforeAll(() => server.listen())

// // reset handlers after each test
// afterEach(() => server.resetHandlers())

// // disable API mocking after all tests done
// afterAll(() => server.close())

// test('fetches and receive data when click button', async () => {
//   renderWithProviders(<UserDisplay />)

//   //initially must be 'no user'
//   expect(screen.getByText(/no user/i)).toBeInTheDocument()

//   //button text must not be 'fetching...'
//  // expect(screen.queryByText(/fetching.../i)).not.toBeInTheDocument()

//   //after clicking the 'fetch' button it should shows on button 'fetching...'
//  // userEvent.click(screen.getByRole("button", { name: /fetch/i }))

//   // expect(screen.getByRole("button", { name: /fetch/i }))
//  // expect(screen.getByRole('button', { name: /fetching.../i })).toBeInTheDocument()

//   //after unknown time, user should receive

//   // expect(await screen.findByText(/Haydar Cetin/i)).toBeInTheDocument()
// })
