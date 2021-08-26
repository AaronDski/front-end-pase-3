import {Link as Button} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartCard({cartArr, onDelete }) {


  console.log(cartArr);
      const renderCart = cartArr.map(cart =>{
        return(
            <div key={cart.id}>
                <p>{cart.item_name}</p>
                <p>{cart.year}</p>
                <p>{cart.make}</p>
                <p>${cart.price}</p>
                <Button onClick={() =>onDelete(cart.id)} class='btn btn-dark card-item'>Remove from cart</Button>
                <br></br>

            </div>
        )

      })

  return (<>{renderCart}</>);
}

export default CartCard;