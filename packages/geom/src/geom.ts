import * as math from "math";

export class Point {
  constructor(public x: number, public y: number) {}

  public add(other: Point): Point {
    return new Point(math.add(this.x, other.x), math.add(this.y, other.y));
  }

  public subtract(other: Point): Point {
    return new Point(math.subtract(this.x, other.x), math.subtract(this.y, other.y));
  }

  public scale(factor: number): Point {
    return new Point(math.multiply(this.x, factor), math.multiply(this.y, factor));
  }

  public toString(): string {
    return `{x:${this.x}, y:${this.y}}!!`;
  }
}
