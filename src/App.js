import './App.css';
import { useState } from 'react';
import { data } from './data';
import Header from './Header';


function App() {

  const [purchases, setPurchases] = useState(data);
  const removePurchases = (id) => {
    let newPurchases = purchases.filter((purchase) => purchase.id !== id);
  setPurchases(newPurchases)
}


 return (
  <div>
  <div className="colorHeader">
    <Header basket={purchases.length}/>
  </div>
  <div className='container'>
    <h1 className='totalItems'>{ purchases.length === 0 ? `Your basket is empty` : `Total Items ${purchases.length} :`}</h1>
  </div>

  {purchases.map((element => {
    const {id,item,image,price} = element;

    return(<div className='bigContainer' key={id}>
      <div className='containerPicture'>
      <img src={image} width="80px" height="110px" alt="purch"/>
      <div className='containerName'>
      <h2>{id} - {item}</h2>
      </div>
      </div>
      <div className='containerPriceClose'>
      <div className='containerPrice'>
        <h2>{price} $</h2>
      </div>
      <div className='containerClose'>
        <button className='close' onClick={() => removePurchases(id)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABN0lEQVR4nO3ZTWrDMBCG4fcoXfQkLZTuK83CSc6eRc8QAk0hJWBDMTFxJM1oLPRBdsYzj34S2YGenp6e1vIKhIr1w9hDVl6AI/ALHLCPABfgOwczIa7jxxojI2Kqn4yJY/PXGWaHfnYLtW89FRkVi5kRrZqWGNGuZYExGzDNQuZLWBQK1tiHxQtXQ5RsoDqiRCNuEDkNuUOkNOYW8UyD7hFrGt0M4tFhr9bhMyv3Rn8zM7EWsylEMxBpYWkNLWx2aeHrNy40uv93jXtMXIFwj4lPINxiYgLCHSZkINxgQgFEdUxYKJzzm2COCQoIc0xQRJhhAvBjdMQQLczXAuJ2ptKKlMbcW06XnFf7BZ40h5SbfQBnw5mYZz4zJ+A99WYTxhoxx2QhpnxW/jN0AN4q1u/p6emhfP4AxlR3VfJGRpkAAAAASUVORK5CYII=" width="15px" alt="close"/>
</button>
</div>
      </div>
    </div>)
    
  }))}
        <div className='removeAll'>
          <div>
    <button className='removeButton' onClick={() => setPurchases([])}>Remove all items</button>
    </div>
    <div>
    <button className='purchaseButton'>Submit</button>
    </div>
    <div className='sum'>
      <div><p>Subtotal:</p></div>
      <div>
    <p>{} <span>$</span></p>
    </div>
    </div>

  </div>

  </div>
 )
  
}

export default App;
