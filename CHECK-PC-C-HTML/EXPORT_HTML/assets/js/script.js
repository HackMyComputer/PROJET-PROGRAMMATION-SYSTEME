$(document).ready(function () {
  $(".menu").removeClass("hide-left");
  setTimeout(() => {
    $(".container-tab").removeClass("hide-right");
  }, 1200);

  $(".button-filter").on("click", function () {
    $(".button-filter").removeClass("active");
    $(this).addClass("active");

    let filtre = $(this).text();
    let white = true;

    $(".get-machine").each(function () {
      let get_machine = $(this).text();
      if (get_machine == filtre || filtre == "ALL") {
        $(this).parent().removeClass("hide");
        if (white) {
          $(this).parent().removeClass("white");
          $(this).parent().addClass("violet");
        } else {
          $(this).parent().removeClass("violet");
          $(this).parent().addClass("white");
        }

        white = !white;
      } else if (filtre == "PRESENT") {
        if (get_machine != "ABSENT") {
          $(this).parent().removeClass("hide");
        } else {
          $(this).parent().addClass("hide");
        }
        white = !white;
      } else if (filtre == "ABSENT") {
        if (get_machine != "ABSENT") {
          $(this).parent().addClass("hide");
        } else {
          $(this).parent().removeClass("hide");
        }
        white = !white;
      } else {
        $(this).parent().addClass("hide");
      }
    });
  });

  /* $(window).scroll(function () {
    $(".info-d, .info-g").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      // alert("valeur scroll : " + scroll)
      // alert("valeur offset : "+ position)
      // alert("valeur height : "+ windowHeight)

      if (scroll > position - windowHeight + 200) {
        $(this).addClass("slide-gd");
        $(".descendre").addClass("invisible");
      }
    });
  }); */
  /* $(".note").each(function(){
        note = $(this).text()
        if (note>5){
            $(this).addClass("px-2 rounded")
            $(this).attr("style", "background-color:#00ae28;")
        }
        else if (note>3) {
            $(this).addClass("px-2 rounded")
            $(this).attr("style", "background-color:#ff6407;")
        }
        else{
            $(this).addClass("px-2 rounded")
            $(this).attr("style", "background-color:#ff0018;")
        }
    }) */
});

function filter_click() {
  alert("click");
}
