fetch('http://localhost:3000/api/products')
.then(res=>res.json())
.then(data=> displayProduct(data) );


function displayProduct(data){
    for (let product of data){
        console.log(product)
        let link = document.createElement('a');
        link.setAttribute('href','./product.html?id='+product._id );

        let article = document.createElement('article');

        let image = document.createElement('img');
        image.setAttribute('src',product.imageUrl);
        image.setAttribute('alt',product.altTxt)

        //reste h3 + p a faire

        article.appendChild(image);


        link.appendChild(article);
        document.getElementById('items').append(link);
    }
}