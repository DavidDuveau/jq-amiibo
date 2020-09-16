$(document).ready(() => {
  let amiibArray = [];

  $.get("http://127.0.0.1:8080/amiibo-array.json", function (data) {
    amiibArray = data.amiibo;
  });

  $.get("https://www.amiiboapi.com/api/type", (types) => {
    let typeArray = [];

    types.amiibo.forEach((type) => {
      $("#type-list").append("<li id=" + type.key + ">" + type.name + "</li>");

      $("#" + type.key).click(function () {
        $("#amiibo-pic").empty();

        typeArray = amiiboArray.filter((amiibo) => {
          return amiibo.type === type.name;
        });
        console.log(typeArray);

        typeArray.forEach((img) => {
          $("#amiibo-pic").append("<img src=" + img.image + " width=75px />");
        });
      });
    });

    $("#type-list").hide();

    $("#container-type").click(function () {
      $("#type-list").slideToggle("slow", function () {});
    });
  });

  $.get("https://www.amiiboapi.com/api/amiiboseries", (series) => {
    let serieArray = [];

    series.amiibo.forEach((serie) => {
      $("#serie-list").append(
        "<li id=" + serie.key + ">" + serie.name + "</li>"
      );

      $("#" + serie.key).click(function () {
        $("#amiibo-pic").text("");

        serieArray = amiiboArray.filter((amiibo) => {
          return amiibo.amiiboSeries === serie.name;
        });
        console.log(serieArray);

        serieArray.forEach((img) => {
          $("#amiibo-pic").append("<img src=" + img.image + " width=75px>");
        });
      });
    });

    $("#serie-list").hide();

    $("#container-serie").click(function () {
      $("#serie-list").slideToggle("slow", function () {});
    });
  });

  $.get("https://www.amiiboapi.com/api/character", (characters) => {
    let characArray = [];

    characters.amiibo.forEach((char) => {
      $("#char-list").append("<li id=" + char.key + ">" + char.name + "</li>");
      characArray.push(char);

      $("#" + char.key).click(function () {
        $("#amiibo-pic").text("");

        characArray = amiiboArray.filter((amiibo) => {
          return amiibo.character === char.name;
        });
        console.log(characArray);

        characArray.forEach((img) => {
          $("#amiibo-pic").append("<img src=" + img.image + " width=75px>");
        });
      });
    });

    $("#char-list").hide();

    $("#container-char").click(function () {
      $("#char-list").slideToggle("slow", function () {});
    });
  });

  /* 
  affichage("type", "#type-list", amiibArray);
  affichage("amiiboseries", "#serie-list", amiibArray);
  affichage("character", "#char-list", amiibArray);
   */
});
