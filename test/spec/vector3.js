/* global describe, it, expect, vector3, matrix4 */

(function () {
  'use strict';

  describe('vector3', function () {
    describe('.transform()', function () {
      var v0 = [0, 0, 0],
        v1 = [1, 0, 0];


      it('should rotate and then translate', function () {
        var actual,
          r = matrix4.rotate(matrix4.identity(), Math.PI, 0, 0, 1);

        actual = vector3.transform(v0, matrix4.translate(r, 1, 1, 0));
        expect(actual).toBeEqualish([-1, -1, 0]);

        actual = vector3.transform(v1, matrix4.translate(r, 1, 1, 0));
        expect(actual).toBeEqualish([-2, -1, 0]);

      });

      it('should translate and then rotate', function () {
        var actual,
          t = matrix4.translate(matrix4.identity(), 1, 1, 0);

        actual = vector3.transform(v0, matrix4.rotate(t, Math.PI, 0, 0, 1));
        expect(actual).toBeEqualish([1, 1, 0]);

        actual = vector3.transform(v1, matrix4.rotate(t, Math.PI, 0, 0, 1));
        expect(actual).toBeEqualish([0, 1, 0]);

      });

      it('should scale', function () {
        var actual = vector3.transform(v1, matrix4.scale(matrix4.identity(), 4, 0, 0));
        expect(actual).toBeEqualish([4, 0, 0]);
      });

    });


  });
})();
