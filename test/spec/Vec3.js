/* global describe, it, expect, Vec3, matrix4 */

(function () {
  'use strict';

  describe('Vec3', function () {
    describe('.transform()', function () {
      var v0 = new Vec3(0, 0, 0),
        v1 = new Vec3(1, 0, 0);


      it('should rotate and then translate', function () {
        var actual,
          r = matrix4.rotate(matrix4.identity(), Math.PI, 0, 0, 1);

        actual = v0.transform(matrix4.translate(r, 1, 1, 0));
        expect(actual.toArray()).toBeEqualish([-1, -1, 0]);

        actual = v1.transform(matrix4.translate(r, 1, 1, 0));
        expect(actual.toArray()).toBeEqualish([-2, -1, 0]);

      });

      it('should translate and then rotate', function () {
        var actual,
          t = matrix4.translate(matrix4.identity(), 1, 1, 0);

        actual = v0.transform(matrix4.rotate(t, Math.PI, 0, 0, 1));
        expect(actual.toArray()).toBeEqualish([1, 1, 0]);

        actual = v1.transform(matrix4.rotate(t, Math.PI, 0, 0, 1));
        expect(actual.toArray()).toBeEqualish([0, 1, 0]);

      });

      it('should scale', function () {
        var actual = v1.transform(matrix4.scale(matrix4.identity(), 4, 0, 0));
        expect(actual.toArray()).toBeEqualish([4, 0, 0]);
      });

    });


  });
})();
