import { Manager } from '@components/P5Canvas';
import p5Types from 'p5';
import { Sphere } from './index';
import { Coordinate, LoR, Range } from '@types';
import { expressionEvaluate, reachLimit } from '@utils';
import { LEFT, RIGHT } from '@constants';
class Bullet extends Sphere{
  private equation: string | undefined;
  private direction: LoR | undefined;
  private vectors: Coordinate[];
  private range: Range;
  private start: Coordinate;

  constructor(p5: p5Types, coor: Coordinate, radius: number, color: string){
    super(p5, coor, radius, color);
    this.vectors = [];
    this.range = [Manager.limit.left, Manager.limit.right];
    this.start = {
      x: coor.x * Manager.worldScale,
      y: coor.y * Manager.worldScale
    };
  }

  init(equation: string, direction: LoR){
    this.equation = equation;
    this.direction = direction;
    if(this.equation){
      // vectors description:
      //                     -------------------------------------->
      // vectors = [{ x : 0, y: ?}, ..., { x : n, y: ?}, ..., { x : max, y: ?}]

      // case RIGHT (right -> left)
      
      if(direction === RIGHT){
        this.range = [this.coor.x, Manager.limit.right];
      } else {
        this.range = [Manager.limit.left, this.coor.x];
      }


      const vectors = expressionEvaluate(this.equation, this.range) as Coordinate[];

      if(vectors.length > 0){
        if(this.direction === LEFT){
          vectors.sort((v1, v2) => v2.x - v1.x);
        } else {
          vectors.sort((v1, v2) => v1.x - v2.x);
        }
        console.log(vectors)
        const start = vectors.shift() as Coordinate;
        this.start.x = start.x;
        this.start.y = start.y;

        vectors.forEach(v => {
          const y = this.coor.y + (v.y - this.start.y);
          if(y >= Manager.limit.up && y <= Manager.limit.down){
            this.vectors.push({
              x: v.x,
              y
            });
          }
        });
        

        console.log(this.vectors);

      }
    }
  }

  fire(){
    // draw bullet continuously: ... -> ........ 
    // 
    if(this.vectors.length > 0){
      const { x, y } = this.vectors.shift() as Coordinate;
      this.coor.x = x;
      this.coor.y = y;
      console.log(this.coor);
      this.draw();
      
      // check collision
      console.log(reachLimit(this.coor, Manager.limit));
      if(!reachLimit(this.coor, Manager.limit)){
        // add to process queue the next
        Manager.addProcess(() => {
          this.fire();
        });
      }
    }

    
  }


}

export default Bullet;