
interface TypeBase {
  type: number
}

export interface SwiperType extends TypeBase {
  index?: number
}

export interface VideoType {
  video: string,
  comment: string,
  up: string,
  forward: string,
  down: string,
  name: string,
  text: string,
  [name: string]: any
}

interface AboutQueryBase {
  type: string,
  name: string,
  [propsName: string]: any
}
export interface AboutQuery {
  query: AboutQueryBase
}

export interface HomeQuery {
  icon: string,
  inform: number,
  name: string
}
