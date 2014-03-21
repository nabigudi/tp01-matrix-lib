/* global describe, it, expect, matrix4 */

(function () {
  'use strict';

  describe('matrix4', function () {
    describe('.zero()', function () {

      it('should be instanceof Float32Array', function () {
        var m = matrix4.zero();
        expect(m).instanceof(Float32Array);
      });

      it('should have 16 zeros', function () {
        var m = matrix4.zero();

        expect(m).toBeEqualish([
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0
        ]);
      });

    });

    describe('.identity()', function () {
      it('should be instanceof Float32Array', function () {
        var m = matrix4.identity();
        expect(m).instanceof(Float32Array);
      });

      it('should have 1s in the main diagonal', function () {
        var m = matrix4.identity();

        expect(m).toBeEqualish([
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
        ]);
      });
    });

    describe('.multiply()', function () {
      it('should be instanceof Float32Array', function () {
        var mz = matrix4.zero(),
          mi = matrix4.identity(),
          actual = matrix4.multiply(mz, mi);

        expect(actual).instanceof(Float32Array);
      });

      it('should return zero if multiplying by zero matrix', function () {
        var mz = matrix4.zero(),
          mi = matrix4.identity(),
          actual = matrix4.multiply(mz, mi);

        expect(actual).toBeEqualish([
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0
        ]);

      });

      it('should return same matrix if multiplying by identity', function () {
        var test = matrix4.fromArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
          actual = matrix4.multiply(matrix4.identity(), test);
        expect(actual).toBeEqualish(test);
      });

    });

    describe('.translate()', function () {
      it('should be instanceof Float32Array', function () {
        var m = matrix4.translate(matrix4.identity(), 2, 4, 6);
        expect(m).instanceof(Float32Array);
      });


      it('should translate to xyz', function () {
        var m = matrix4.translate(matrix4.identity(), 2, 4, 6);

        expect(m).toBeEqualish([
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          2, 4, 6, 1
        ]);
      });
    });


    describe('.scale()', function () {
      it('should be instanceof Float32Array', function () {
        var m = matrix4.scale(matrix4.identity(), 2, 4, 6);
        expect(m).instanceof(Float32Array);
      });

      it('should scale to xyz', function () {
        var m = matrix4.scale(matrix4.identity(), 2, 4, 6);

        expect(m).toBeEqualish([
          2, 0, 0, 0,
          0, 4, 0, 0,
          0, 0, 6, 0,
          0, 0, 0, 1
        ]);
      });
    });


    describe('.rotate()', function () {

      it('should be instanceof Float32Array', function () {
        var m = matrix4.rotate(matrix4.identity(), Math.PI, 1, 0, 0);
        expect(m).instanceof(Float32Array);
      });

      it('should rotate around x', function () {
        var m = matrix4.rotate(matrix4.identity(), Math.PI, 1, 0, 0);

        expect(m).toBeEqualish([
          1, 0, 0, 0,
          0, Math.cos(Math.PI), Math.sin(Math.PI), 0,
          0, -Math.sin(Math.PI), Math.cos(Math.PI), 0,
          0, 0, 0, 1
        ]);
      });

      it('should rotate around y', function () {
        var m = matrix4.rotate(matrix4.identity(), Math.PI, 0, 1, 0);
        expect(m).toBeEqualish([
          Math.cos(Math.PI), 0, Math.sin(Math.PI), 0,
          0, 1, 0, 0, -Math.sin(Math.PI), 0, Math.cos(Math.PI), 0,
          0, 0, 0, 1
        ]);
      });

      it('should rotate around z', function () {
        var m = matrix4.rotate(matrix4.identity(), Math.PI, 0, 0, 1);
        expect(m).toBeEqualish([
          Math.cos(Math.PI), -Math.sin(Math.PI), 0, 0,
          Math.sin(Math.PI), Math.cos(Math.PI), 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
        ]);
      });

    });


  });
})();
