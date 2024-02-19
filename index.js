$(document).ready(function () {
  const carousel = $('#carouselId');
  const indicators = carousel.find('.carousel-indicators');
  const inner = carousel.find('.carousel-inner');

  $.get("data.json", function (data) {
      for (let i = 0; i < data.items.length; i++) {
          const indicator = $('<li></li>').attr('data-bs-target', '#carouselId').attr('data-bs-slide-to', i);
          indicators.append(indicator);

          const item = $('<div></div>').addClass('carousel-item');
          if (i === 0) {
              item.addClass('active');
          }

          const imageContainer = $('<div></div>').addClass('image-container');
          const image = $('<img>').addClass('img-fluid');
          image.attr('src', data.items[i].image);
          imageContainer.append(image);
          item.append(imageContainer);

          const caption = $('<div></div>').addClass('carousel-caption');
          const titre = $('<div></div>').addClass('titre-top');
          titre.text(data.items[i].titre);
          caption.append(titre);

          const description = $('<p></p>');
          description.text(data.items[i].description);
          caption.append(description);

          item.append(titre);
          item.append(imageContainer);
          item.append(caption);
          item.append(description);
          
          inner.append(item);
      }
  });
});
