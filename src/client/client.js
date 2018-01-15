'use strict';

const preloadSounds = require('./preload');
console.log('client starting.');

let globalAudios;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function loadApp() {
  preloadSounds(audioCtx)
    .then(audios => {
      console.log('Audio preload complete.');
      console.log(audios);
      globalAudios = audios;
      setBeatClickHandlers();
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

function setBeatClickHandlers(){
  [1,2,3,4].forEach(i => {
    $(`a#beat${i}`).click(event => {
      const audioItem = globalAudios[i - 1];
      if(audioItem.playing){
        audioItem.source.stop();
        delete audioItem.source;
        audioItem.playing = false;
      }
      else {
        console.log(`clicked a#beat${i} ${audioItem.url}`);
        console.log(audioItem);
        const buffer = audioItem.buffer;
        const source = audioCtx.createBufferSource(); //inexpensive
        source.loop = true;
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        audioItem.source = source;
        audioItem.playing = true;
        source.start();
      }
    });
  });
}
