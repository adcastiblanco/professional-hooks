import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import '../../styles/components/Checkout.css';

const Checkout = () => {
  const {state: {cart}, removeFromCart} = useContext(AppContext)

  const handleRemoveItem = product => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {cart.length > 0 ? cart.map(product => (
            <div key={product.id} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{product.title}</h4>
                <span>${product.price}</span>
              </div>
              <button type="button"  onClick={handleRemoveItem(product)}><i className='fas fa-trash-alt'/></button>
            </div>
          ))
          : <h3>Sin pedidos...</h3>
        }
      </div>
      {cart.length > 0 &&
          <div className="Checkout-sidebar">
          <h3>Precio Total: ${handleSumTotal()}</h3>
          <Link to='/checkout/information'>
              <button type='button'>
                  Continuar pedido
              </button>
          </Link>
        </div>
      }
    </div>
  );
};

export default Checkout;
