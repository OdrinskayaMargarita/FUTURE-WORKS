import Plyr from 'plyr';

export default () => {
  let videos = document.querySelectorAll('.video__holder');

  if (videos.length) {

    videos.forEach(function(video) {

      const player = new Plyr(video, {
        controls: [
          'play',
          'progress',
        ],
        hideControls: false,
        fullscreen: {
          enabled: false
        },
        tooltips: {
          controls: false,
          seek: false
        }
      });

      let parent = video.closest('.video');
      if (parent) {
        video.addEventListener('play', (e) => {
          parent.classList.add('video--playing');
        });
        video.addEventListener('pause', (e) => {
          parent.classList.remove('video--playing');
        });
      }
    });
  }
}