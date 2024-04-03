import React from "react";
import Stock from "./Stock";

function StockContainer({stocksToRender, onBuy}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToRender.map((stock) => <Stock key={stock.id} onBuy={onBuy} name={stock.name} price={stock.price} ticker={stock.ticker} id={stock.id}/>)}
    </div>
  );
}

export default StockContainer;
