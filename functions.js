$(document).ready(function () {
  $(".header ul li a").mouseover((anchor) => {
    $(`#${anchor.currentTarget.id}`)
      .parent()
      .prepend(
        `<img style="display: flex" class='blood fade-in' src='assets/sangue.png' />`
      );
  });
  $(".header ul li a").mouseout((anchor) => {
    $(".header ul li img").remove();
  });
  $(".videos").click(() => {
    console.log("aq");
    $(".modalVideo").modal("show");
  });
  $(".clipes").click(() => {
    console.log("aq");
    $(".modalClipes").modal("show");
  });
});
