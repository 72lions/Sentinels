var Vector = function(x, y) {

  return {

    x: x || 0,

    y: y || 0,

    sAdd: function(v1, v2) {
      return new Vector(v1.x + v2.x, v1.y + v2.y);
    },

    sSub: function(v1, v2) {
      return new Vector(v1.x - v2.x, v1.y - v2.y);
    },

    add: function(vector) {
      this.x += vector.x;
      this.y += vector.y;
    },

    sub: function(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
    },

    mult: function(number) {
      this.x *= number;
      this.y *= number;
    },

    div: function(n) {
      this.x /= n;
      this.y /= n;
    },

    mag: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    normalize: function() {
      m = this.mag();
      if (m !== 0) {
        this.div(m);
      }
    },

    limit: function(max) {

      if (this.mag() > max) {
        this.normalize();
        this.mult(max);
      }
    }

  };

};
