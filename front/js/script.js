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
    title.text = "sample text";

    let paragraph = document.createElement("p");
    paragraph.innertext = "sample text";
    //reste h3 + p a faire


    article.appendChild(paragraph);
    article.appendChild(title);
    article.appendChild(image);
    link.appendChild(article);
    document.getElementById("items").append(link);
  }
}
