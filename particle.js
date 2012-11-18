var Particle = function() {

  var _velocity = new Vector();
  var _force = new Vector();

  this.position = new Vector();
  this.radius = 3;

  this.addForce = function(vector) {
    _force.x += vector.x;
    _force.y += vector.y;
  };

  this.reset = function() {
    _force.x = 0;
    _force.y = 0;
  }

  this.addRandomness = function() {
    this.position.x += -1 + Math.random() * 2;
    this.position.y += -1 + Math.random() * 2;
  }

  this.update = function(ctx) {

    _velocity.add(_force);
    _velocity.limit(15);
    this.position.add(_velocity);

    this.addRandomness();

    this.reset();

    if (this.position.x + this.radius * 0.5 >= window.innerWidth) {
      _velocity.x *= -1;
    }

    if (this.position.y + this.radius * 0.5 >= window.innerHeight) {
      _velocity.y *= -1;
    }

    if (this.position.x + this.radius * 0.5 <= 0) {
      _velocity.x *= -1;
    }

    if (this.position.y + this.radius * 0.5 <= 0) {
      _velocity.y *= -1;
    }

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(
        this.position.x,
        this.position.y,
        this.radius,
        0,
        Math.PI * 2,
        true
    );
    ctx.closePath();
    ctx.stroke();
    ctx.fill();



  };

};
