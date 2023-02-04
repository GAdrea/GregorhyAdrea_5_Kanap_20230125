fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => displayProduct(data));

function displayProduct(data) {
  for (let product of data) {
    console.log(product);
    let link = document.createElement("a");
    link.setAttribute("href", "./product.html?id=" + product._id);

    let article = document.createElement("article");

    let image = document.createElement("img");
    image.setAttribute("src", product.imageUrl);
    image.setAttribute("alt", product.altTxt);

    let title = document.createElement("h3");
    title.innerHTML = product.name;
    title.classList.add("productName");

    let paragraph = document.createElement("p");
    paragraph.innerHTML = product.description;
    paragraph.classList.add("productDescription");
    //reste h3 + p a faire

    article.appendChild(image);
    article.appendChild(title);
    article.appendChild(paragraph);
    link.appendChild(article);
    document.getElementById("items").appendChild(link);
  }
}
