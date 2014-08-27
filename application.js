$(function(){
     console.log("Document Ready");
    $('.restaurant').on("click",function(){
       // var items = $(".items");
       // items.filter("[data-source=" + this.id + "]").show();
       // items.filter("[data-source!=" + this.id + "]").hide();
        $(".item").hide().filter("[data-source=" + this.id + "]").show();

    })
    })

var  r = [
    {
        id: "one",
        name: "Pizza Hut",
        menu: [
            {title: " Special pizza"},
            {title: "Super Special pizza"},
            {title: "Uber pizza"}
        ]
    },
    {
        id: "two",
        name: "Taco Bell",
        menu: [
            {title: " Super Taco"},
            {title: "Extra Super Taco"},
            {title: "Duper Taco"}
        ]
    },
    {
        id: "three",
        name: "BK",
        menu: [
            {title: "Super Burger"},
            {title: "Extra Burger"},
            {title: "Duper Burger"}
        ]
    },
    {
        id: "four",
        name: "McDonalds",
        menu: [
            {title: "This Burger"},
            {title: "That Burger"},
            {title: "Some Burger"}
        ]
    }
];


var restaraunts = "", menuItems="";

r.forEach(function(r,i){
        restaraunts += "<li id='" + r.id + "' class='restaurant'> <a href='#'>" + r.name + "</a></li>";

        r.menu.forEach(function(m, i){
            menuItems += "<li class='item' data-source='" + r.id + "'> <input type='checkbox'/>"  +  m.title + "</li>";


    })
 })
    $("ul#restarauntList").append(restaraunts);
    $("ul#menuList").append(menuItems);








//will work on any h1 element
$('body').on("click", 'h1' ,function(){
    console.log(this);
})






//while i am counting count how many variables i have entered.
//to access the text that you typed you need .value, change event, and length
// .val = keyCount
//change(key

$("#notes").on("keypress", function(){
    $('#notesCounter').text($(this).val().length);
    $('#notes').css("background-color", this.value.length > 10 ? "#ff7777" : "fff")
})
