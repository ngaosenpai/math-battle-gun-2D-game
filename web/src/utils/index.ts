import { 
  compile,
  range 
} from 'mathjs';
import { Coordinate, Limit, Range } from '@types';

export const expressionEvaluate = (equation: string, [from, to]: Range) => {
  const step = 0.0002;
  const expr = compile(equation);
  const xValues = range(from, to + step, step).toArray();
  const values = xValues.map(x => ({
    x,
    y: expr.evaluate({x})
  }));
  return values;
};

export const reachLimit = (coor: Coordinate, limit: Limit) => {
  return coor.x >= limit.right ||
    coor.x <= limit.left ||
    coor.y <= limit.up ||
    coor.y >= limit.down;
};
