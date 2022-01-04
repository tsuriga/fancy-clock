window.tsuriga = window.tsuriga || {};
window.tsuriga.clock = window.tsuriga.clock || {};

// Angles for left and right hands of clocks to turn in order to form each individual number, assuming each number is 4 clocks wide and 8 clocks tall
window.tsuriga.clock.angles = [
  // Number 0:
  [
    // First row
    [
      [405, 360], // Left hand, right hand
      [360, 360], // Left hand, right hand
      [180, 180], // Left hand, right hand
      [405, 180], // Left hand, right hand
    ],

    // Second row
    [
      [405, 405], // Left hand, right hand
      [405, 360], // Left hand, right hand
      [360, 315], // Left hand, right hand
      [405, 405], // Left hand, right hand
    ],

    // Third row
    [
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
    ],

    // Fourth row
    [
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
    ],

    // Fifth row
    [
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
    ],

    // Sixth row
    [
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
      [405, 405], // Left hand, right hand
    ],

    // Seventh row
    [
      [405, 405], // Left hand, right hand
      [180, 405], // Left hand, right hand
      [405, 180], // Left hand, right hand
      [405, 405], // Left hand, right hand
    ],

    // Eighth row
    [
      [315, 360], // Left hand, right hand
      [360, 360], // Left hand, right hand
      [360, 360], // Left hand, right hand
      [360, 405], // Left hand, right hand
    ],
  ],
];
