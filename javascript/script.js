const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

// Chamada da API
fetch(apiUrl)
	.then((response) => {
		// Salvar e retornar resposta da requisição como Json
		return response.json();
	})
	.then((data) => {
		// Utilizar cada item presente da resposta
		data.forEach((room) => {
			// Elemento principal
			var rooms = document.getElementById("rooms");

			// Nova div representando um quarto
			var div = document.createElement("div");
			// Definir classe da div
			div.classList.add("card", "col-m-4", "col-lg-4");

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

			// Inserir div no elemento principal
			rooms.appendChild(div);
		});
	});
