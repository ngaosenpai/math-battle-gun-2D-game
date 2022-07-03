import { Sphere } from '@components/2Ds';
import { 
  Limit,
  Object2D, 
  ProcessFunction 
} from '@types';
import p5Types from 'p5';

class Manager{
  private objects: Object2D[];
  private processQueue: ProcessFunction[];
  public limit : Limit;
  private worldHeight: number;
  private worldWidth: number;
  public worldScale: number;
  private p5 : p5Types | null;

  constructor(){
    this.objects = [];
    this.processQueue = [];
    this.limit = {
      up: 0,
      down: 0,
      left: 0,
      right: 0
    };
    this.worldWidth = 0;
    this.worldHeight = 0;
    this.worldScale = 0.0001;
    this.p5 = null;
  }

  public addObject(object : Object2D){
    this.objects.unshift(object);
  }

  public addProcess(process : ProcessFunction){
    this.processQueue.unshift(process);
  }

  public eventLoop(){
    if(this.processQueue.length > 0){
      const process = this.processQueue.pop() as ProcessFunction;
      process.call(null);
    }
  }

  public init(width: number, height: number, p5: p5Types){
    this.worldHeight = height * this.worldScale;
    this.worldWidth = width * this.worldScale;

    this.limit = {
      up: 0,
      down: this.worldHeight,
      left: 0,
      right: this.worldWidth
    };

    console.log(width, height);
    console.log(this.worldWidth, this.worldHeight);
    console.log(this.worldScale);
    console.log(this.limit);

    this.p5 = p5;

    // axises
    this.p5.stroke('gray');
    this.p5.strokeWeight(2);
    this.p5.line(0, height/2, width, height/2);
    this.p5.line(width/2, 0, width/2, height);

    // center
    const center = new Sphere(this.p5, { x: width/2, y: height/2 }, 10, 'black');
    center.draw();

  }

}

const M = new Manager();
export default M;