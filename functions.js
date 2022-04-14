$(document).ready(function () {
  // colocar o mouse adiciona a imagem
  $(".header ul li a").mouseover((anchor) => {
    $(`#${anchor.currentTarget.id}`)
      .parent()
      .prepend(
        `<img style="display: flex" class='blood fade-in' src='assets/sangue.png' />`
      );
  });
  // tirar o mouse remove a img
  $(".header ul li a").mouseout((anchor) => {
    $(".header ul li img").remove();
  });
  $(".videos").click(() => {
    $(".modalVideo").modal("show");
  });
  $(".clipes").click(() => {
    $(".modalClipes").modal("show");
  });
});
