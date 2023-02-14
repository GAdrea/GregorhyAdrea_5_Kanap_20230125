// Récupération de l'ID
let params = new URLSearchParams(location.search);
let productId = params.get("id");
fetch("http://localhost:3000/api/products/"+productId)
  .then((res) => res.json())
  .then((product) => showProduct(product));
  // Appel de la même API sur les deux pages

  function showProduct(product){
    console.log(product);
    // Un seul produit donc pas de boucle
    // Cibler les éléments
    for (let product of product){
      console.log(product);
      let article = document.createElement("article");


      let imageElement = document.createElement("img");
      image.setAttribute("src", product.imageUrl);
      image.setAttribute("alt", product.altTxt);

      let title = document.createElement("h3");
      title.innerHTML = product.name;
      title.classList.add("productName");
  
      let paragraph = document.createElement("p");
      paragraph.innerHTML = product.description;
      paragraph.classList.add("productDescription");

      article.appendChild(image);
      article.appendChild(title);
      article.appendChild(paragraph);
      link.appendChild(article);
      document.getElementById("items").appendChild(link);

    }
  }