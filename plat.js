$(document).ready(function () {
    const menuContainer = $('#menu-container');
    const categoryFilter = $('#categoryFilter');
    const jsonDataUrl = 'customData.json';

    // Charger le fichier JSON en utilisant Ajax
    $.ajax({
      url: jsonDataUrl,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        // Générer les options de catégorie
        generateCategoryOptions(data);

        // Générer les plats initiaux
        generateMenu(data);

        // Mettre en place le gestionnaire d'événements pour le changement de catégorie
        categoryFilter.change(function () {
          const selectedCategory = $(this).val();
          filterMenu(data, selectedCategory);
        });
      },
      error: function (error) {
        console.error('Erreur lors du chargement du fichier JSON.', error);
      }
    });

    // Fonction pour générer les options de catégorie
    function generateCategoryOptions(data) {
      data.categorie.forEach(category => {
        categoryFilter.append($('<option>', {
          value: category.id_categorie,
          text: category.libelle
        }));
      });
    }

    // Fonction pour générer le menu initial
    function generateMenu(data) {
      menuContainer.empty();
      data.plat.forEach(item => {
        const card = $('<div></div>').addClass('col-md-4');
        card.append('<div class="card">');
        card.find('.card').append('<img class="card-img-top" src="' + item.image + '" alt="' + item.libelle + '">');
        card.find('.card').append('<div class="card-body">');
        card.find('.card-body').append('<h5 class="card-title">' + item.libelle + '</h5>');
        card.find('.card-body').append('<p class="card-text">' + item.description + '</p>');
        card.find('.card-body').append('<p class="card-text">Prix: ' + item.prix + '€</p>');
        card.append('</div></div>');

        menuContainer.append(card);
      });
    }

    // Fonction pour filtrer le menu par catégorie
    function filterMenu(data, category) {
      const filteredMenu = data.plat.filter(item => category === 'all' || item.id_categorie === parseInt(category));
      generateMenu({ plat: filteredMenu });
    }
  });