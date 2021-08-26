// import { useEffect, useState } from "react";
import { Link as Button } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function PartCard({partArr, addToCart}) {
//   const [partArr, setPartArr] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:9292/parts_list")
//       .then((r) => r.json())
//       .then(setPartArr);
//   }, []);

  console.log(partArr);
  const renderPart = partArr.map((part) => {
    return (
      <div key={part.id}>
        <p>{part.item_name}</p>
        <p>{part.year}</p>
        <p>{part.make}</p>
        <p>${part.price}</p>
        <Button onClick={() => addToCart(part)} class="btn btn-dark card-item">
          Add to Cart
        </Button>
        <br></br>
      </div>
    );
  });

  return <>{renderPart}</>;
}

export default PartCard;
