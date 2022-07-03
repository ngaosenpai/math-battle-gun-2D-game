import { 
  Sphere, 
  SphereObstacle, 
  Bullet 
} from '@components/2Ds';
import { 
  LEFT,
  RIGHT
} from '@constants';

export type LoR = typeof LEFT | typeof RIGHT;

export type Coordinate = {
  x : number
  y : number
}

export type Limit = {
  left: number
  right: number
  up: number
  down: number
}

export type Range = [number, number]

export type Object2D = Sphere | SphereObstacle | Bullet
export type ProcessFunction = () => void