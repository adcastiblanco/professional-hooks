import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';
import '../../styles/components/Success.css';

const Success = () => {
  const {state: {buyer}} = useContext(AppContext)
  console.log(buyer)
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{buyer[0].name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">{buyer[0].address}</div>
      </div>
    </div>
  );
};

export default Success;