const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

// Chamada da API
fetch(apiUrl)
	.then((response) => {
		// Salvar e retornar resposta da requisição como Json
		return response.json();
	})
	.then((data) => {   
    $index = 0; 
    var rooms = document.getElementById("rooms");
    // Utilizar cada item presente da resposta
    for(var i = 0; i < 3; i++) {      
      var divCarouselItem = document.createElement("div");
      $index == 0 ? divCarouselItem.classList.add("carousel-item", "active") : divCarouselItem.className = "carousel-item";

      var divColsArray = [];
		  data.forEach((room) => {
        // Elemento principal
        var divCols = document.createElement("div");
        divCols.classList.add("col-12", "col-md-4", "col-lg-4");

        // Nova div representando um quarto
        var div = document.createElement("div");
        // Definir classe da div
        div.className = "card";

        //Imagem que vai ser inserida na div do quaeto
        var img = document.createElement("img");
        img.className = "card-img-top"
        img.src = room.photo;

        // Inserir imagem na div
        div.appendChild(img);
        
        // Título que vai ser inserido na div do quarto
        var h5 = document.createElement("h5");
        h5.className = "card-title"
        // Inserir texto no elemento h5
        h5.innerHTML = room.name;

        // Inserir texto na div
        div.appendChild(h5);
        
        // Descrição que vai ser inserido na div do quarto
        var p = document.createElement("p");
        p.className = "card-text"
        // Inserir texto no elemento p
        p.innerHTML = room.property_type;

        // Inserir texto na div
        div.appendChild(p);

        // Preço que vai ser inserido na div do quarto
        var h6 = document.createElement("h6");
        h6.className = "card-text"
        // Inserir texto no elemento h6
        h6.innerHTML = "<strong>R$ " + room.price + "</strong>/noite";

        // Inserir texto na div
        div.appendChild(h6);

        //inserir div do card na divCols
        divCols.appendChild(div);

        divColsArray.push(divCols);
        
      });
      //inserir divCols na divCarousel
      for(var i = 0; i < 3; i++) { 
        divCarouselItem.appendChild(divColsArray[i]);
      }
      $index ++;

      // Inserir divCarousel no elemento principal
      rooms.appendChild(divCarouselItem);
    }
	});


  $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i = 0; i < 4; i ++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });