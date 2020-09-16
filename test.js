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
        $("#amiibo-pic").append("<img src=" + img.image + ">");
      });
    });
  });

  $("#type-list").hide();

  $("#container-type").click(function () {
    $("#type-list").slideToggle("slow", function () {});
  });
});
