import React from "react";

function Stock({name, price, ticker, id, onBuy}) {

  function handleClick(event){
    onBuy(event.target.id)
  }

  return (
    <div>
      <div className="card" id={id}>
        <div className="card-body" id={id} onClick={handleClick}>
          <h5 className="card-title" id={id}>{name}</h5>
          <p className="card-text" id={id}>{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
