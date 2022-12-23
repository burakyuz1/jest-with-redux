import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/users/1',
    (req, res, ctx) => {
      return res(
        ctx.json({
          name: '__testUser__'
        })
      )
    }
  )
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

