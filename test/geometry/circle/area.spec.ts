import math from '../../../src/index';
import { expect } from 'chai';

describe('math', function() {
  describe('geometry', function() {
    describe('circle', function() {
      describe('#area', function() {
        it('Should evaluate the area of a circle', function() {
          const input = 1;
          const expected = Math.PI;

          const actual = math.geometry.circle.area(input);

          expect(actual).to.equal(expected);
        });

        it('Should throw an error with negative radius', function() {
          const input = -1;

          expect(() => math.geometry.circle.area(input)).to.throw(
            'Radius must be greater than 0!'
          );
        });
      });
    });
  });
});
