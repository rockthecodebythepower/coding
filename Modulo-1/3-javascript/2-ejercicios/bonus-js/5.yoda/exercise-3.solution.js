// 1. Defino las funciones para pintar las orders que reciba de la API en el <ul>
const ordersList = document.querySelector('#orders');

const getOrderTemplate = (order, products) => `
<li>
  <p>ID: ${order.id}</p>
  <p>Fecha: ${order.date}</p>

  <ul>
    ${order.products
      .map((product) => {
        const productData = products.find((p) => {
          return p.id === product.productId;
        });

        return `
        <li>
          <p>ID: ${productData.id}</p>
          <p>Name: ${productData.name}</p>
          <p>Quantity: ${product.quantity}</p>
        </li>
      `;
      })
      .join('')}
  </ul>
</li>
`;

// 2. Pido las orders a la API de JSON SERVER para pintarlas en el DOM
fetch('http://localhost:3000/orders')
  .then((res) => res.json())
  .then((orders) => {
    console.log('Orders:', orders);

    // 3. Pido la lista de productos a la API de JSON SERVER para tenerlos en memoria
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((products) => {
        console.log('Products:', products);

        // 4. Pinto las ordenes y su template correspondiente
        // 5. Ordeno los orders por fecha antes del pintado! Propuesto para alumnado!
        orders.forEach((order) => {
          const template = getOrderTemplate(order, products);
          ordersList.innerHTML += template;
        });
      });
  });
