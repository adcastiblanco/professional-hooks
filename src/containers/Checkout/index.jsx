import React, {useContext} from 'react';
import { Helmet } from 'react-helmet';
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
    <>
    <Helmet>
    <title>PlatziConf Merch - Cart</title>
    <meta name="keywords" content="cart, platzi"></meta>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@TU_USER"/>
                <meta name="twitter:creator" content="@TU_USER"/>
                <meta name="twitter:title" content="Platzi Conf Store"/>
                <meta name="twitter:description" content="Platzi Conf Store"/>
                <meta
                name="twitter:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:title" content="Platzi Conf Store"/>
                <meta property="og:description" content="Platzi Conf Store"/>
                <meta
                property="og:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:url" content="platzistore.xyz" />
                <meta property="og:site_name" content="Platzi Conf Store" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
    </Helmet>
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
    </>
  );
};

export default Checkout;
