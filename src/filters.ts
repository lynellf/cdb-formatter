type Card = {
  id: number
  name: string
  desc: string
  ot: string
  type: string
  atk: number
  def: number
  level: number
  race: string
  attribute: string
  setcode: number
}
type Filter = (card: Card) => boolean

function excludeLengths(min: number, max: number) {
  return (card: Card) => {
    const id = `${card.id}`
    const length = id.length
    return length !== min && length !== max
  }
}

function excludePrefix(prefix: number) {
  return (card: Card) => {
    const id = `${card.id}`
    return !id.startsWith(`${prefix}`)
  }
}

function excludeOt(ot: string) {
  return (card: Card) => {
    return card.ot !== ot
  }
}

function excludeType(type: string) {
  return (card: Card) => {
    return card.type !== type
  }
}

// how cards are categorized
// https://discord.com/channels/170601678658076672/208066323429720064/583840491867734026
const noScripts = excludeLengths(3, 4)
const noAnime1 = excludePrefix(511)
const noAnime2 = excludePrefix(512)
const noAnime3 = excludePrefix(513)
const nonOfficial = excludeLengths(10, 11)
const noVideogame = excludeOt('VIDEOGAME')
const noToken = excludeType('MONSTER - TOKEN')

const filters: Filter[] = [
  noScripts,
  noAnime1,
  noAnime2,
  noAnime3,
  nonOfficial,
  noVideogame,
  noToken
]

export default function filter(cards: Card[]) {
  return cards.filter((card) => filters.every((filter) => filter(card)))
}
