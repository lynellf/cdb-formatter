import app from '../src/mod'
import sourceFiles from '../src/sourceFiles'

type TRecord = Record<string, unknown>

beforeAll(() => {
  app('./testdata/input', './testdata/output/output.json')
})

function getCard(query: string): TRecord {
  const cards = sourceFiles('./testdata/output').flat()
  const card = cards.find((c) => (c as TRecord).name === query) as TRecord
  return card
}

describe('pendulum cards being correctly formatted', () => {
  it('is Odd-Eyes Pendulum Dragon', () => {
    const card = getCard('Odd-Eyes Pendulum Dragon')
    expect(card.level).toBe(7)
    expect(card.scale).toBe(4)
  })

  it('is Odd-Eyes Venom Dragon', () => {
    const card = getCard('Odd-Eyes Venom Dragon')
    expect(card.level).toBe(10)
    expect(card.scale).toBe(1)
  })

  it('is Supreme King Gate Infinity', () => {
    const card = getCard('Supreme King Gate Infinity')
    expect(card.level).toBe(7)
    expect(card.scale).toBe(13)
  })

  it('is Clear Wing Fast Dragon', () => {
    const card = getCard('Clear Wing Fast Dragon')
    expect(card.level).toBe(7)
    expect(card.scale).toBe(4)
  })

  it('is Odd-Eyes Rebellion Dragon', () => {
    const card = getCard('Odd-Eyes Rebellion Dragon')
    expect(card.level).toBe(7)
    expect(card.scale).toBe(4)
  })
})
