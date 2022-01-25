const data = [
  { color: "#FFFFFF", title: "White" },
  { color: "#DA1212", title: "Lava" },
  { color: "#DACC96", title: "Winter Hazel" },
  { color: "#064635", title: "Evergreen" },
  { color: "#1572A1", title: "Nice Blue" },
  { color: "#655D8A", title: "Dolphin" },
  { color: "#FC28FB", title: "Bright Neon Pink" },
  { color: "#D9D7F1", title: "Fog" },
  { color: "#FDFF8F", title: "Pale Canary" },
  { color: "#71DFE7", title: "Turquoise Blue" },
  { color: "#3F3351", title: "Ship Grey" },
];

$(document).ready(function () {
    $(".box").each(function(i){
        $(this).addClass("box-style");
        $(this).css("background-color", data[i].color);
        $(this).html(data[i].title.toUpperCase());

        // Function Click
        const handleCLick = function () {
          $("#box1").css("background-color", data[i].color);
          $("#box1").html(data[i].title.toUpperCase());
        };
        $(this).click(handleCLick)

      if (i === 0) {
        $("#box1").addClass("box-style-spesial");
      }
    });

    // Button Reset
     $("#reset").click(function() {
        $("#box1").css("background-color", data[0].color);
        $("#box1").html(data[0].title.toUpperCase());
     });
});
