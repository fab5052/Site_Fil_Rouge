/*$(document).ready(function () {
    var itemClass;
    $.getJSON('json/customData.json', {get_param: 'value'}, function (getArray) {
        $.each(getArray.data, function (index, element) {
            var totalItems = $(".carousel-item").length;
            if(totalItems === 0) {
                itemClass = "carousel-item active";
            }
            else {
                itemClass = "carousel-item";
            }
            console.log(totalItems);
            var thisImage = element.image;
            $('.carousel-inner').append('<div class="'+itemClass+'">' +
                '<img class="d-block w-100" src="customData.json' + thisImage + '/thumbnail/width/900/height/600/strategy/crop" alt="">' +
                '<div class="carousel-caption">' +
                '<h3>' + element.name + '</h3>' +
                '<p>' + element.description + '</p>' +
                '</div>' + '</div>');
        });
    });
})

/*$("#carouselExemplesControls").carou
{
    jsonPath : 'json/customData.json',
    jsonSuccess : customDataSuccess
  });

function customDataSuccess(data){
    var content = "";
    for(var i in data["items"]){
   
      var img = data["items"][i].img;
      var alt = data["items"][i].alt;
   
      content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
    }
    $("#myCarousel").html(content);
   }*/

/*$(document).ready(function() {

    const carousel = $('#carousel');
    
    console.log(carousel)
    

    $.get("customData.json", function(data) {
        //console.log(data)
        for (let i = 0; i < data.items.length; i++) {
    
            const elem = $('<div></div>');
            elem.addClass('carousel-inner');
            elem.attr('id', data.items[i].id);
            elem.text(data.plat[i].libelle);
            carouselId.append(elem);
    
            const image = $('<img>');
            image.addClass('img-fluid');
            image.attr('src', data.items[i].image); 
            carouselId.append(image);
    
             
        }
    });
    

})



/*$(document).ready(function () {
    const carouselId = $('#carouselId');
    var itemClass;
    $.get('data.json', function (data) {
        $.each(getArray.data, function (index, element) {
            var totalItems = $(".carousel-item").length;
            if(totalItems === 0) {
                itemClass = "carousel-item active";
            }
            else {
                itemClass = "carousel-item";
            }
            console.log(totalItems);
            var thisImage = element.image;
            $('.carousel-inner').append(`<div class="${itemClass}"><img class="d-block w-100" src="data.json${thisImage}/width/900/height/600/strategy/crop" alt=""><div class="carousel-caption"><h1>${element.name}</h1><p>${element.description}</p></div></div>`);
        });
    });
})




/*$.getJSON('data.json', function(result){

    var i = 0;
    $('.sidenav li').each(function(e){
        $(this).find('img').attr('src',result[i].src);
        $(this).find('img').attr('alt',result[i].alt);
        i++;
    });  

})*/
"use strict";