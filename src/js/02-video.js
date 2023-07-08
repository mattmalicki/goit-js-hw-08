import Player from '@vimeo/player';
import _ from 'lodash';

const player = new Player(document.querySelector('#vimeo-player'));

setTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
});

function setTime(time) {
  player
    .setCurrentTime(time)
    .then(function (seconds) {})
    .catch(function (error) {
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
