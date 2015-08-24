var Leap = require('leapjs');

module.exports = function() {
  return function(deck) {
    var lastGesture = 0,
        now;
    new Leap.Controller({enableGestures: true})
      .connect()
      .on('frame', function (frame) {
        var gesture = frame.gestures[0];
        now = new Date().getTime();
        // one hand swipe gesture
        if (frame.gestures.length > 0 && gesture.type === 'swipe' && (now - lastGesture) > 300 ) {
          if (frame.hands.length === 1) {
            var x = gesture.direction[0],
                y = gesture.direction[1],
                isHorizontal = Math.abs(x) > Math.abs(y);
            if (isHorizontal) {
              if (x > 0) {
                deck.prev();
              } else {
                deck.next();
              }
              lastGesture = now;
            }
          }
        }
      });
  };
};
