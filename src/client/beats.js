'use strict';


function setup(audioCtx, beatAudios){
  [1,2,3,4].forEach(i => {
    const button = $(`a#beat${i}`);
    button.click(event => {
      const audioItem = beatAudios[i - 1];
      if(audioItem.playing){
        stop(audioItem, button);
      }
      else {
        start(audioCtx, audioItem, button);
      }
    });
  });
}

function stop(audioItem, button){
  audioItem.source.stop();
  delete audioItem.source;
  audioItem.playing = false;
  setNotPlaying(button);
}

function start(audioCtx, audioItem, button){
  console.log(`clicked ${button.attr('id')} ${audioItem.url}`);
  const buffer = audioItem.buffer;
  const source = audioCtx.createBufferSource(); //inexpensive
  source.loop = true;
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  audioItem.source = source;
  audioItem.playing = true;
  source.start();
  setPlaying(button);
}

function setPlaying(button){
  button.removeClass('red');
  button.addClass('green');
}

function setNotPlaying(button){
  button.removeClass('green');
  button.addClass('red');
}

module.exports = {
  setup
};
