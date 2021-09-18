import { getCard } from '../src/common'
import app from '../src/mod'

beforeAll(() => {
  app('./testdata/input', './testdata/output/output.json')
})

describe('fusion monsters', () => {
  it('is Rune-Eyes Pendulum Dragon', () => {
    const card = getCard('Rune-Eyes Pendulum Dragon')
    expect(card.level).toBe(8)
    expect(card.scale).toBe(0)
  })
})
