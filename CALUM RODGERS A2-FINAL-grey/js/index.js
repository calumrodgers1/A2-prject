const products = [
    {
      name: `KAWS`,
      code: `A1`,
      price: `$10`,
      priceSale: 'N/A',
      quantity: 11,
      discount: `Yes`,
      rating: '4/5',
      category: `Shoe`,
      img: `img/z1.jpg`
    }, 

    {
        name: `HOODIE BACK`,
        code: `A2`,
        price: `$20`,
        priceSale: 'N/A',
        quantity: 24,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q1.jpg`
      }, 

      {
        name: `WHITE SHOE`,
        code: `A3`,
        price: `$30`,
        priceSale: 'N/A',
        quantity: 23,
        discount: `Yes`,
        rating: '4/5',
        category: `Shoe`,
        img: `img/z2.jpg`
      }, 

      {
        name: `ROSE`,
        code: `A4`,
        price: `$40`,
        priceSale: 'N/A',
        quantity: 6,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q2.jpg`
      }, 

      {
        name: `LOW TOP`,
        code: `A5`,
        price: `$50`,
        priceSale: 'N/A',
        quantity: 33,
        discount: `Yes`,
        rating: '4/5',
        category: `Shoe`,
        img: `img/z3.jpg`
      }, 

      {
        name: `BLACK WHITE`,
        code: `A6`,
        price: `$60`,
        priceSale: 'N/A',
        quantity: 15,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q3.jpg`
      }, 

      {
        name: `AIR FORCE`,
        code: `A7`,
        price: `$70`,
        priceSale: 'N/A',
        quantity: 1,
        discount: `Yes`,
        rating: '4/5',
        category: `Shoe`,
        img: `img/z4.jpg`
      }, 

      {
        name: `BLACK RED`,
        code: `A8`,
        price: `$80`,
        priceSale: 'N/A',
        quantity: 9,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q4.jpg`
      }, 

      {
        name: `YELLOW`,
        code: `A9`,
        price: `$90`,
        priceSale: 'N/A',
        quantity: 21,
        discount: `Yes`,
        rating: '4/5',
        category: `Shoe`,
        img: `img/z5.jpg`
      }, 

      {
        name: `BLACK YELLOW`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q5.jpg`
      }, 

      {
        name: `RED`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shoe`,
        img: `img/z6.jpg`
      }, 

      {
        name: `MISMATCH`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q6.jpg`
      }, 

      {
        name: `WHITE OUT`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shoe`,
        img: `img/z7.jpg`
      }, 

      {
        name: `BLACK RED`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q7.jpg`
      }, 

      {
        name: `COCA`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shoe`,
        img: `img/z8.jpg`
      }, 

      {
        name: `BLACK YELLOW`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q8.jpg`
      }, 

      {
        name: `GREY WHITE`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shoe`,
        img: `img/z9.jpg`
      }, 

      {
        name: `JUMPER`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q9.jpg`
      }, 

      {
        name: `BALENCI`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shoe`,
        img: `img/z10.jpg`
      }, 

      {
        name: `JACKET`,
        code: `A10`,
        price: `$100`,
        priceSale: 'N/A',
        quantity: 44,
        discount: `Yes`,
        rating: '4/5',
        category: `Shirt`,
        img: `img/q10.jpg`
      }, 
     
    
  ];
  

  function getProductsAsHtmlString(products) {
  
    return `<article class="course ${products.category}">
      <h3>${products.name}</h3>
      <img src="${products.img}" alt="Logo for ${products.name}" class="product-img">
      <ul>
        <li>Products Code: <strong>${products.code}</strong></li>
        <li>Price: <strong>${products.price}</strong></li>
        <li>Price Sale: <strong>${products.priceSale}</strong></li>
        <li>Description: <strong>${products.description}</strong></li>
        <li>Quantity: <strong>${products.quantity}</strong></li>
        <li>Discount: <strong>${products.discount}</strong></li>
        <li>Rating: <strong>${products.rating}</strong></li>
        <li>Category: <strong>${products.category}</strong></li>

      </ul>  
    </article>`;
  }
  
  
   function switchLayout() {
     document.getElementById('products').classList.toggle('column-view');
   }



function filterByPrice(prod) {
  return prod.price < 1500;
}



function checkInput(event) {
  const userIsLookingFor = event.target.value.toLowerCase();
 
  const onlyMatchingNames = products.filter(prod => prod.name.toLowerCase().includes(userIsLookingFor));
  renderProducts(onlyMatchingNames);
}
  
  function renderProducts(arr) {
    
    const arrOfHtml = arr.map(getProductsAsHtmlString)
  
    
    const strOfHtml = arrOfHtml.join('\n')
  
    
    document.getElementById('products').innerHTML = strOfHtml;
  }
  
  
  
  
  

  console.table(products);


const affordableProducts = products.filter(filterByPrice);
renderProducts(affordableProducts);



function checkCategory(event) {
  const userIsLookingFor = event.target.value;

  const onlyMatchingCategories = products.filter(prod => prod.category == userIsLookingFor);
  renderProducts(onlyMatchingCategories);
}


  
     renderProducts(products.slice(0, 20));
  
  
document.getElementById('layout').addEventListener('click', event => switchLayout() )


document.getElementById('productName').addEventListener('input', event => checkInput(event) )


document.getElementById('productCategory').addEventListener('change', event => checkCategory(event) )