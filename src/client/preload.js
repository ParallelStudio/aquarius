'use strict';

function preloadSounds(ctx) {
  const audioUrls = [
    '/beats/looperman-l-2268012-0119343-katace-distortion-trap-piano.mp3',
    '/beats/looperman-l-1284487-0119491-wobler-beat-two.mp3',
    '/beats/looperman-l-1582059-0119184-benjiiii95-hard-trap-drums-wo-808-trap-loop.mp3',
    '/beats/looperman-l-2166475-0119375-bfta-rich-the-kid-type-loop.mp3',
    '/beats/looperman-l-1599525-0119320-flaviogomes-to-the-max-bpm-140.mp3'
  ];
  const promises = audioUrls.map(fetchAndConvert(ctx));
  return Promise.all(promises);
}

function fetchAndConvert(ctx){
  return url => {
    // console.log(`fetching ${url}`);
    return fetch(new Request(url))
      .then(response => response.arrayBuffer())
      .then(buff => ctx.decodeAudioData(buff))
      .then(audioBuff => {
        // console.log(url, audioBuff);
        return { url: url, buffer: audioBuff };
      });
    };
}

module.exports = preloadSounds;
