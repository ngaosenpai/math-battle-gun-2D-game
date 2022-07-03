import { Manager } from '@components/P5Canvas';
import { Bullet } from '@components/2Ds';
import { Sphere } from '.';
import p5Types from 'p5';
import { Coordinate, LoR } from '@types';


class Soldier extends Sphere {
  private bullet : Bullet;
  constructor(p5: p5Types, coor: Coordinate, radius: number, color: string){
    super(p5, coor, radius, color);
    this.bullet = new Bullet(p5, coor, 3, 'red');

    // add to manager whenever create
    Manager.addObject(this);
    Manager.addObject(this.bullet);
  }

  // override draw method
  draw(){
    Manager.addProcess(() => {
      super.draw();
    });
  }

  aiming(equation: string, direction: LoR){
    Manager.addProcess(() => {
      this.bullet.init(equation, direction);
    });
  }

  fire(){
    Manager.addProcess(() => {
      this.bullet.fire();
    });
  }

}

export default Soldier;