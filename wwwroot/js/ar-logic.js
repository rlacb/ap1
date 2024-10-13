// In ar-logic.js
requirejs.config({
  paths: {
    'ar.js': 'path/to/ar.js'
  }
});

define(['ar.js'], function(AR) {
  // Initialize the AR engine
  AR.init({
    // Set the camera device (optional)
    camera: {
      facingMode: 'user',
    },
    // Set the scene mode (optional)
    sceneMode: 'stable',
  });

  // Get the canvas element
  const canvas = document.getElementById('ar-canvas');

  // Expose the AR object to our Blazor component
  window.AR = AR;
});