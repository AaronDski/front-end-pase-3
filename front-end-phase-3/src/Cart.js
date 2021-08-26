// import { useEffect, useState } from "react";
// import {Link as Button} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartCard from './CartCard'

function Cart({cartArr, onDelete }) {
//   

  return (<>
  <CartCard cartArr={cartArr} onDelete={onDelete} />
  
  </>);
}

export default Cart;
