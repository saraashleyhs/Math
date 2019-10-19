/**
 * Methods for geometric operations on circles.
 */
export const circle = {
  /**
   * Calculate the area of a circle with a given radius.
   * @param radius
   */
  area(radius: number) {
    if (radius < 0) throw new Error('Radius must be greater than 0!');
    if (typeof radius !== 'number') throw new Error('Radius must be a number!');
    return Math.PI * radius * radius;
  }
};
