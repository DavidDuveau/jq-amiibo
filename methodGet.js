function affichage(url, idList, amiiboArray) {
  let genericArray;

  $.get("https://www.amiiboapi.com/api/" + url, (data) => {
    data.amiibo.forEach((element) => {
      $(idList).append("<li id=" + element.key + ">" + element.name + "</li>");

      $("#" + element.key).click(() => {
        $("#amiibo-pic").empty();

        genericArray = amiiboArray.filter((amiibo) => {
          return amiibo.type === element.name;
        });
        console.log(genericArray);

        genericArray.forEach((img) => {
          $("#amiibo-pic").append("<img src=" + img.image + ">");
        });
      });
    });
    $(idList).hide();

    $("#container-type").click(() => {
      $(idList).slideToggle("slow", function () {});
    });
  });
}
