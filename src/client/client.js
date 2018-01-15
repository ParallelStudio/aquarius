'use strict';

const preloadSounds = require('./preload');
const beats = require('./beats');

console.log('client starting.');

let globalAudios;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function loadApp() {
  preloadSounds(audioCtx)
    .then(audios => {
      console.log('Audio preload complete.');
      console.log(audios);
      globalAudios = audios;
      beats.setup(audioCtx, audios);
    })
    .catch(err => {
      console.log('Error loading sounds', err);
    });
}

if (document.readyState != 'loading') {
  loadApp();
} else {
  document.addEventListener('DOMContentLoaded', loadApp);
}
