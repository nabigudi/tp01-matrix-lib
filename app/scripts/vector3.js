(function (global) {
  'use strict';

  var vector3 = {
    transform: function(vec3, mat4){
      //add 1 in the end of the vector vec3
      var vec4 = new Float32Array(4);

      vec4.set([vec3[0],vec3[1],vec3[2],1.0]);
      var tmp = vector3.multiplyVector4 (mat4, vec4);
      return  new Float32Array([tmp[0], tmp[1], tmp[2]]);
    },

    multiplyVector4: function(mat4A, vec4){
      var result = new Float32Array(4);
      for (var i = 0; i<4; i++) {
        for (var j= 0; j<4; j++){
          result [i]= result [i] + (mat4A[j*4+i] * vec4[j]);
        }
      }
      return result;
    }
  };

  global.vector3 = vector3;

}(this));
