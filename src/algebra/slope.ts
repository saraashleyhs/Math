export const slope = {
    /**
     * function for finding the slope of two points.
     */
   slope(pointX1: number, pointY1: number, pointX2: number, pointY2: number) {
       const m = ((pointY2 - pointY1) / (pointX2 - pointX1));
       return m;
   }
}
