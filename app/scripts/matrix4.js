(function (global) {
    'use strict';
    var matrix4 = {
      zero: function () {
                return new Float32Array(16);
              },

      identity: function() {
        var result = new Float32Array(16);
        result.set([1.0 ,0.0 ,0.0 ,0.0,
                  0.0 ,1.0 ,0.0, 0.0,
                  0.0,0.0,1.0,0.0,
                  0.0,0.0,0.0,1.0]);

        return result;
      },

      multiply: function(mat4A, mat4B){
        var mat4C = new Float32Array(16);
        for (var i = 0; i<4; i++) {
          for (var j= 0; j<4; j++){
            for (var k=0; k<4; k++){
              mat4C [j*4+i]= mat4C [j*4+i] + mat4A[k*4+i] * mat4B[j*4+k];
            }
          }
        }
        return mat4C;
      },

      translate: function(mat4, tx, ty, tz){
        var translate = new Float32Array(16);
        translate.set([1.0, 0.0, 0.0, 0.0,
                       0.0, 1.0, 0.0, 0.0,
                       0.0, 0.0, 1.0, 0.0,
                       tx,  ty,  tz,  1.0]);
        return matrix4.multiply(mat4, translate);
      },

      scale: function(mat4, sx, sy, sz){
        var scale = new Float32Array(16);
        scale.set([sx,  0.0, 0.0, 0.0,
                   0.0, sy,  0.0, 0.0,
                   0.0, 0.0, sz,  0.0,
                   0.0, 0.0, 0.0, 1.0]);
        return matrix4.multiply(mat4, scale);
      },

      rotate: function(mat4, rad, x, y, z){
        var rotate = new Float32Array(16);
        rotate.set([(Math.cos(rad)+x*x*(1-Math.cos(rad))),    (y*x*(1-Math.cos(rad))),       (z*x*(1-Math.cos(rad))),       0,
              (x*y*(1-Math.cos(rad)) - z*Math.sin(rad)),  (Math.cos(rad)+y*y*(1-Math.cos(rad))),  (z*y*(1-Math.cos(rad))+x*Math.sin(rad)), 0,
              (x*z*(1-Math.cos(rad))+y*Math.sin(rad)),  (y*z*(1-Math.cos(rad))-x*Math.sin(rad)),  (Math.cos(rad)+z*z*(1-Math.cos(rad))),  0,
               0,                0,                0,               1]) ;
        return matrix4.multiply(mat4, rotate);
      },

      toArray: function(mat4){
        var toArray= new Array(16);
        for(var j=0;j<=4;j++){
          for(var i=0;i<=4;i++){
            toArray[j*4+i] = mat4[j*4+i];
          }
        }
        return toArray;

      },

      fromArray: function (mat4JsArray){
          var fromArray= new Float32Array(16);
          for(var j=0;j<=4;j++){
            for(var i=0;i<=4;i++){
              fromArray[j*4+i]=mat4JsArray[j*4+i];
            }
          }
          return fromArray;
        }
    };

    global.matrix4 = matrix4;

  }(this));
