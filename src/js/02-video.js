import Player from '@vimeo/player';
import _ from 'lodash';

const KEY_NAME = 'videoplayer-current-time';
const player = new Player(document.querySelector('#vimeo-player'));

setTimeOnLoad(localStorage.getItem(KEY_NAME));

player.on(
  'timeupdate',
  _.throttle(data => {
    localStorage.setItem(KEY_NAME, data.seconds);
  }, 1000)
);

function setTimeOnLoad(time) {
  player.setCurrentTime(time).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('Incorrect data');
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        console.log('Incorrect data');
        // some other error occurred
        break;
    }
  });
}
