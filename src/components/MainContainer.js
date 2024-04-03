import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
const [stocks, setStocks] = useState([]);
const [myPortfolio, setPortfolio] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/stocks")
  .then(r => r.json())
  .then(data => setStocks(data))
  .catch(error => console.log(error));
}, [])

  function handleBuy(newId){
    let newItem = {}
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => {
      newItem = data.find((item) =>  item.id === parseInt(newId))
      if(myPortfolio.find(item => item.id === parseInt(newId)) === undefined){
        setPortfolio([...myPortfolio, newItem])
      }
    })
    .catch(error => console.log(error));
  }

  function handleSell(stockId){
    setPortfolio(myPortfolio.filter((stock) => stock.id !== parseInt(stockId)))
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocksToRender={stocks} onBuy={handleBuy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocksToRender={myPortfolio} onSell={handleSell}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
