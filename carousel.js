$(document).ready(function () {
  const videos = [
    "https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1",
    "https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1",
    "https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1",
    "https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1",
    "https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1",
    "https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1",
    "https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1",
  ];
  function separateVideosToSlides(videos) {
    const separar = (itens, maximo) => {
      return itens.reduce((acumulador, item, indice) => {
        const grupo = Math.floor(indice / maximo);
        acumulador[grupo] = [...(acumulador[grupo] || []), item];
        return acumulador;
      }, []);
    };
    // console.log(separar(videos, 3));
    createSlides(separar(videos, 3));
    createButtons();
  }
  function createSlides(videos) {
    for (const arr of videos) {
      $(".video-slider").append(`<div class='slide'></div>`);
      for (const video of arr) {
        $(".slide")
          .last()
          .append(
            `<iframe
                class="video"
                src=${video}
            ></iframe>`
          );
      }
    }
  }
  function createButtons() {
    $(".video-slider").append(`<div class="slide-arrow left"></div>`);
    $(".video-slider").append(`<div class="slide-arrow right"></div>`);
  }
  separateVideosToSlides(videos);
  var pos = 0,
    slides = $(".slide"),
    numOfSlides = slides.length;
  function nextSlide() {
    // `[]` returns a vanilla DOM object from a jQuery object/collection
    slides[pos].video.stopVideo();
    console.log(slides[pos].video);
    slides.eq(pos).animate({ left: "-100%" }, 500);
    pos = pos >= numOfSlides - 1 ? 0 : ++pos;
    slides.eq(pos).css({ left: "100%" }).animate({ left: 0 }, 500);
  }

  function previousSlide() {
    slides[pos].video.stopVideo();
    slides.eq(pos).animate({ left: "100%" }, 500);
    pos = pos == 0 ? numOfSlides - 1 : --pos;
    slides.eq(pos).css({ left: "-100%" }).animate({ left: 0 }, 500);
  }

  $(".left").click(previousSlide);
  $(".right").click(nextSlide);
});

function onYouTubeIframeAPIReady() {
  $(".slide").each(function (index, slide) {
    // Get the `.video` element inside each `.slide`
    var iframe = $(slide).find(".video")[0];
    // Create a new YT.Player from the iFrame, and store it on the `.slide` DOM object
    slide.video = new YT.Player(iframe);
  });
}
