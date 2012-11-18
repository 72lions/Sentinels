var Application = (function() {

  var TOTAL_PARTICLES = 300;
  var WINDOW_WIDTH = 0;
  var WINDOW_HEIGHT = 0;

  var _canvas;
  var _context;
  var sVector = new Vector();
  var _mouse = new Vector();

  var _particles = [];
  var _self;

  var _wind = new Vector();
  var _gravity = new Vector(0, 0.0001);
  var _acceleration = new Vector(-1, 1);

  return {

    init: function() {

      _self = this;

      //Get canvas
      _canvas = document.getElementById('world');
      _context = _canvas.getContext('2d');

      if (_context) {

        this._resize();
        this._createForces();
        this._createParticles();
        this._addEventListeners();
        window.requestAnimationFrame(this._draw);

      }

    },

    _createForces: function() {

    },

    /**
    * Registers all the event listeners
    * @author Thodoris Tsiridis
    */
    _addEventListeners: function() {
      $(window).bind('resize', this._resize);
      $(window).bind('mousemove', this._onMouseMove);
    },

    _createParticles: function() {

      var i = TOTAL_PARTICLES;
      var particle;

      for (; i >= 0; i--) {
        particle = new Particle();
        particle.position.x = Math.floor(Math.random() * WINDOW_WIDTH);
        particle.position.y = Math.floor(Math.random() * WINDOW_HEIGHT);
        _particles.push(particle);
      }

    },

    _onMouseMove: function(event) {
      _mouse.x = event.clientX;
      _mouse.y = event.clientY;
    },

    _draw: function() {

      var i = TOTAL_PARTICLES;

      //_context.clearRect(0,0,window.innerWidth, window.innerHeight);
      _context.fillStyle = 'rgba(0,0,0,0.2)';
      _context.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

      for (; i >= 0; i--) {

        _acceleration = sVector.sSub(_mouse, _particles[i].position);
        _acceleration.normalize();
        //_acceleration.mult(0.5);
        _particles[i].addForce(_acceleration);
        _particles[i].update(_context);
      }

      window.requestAnimationFrame(_self._draw);
    },

    _resize: function() {
      _canvas.width = WINDOW_WIDTH = window.innerWidth;
      _canvas.height = WINDOW_HEIGHT = window.innerHeight;
    }
  };

})().init();
