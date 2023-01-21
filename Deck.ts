export enum Suit {
  Heart = 'heart',
  Spade = 'spade',
  Diamond = 'diamond',
  Club = 'club',
}

export enum Joker {
  Big = 'big',
  Small = 'small',
}

export interface ICard {
  suit?: Suit
  number?: number
  joker?: Joker
}

export class Card {
  private _suit?: Suit
  private _number?: number
  private _joker?: Joker

  constructor(props: ICard) {
    if (props.joker) {
      this._joker = props.joker
    } else {
      this._suit = props.suit
      this._number = props.number
    }
  }

  get isJoker() {
    return !!this._joker
  }

  get isRegular() {
    return !this._joker && (!!this._suit && !!this._number && this._number > 0)
  }

  get suit() {
    return this._suit
  }

  get number() {
    return this._number
  }
}

export class Deck {
  private _cards: Card[]

  constructor() {
    this._cards = [
      ...(Array(13).map((item, index) => new Card({ suit: Suit.Club, number: index + 1 }))),
      ...(Array(13).map((item, index) => new Card({ suit: Suit.Diamond, number: index + 1 }))),
      ...(Array(13).map((item, index) => new Card({ suit: Suit.Heart, number: index + 1 }))),
      ...(Array(13).map((item, index) => new Card({ suit: Suit.Spade, number: index + 1 }))),
      new Card({ joker: Joker.Small }),
      new Card({ joker: Joker.Big }),
    ]
  }

  get cards() {
    return this._cards
  }

  get length() {
    return this._cards.length
  }
}
