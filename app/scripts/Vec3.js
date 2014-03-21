(function () {

  'use strict';
  var Vec3 = function (x, y,z){
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    };

  Vec3.prototype.transform = function (vec3, mat4){
      //add 1 in the end of the vector vec3
      vec3.push(1);
      return  Vec3.multiplyVector4 (mat4, vec3);
    };

  Vec3.prototype.multiplyVector4 = function (mat4A, vec3){
      var vec4 = new Array(4);

      for (var i = 0; i<4; i++) {
        for (var j= 0; j<4; j++){
          vec4 [i] = vec4 [i] + (mat4A [j*4+i] * vec3[i]);
        }
      }

      return Vec3.fromArray(vec4);
    };

  Vec3.prototype.toArray = function(){
      var toArray = new Array(3);
      toArray[0]=this.x;
      toArray[1]=this.y;
      toArray[2]=this.z;
      return toArray;

    };

  Vec3.prototype.fromArray = function (vec){
      var result = new Vec3(vec[0], vec[1],vec[2]);
      return result;
    };

}(this));




