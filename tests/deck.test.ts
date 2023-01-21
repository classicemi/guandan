import {
  beforeEach,
  expect,
  test,
  expectTypeOf,
} from 'vitest'
import { Deck, Card, Suit, Joker } from '../Deck'

let deck: Deck

beforeEach(() => {
  deck = new Deck()
})

test('Regular card', () => {
  let regularCard = new Card({
    suit: Suit.Club,
    number: 1,
  })
  expect(regularCard.isRegular).toBe(true)
  expect(regularCard.isJoker).toBe(false)
  expect(regularCard.suit).toBe(Suit.Club)
  expect(regularCard.number).toBe(1)
})

test('Joker card', () => {
  let jokerCard = new Card({
    suit: Suit.Club,
    number: 1,
    joker: Joker.Big,
  })
  expect(jokerCard.isRegular).toBe(false)
  expect(jokerCard.isJoker).toBe(true)
  expect(jokerCard.suit).toBe(undefined)
  expect(jokerCard.number).toBe(undefined)
})

test('Deck properties type', () => {
  expectTypeOf(deck.cards).toBeArray()
  expectTypeOf(deck.length).toBeNumber()
})

test('Deck cards', () => {
  expect(deck.length).toBe(54)
})
