import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocksToRender, onSell}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksToRender.map(stock => <Stock key={stock.id} name={stock.name} price={stock.price} ticker={stock.ticker} id={stock.id} onBuy={onSell}/>)}
    </div>
  );
}

export default PortfolioContainer;
