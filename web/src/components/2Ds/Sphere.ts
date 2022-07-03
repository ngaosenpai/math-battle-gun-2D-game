import p5Types from 'p5';
import { Coordinate } from '@types';
import { Manager } from '@components/P5Canvas';

class Shere{
  protected readonly p5;
  protected readonly coor;
  protected readonly radius;
  protected readonly color;

  constructor(p5: p5Types, coor: Coordinate, radius: number, color: string){

    this.p5 = p5;
    this.coor = {
      x : coor.x * Manager.worldScale,
      y : coor.y * Manager.worldScale,
    };

    console.log(this.coor);
    this.radius = radius;
    this.color = color;
  }

  draw(){
    this.p5.fill(this.color);
    this.p5.noStroke();
    const { x, y } = this.coor;
    this.p5.ellipse(x / Manager.worldScale, y / Manager.worldScale, this.radius, this.radius);
  }

  getCoordinate(){
    return this.coor;
  }

}

export default Shere;