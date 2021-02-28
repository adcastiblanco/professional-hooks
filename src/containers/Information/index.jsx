import React, {useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../styles/components/Information.css';
import {useForm} from 'react-hook-form'
import AppContext from '../../context/AppContext';

const Information = () => {
  const history = useHistory()
  const {state: {cart, buyer}, addToBuyer} = useContext(AppContext)
  const {register, handleSubmit, errors} = useForm()

  const handleOnSubmit = (data) => {
    addToBuyer(data)
    history.push('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form>
            <input ref={register({required: true})}type="text" placeholder="Nombre completo" name="name" />
            <input ref={register({required: true})}type="text" placeholder="Correo Electronico" name="email" />
            <input ref={register({required: true})}type="text" placeholder="Direccion" name="addres" />
            <input ref={register({required: true})}type="text" placeholder="apto" name="apto" />
            <input ref={register({required: true})}type="text" placeholder="Ciudad" name="city" />
            <input ref={register({required: true})}type="text" placeholder="Pais" name="country" />
            <input ref={register({required: true})}type="text" placeholder="Estado" name="state" />
            <input ref={register({required: true})}type="text" placeholder="Codigo postal" name="cp" />
            <input ref={register({required: true})}type="text" placeholder="Telefono" name="phone" />
            {Object.keys(errors).length > 0 && <p>Faltan campos</p>}
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>Regresar</Link>
            </div>
          <div className="Information-next">
              <button type="submit" onClick={handleSubmit(handleOnSubmit)}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => 
            <div className="Information-item">
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Information;