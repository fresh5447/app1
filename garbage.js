Parse.initialize("Meyn2nCyKeahZsMt0ujlfG8gsv7iMhGIeNuWLsRR", "WHOdw7C4jGQM9skogwpPJXVyexHcSHlCUZBjKuMA");


$(function() {

    $("#restaurantList").on("click", ".restaurant", function() {
//var items = $(".item");
//items.filter("[data-source=" + this.id + "]").show();
//items.filter("[data-source!=" + this.id + "]").hide();
        $(".item").hide().filter("[data-source=" + this.id + "]").show();
    })

    $("body").on("click", "h1", function() {
        console.log(this);
    })



    $("#notes").on("keyup", function() {
        $("#notesCounter").text($(this).val().length);
        $("#notes").css("background-color", this.value.length > 10 ? "#ff7777" : "#fff")

//if (this.value.length > 10) {
// $("#notes").css("background-color", "#ff7777");
//} else {
// $("#notes").css("background-color", "#fff");
//}
    })

    //Parse Restaurant
    var Restaurant = Parse.Object.extend("Restaurant");
    var query = new Parse.Query(Restaurant);
    query.find({
        success: function(results) {
            var restaurants = "", menuItems = "";

            results.forEach(function(r, i) {
                restaurants += "<li><a id='" + r.id + "' class='restaurant' href='#'>" + r.attributes.name + "</a></li>";
// r.menu.forEach(function(item, i) {
// menuItems += '<li class="item" data-source="' + r.id + '"><input type="checkbox" />' + item.title + '</li>';
// });
            })

            $("ul#restaurantList").append(restaurants);
            $("ul#itemList").append(menuItems);
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });


    //Parse Menu Items
    var MenuItem = Parse.Object.extend("MenuList");
    var query = new Parse.Query(MenuList);
    query.find({
        success: function(results) {
            var restaurants = "", menuItems = "";

            results.forEach(function(r, i) {
                restaurants += "<li><a id='" + results.id + "' class='menuList' href='#'>" + results.attributes.title + "</a></li>";
// r.menu.forEach(function(item, i) {
// menuItems += '<li class="item" data-source="' + r.id + '"><input type="checkbox" />' + item.title + '</li>';
// });
            })

            $("ul#restaurantList").append(restaurants);
            $("ul#itemList").append(menuItems);
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

});

var saveNewRestaraunt =

$("#newRestaurant").on("change", function(){
    saveNewRestaurant(this.value);
    this.value="";
    fetchParseData;
}

    //trigger the function.. reset the form...



