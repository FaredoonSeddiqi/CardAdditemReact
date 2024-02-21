import './App.css';
import Card from './component/card/card';
import React, { useReducer } from 'react';
import Addcard from './component/display/addcard';


const ProductData = [

  {
    id: 1,
    name: "pro1",
    price: 100,
    image: '/image/11.webp',
  },
  {
    id: 2,
    name: "pro2",
    price: 180,
    image: "/image/2.jpeg",
  },
  {
    id: 3,
    name: "pro3",
    price: 200,
    image: "/image/3.webp",
  },
  {
    id: 4,
    name: "pro4",
    price: 400,
    image: "/image/4.webp",
  },
  {
    id: 5,
    name: "pro5",
    price: 500,
    image: "/image/5.webp",
  },
  {
    id: 6,
    name: "pro6",
    price: 190,
    image: "/image/6.webp",
  },
]

const initialState = {
  cartData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const product = action.payload;
      const existingProduct = state.cartData.find((pro) => pro.id === product.id);

      if (existingProduct) {
        const updatedCartData = state.cartData.map((pro) =>
          pro.id === product.id ? { ...pro, quantity: pro.quantity + 1 } : pro
        );
        return { ...state, cartData: updatedCartData };
      } else {
        const newProduct = { ...product, quantity: 1 };
        return { ...state, cartData: [...state.cartData, newProduct] };
      }
    case 'deleteProduct':
      return {
        ...state,
        cartData: state.cartData.filter((product) => product.id !== action.payload.id),
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartData: state.cartData.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartData: state.cartData
          .map((product) => {
            if (product.id === action.payload.id) {
              if (product.quantity > 1) {
                return { ...product, quantity: product.quantity - 1 };
              }

              return null;
            }
            return product;
          })
          .filter(Boolean),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTocart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const deleteProduct = (productId) => {
    dispatch({ type: "deleteProduct", payload: { id: productId } });
  }

  const incrementQuantity = (productId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: productId } });
  };

  const decrementQuantity = (productId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: productId } });
  };

  return (
    <div className="App">
      <Addcard cartData={state.cartData} deleteProduct={deleteProduct} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} />
      <Card handleAddTocart={handleAddTocart} input={ProductData} />
    </div>
  );
}

export default App;



