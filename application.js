

//show menu items on click of restaurant
$(function(){
     console.log("Document Ready");
    $('.restaurant').on("click", function(){
        //ev.preventDefault();
        //var items = $(".items");
        //items.filter("[data-source=" + this.id + "]").show();
        //items.filter("[data-source!=" + this.id + "]").hide();
          $('.item').hide().filter("[data-source=" + this.id + "]").show();

    });










//Create restaurants and menu items dynamically


    var restaraunts = "", menuItems="";

    r.forEach(function(r,i){
        restaraunts += "<li id='" + r.id + "' class='restaurant'> <a href=''>" + r.name + "</a></li>";

        r.menu.forEach(function(m, i){

            menuItems += "<li class='item' data-source='" + r.id + "'> <input type='checkbox' value='" + m.price + "'/>"  +  m.title +"Price: $"+ m.price +  "</li>";



        });
    });
    $("ul#restarauntList").append(restaraunts);
    $("ul#menuList").append(menuItems);

    console.log(menuItems);


//This is the keystroke counter
    $("#notes").on("keyup", function(){
        $('#notesCounter').text($(this).val().length);
        $('#notes').css("background-color", this.value.length > 10 ? "#ff7777" : "fff")
    });




    var total = 0;
    $(".total").text("Your total is " + total + "!!");






    $(":checkbox").on("change", function() {
            if (this.checked && !this.hidden){
                total+=parseInt(this.value);
                console.log(total);
                $('.total').text(" Your total is $" + total);
            } else {
                console.log("unchecked");
                total -= parseInt(this.value);
                $(".total").text(" Your total is $" + total);
            }
        }
    );



});


//dynamically create JSON object
var  r = [
    {
        id: "one",
        name: "Pizza Hut",
        menu: [
            {title: " Special pizza", price: 123},
            {title: "Super Special pizza", price: 74},
            {title: "Uber pizza", price: 95}
        ]
    },
    {
        id: "two",
        name: "Taco Bell",
        menu: [
            {title: " Super Taco", price: 44},
            {title: "Extra Super Taco", price: 544},
            {title: "Duper Taco", price: 162}
        ]
    },
    {
        id: "three",
        name: "BK",
        menu: [
            {title: "Super Burger", price: 534},
            {title: "Extra Burger", price: 454},
            {title: "Duper Burger", price: 90}
        ]
    },
    {
        id: "four",
        name: "McDonalds",
        menu: [
            {title: "This Burger", price: 64},
            {title: "That Burger", price: 654},
            {title: "Some Burger", price: 34}
        ]
    }
];


//show menu items on click of restaurant
$(function(){
    console.log("Document Ready");
    $('.restaurant').on("click",function(){
        //ev.preventDefault();
        // var items = $(".items");
        // items.filter("[data-source=" + this.id + "]").show();
        // items.filter("[data-source!=" + this.id + "]").hide();
        $('.item').hide().filter("[data-source=" + this.id + "]").show();

    });










//Create restaurants and menu items dynamically


    var restaraunts = "", menuItems="";

    r.forEach(function(r,i){
        restaraunts += "<li id='" + r.id + "' class='restaurant'> <a href=''>" + r.name + "</a></li>";

        r.menu.forEach(function(m, i){

            menuItems += "<li class='item' data-source='" + r.id + "'> <input type='checkbox' value='" + m.price + "'/>"  +  m.title +"Price: $"+ m.price +  "</li>";



        });
    });
    $("ul#restarauntList").append(restaraunts);
    $("ul#menuList").append(menuItems);

    console.log(menuItems);


//This is the keystroke counter
    $("#notes").on("keyup", function(){
        $('#notesCounter').text($(this).val().length);
        $('#notes').css("background-color", this.value.length > 10 ? "#ff7777" : "fff")
    });




    var total = 0;
    $(".total").text("Your total is " + total + "!!");






    $(":checkbox").on("change", function() {
            if (this.checked && !this.hidden){
                total+=parseInt(this.value);
                console.log(total);
                $('.total').text(" Your total is $" + total);
            } else {
                console.log("unchecked");
                total -= parseInt(this.value);
                $(".total").text(" Your total is $" + total);
            }
        }
    );


    $.ajax({
        type: "GET",
        url: "https://github.com/codective.json",
        dataType: "jsonp",
        success: function(data) {
            var events = "";
            data.forEach(function(eventLine, i) {
                console.log(eventLine);
                events += "<li><a href='" + eventLine.url + "'>" + eventLine.type + "</a></li>";
            })
            $("#github").append(events);
        }
    });







});




