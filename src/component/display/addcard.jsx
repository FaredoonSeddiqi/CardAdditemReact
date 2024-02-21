import React from 'react'

function Addcard({ cartData,deleteProduct, decrementQuantity,incrementQuantity}) {
  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="cardContainer1 cardtotal">
      <header className="cardHeader">DetailsCard</header>
      <section className="cardBody">
        <table>
          <tr>
            <th>Account</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cartData &&
            cartData?.length > 0 &&
            cartData?.map((item, i) => {
              const { name, image, price, quantity } = item;
              return (
                <tr key={i}>
                  <td>
                    <img src={image} alt="img" className="image1" />
                  </td>
                  <td>{name}</td>
                  <td>${price}</td>
                  <td><button onClick={() => incrementQuantity(item.id)}>+</button>{quantity}<button onClick={() => decrementQuantity(item.id)}>-</button></td>
                  <td>${item.quantity * item.price}</td>
                  <td><button onClick={() => deleteProduct(item.id)}>delete</button></td>
                </tr>
              );
            })}
        </table>
        <div>Total: ${calculateTotal()}</div> 
      </section>
    </div>
  );
}

export default Addcard