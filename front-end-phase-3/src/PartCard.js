// import { useEffect, useState } from "react";
import { Link as Button } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function PartCard({ partArr, addToCart }) {
  console.log(partArr);
  const renderPart = partArr.map((part) => {
    return (
      <div
        key={part.id}
        style={{
          width: "350px",
          margin: "auto",
          marginTop: "30px",
          marginBottom: "100px",
          color: "#B2BDBC",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
        }}
      >
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
