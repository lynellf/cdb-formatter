import type { Item } from './typedefs'
import * as utils from './utils'

export default function format(set: Item) {
  const { datas, texts } = set
  return ({
    ot,
    type,
    atk,
    def,
    level,
    race,
    attribute,
    id,
    setcode
  }: typeof datas[number]) => {
    const { name, desc } = texts.find((item) => item.id === id) ?? {
      name: 'No Name',
      desc: 'No Desc'
    }
    return {
      id,
      name,
      desc,
      ot: utils.ot[ot] ?? ot,
      type: utils.type[type] ?? type,
      atk,
      def,
      level,
      race: utils.race[race] ?? race,
      attribute: utils.attributes[attribute] ?? attribute,
      setcode
    }
  }
}
