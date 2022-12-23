import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../../utils/test-utils'
import UserDisplay from '../UserDisplay'

test('fetches and receive data', async () => {
  renderWithProviders(<UserDisplay />)


  //başlangıçta store'dan gelen initial value olan user.name yani (no user) ekranda görünmeli
  expect(screen.getByText(/no user/i)).toBeInTheDocument()

  //testId'sine göre bul ve text'e 1 yaz
  const userIdText = screen.getByTestId('userId')
  userEvent.clear(userIdText)
  userEvent.type(userIdText, '1')

  //butona tıklandığında butonda fetching yazmalı
  userEvent.click(screen.getByRole('button', { name: /fetch/i }))
  expect(screen.getByRole('button', { name: /fetching/i })).toBeInTheDocument()

  //sonuç döndüğü zaman ekranda ms
  await screen.findByText(/__testUser__/i)
})
