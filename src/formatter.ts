import type { Item } from './typedefs'
import * as utils from './utils'
import parseLevel from './parseLevel'

export default function format(set: Item) {
  const { datas, texts } = set
  return ({
    ot,
    type,
    atk,
    def,
    level: rawLevel,
    race,
    attribute,
    id,
    setcode
  }: typeof datas[number]) => {
    const { name, desc } = texts.find((item) => item.id === id) ?? {
      name: 'No Name',
      desc: 'No Desc'
    }
    const { scale, level } = parseLevel(rawLevel)
    return {
      id,
      name,
      desc,
      ot: utils.ot[ot] ?? ot,
      type: utils.type[type] ?? type,
      atk,
      def,
      level,
      scale,
      race: utils.race[race] ?? race,
      attribute: utils.attributes[attribute] ?? attribute,
      setcode
    }
  }
}
