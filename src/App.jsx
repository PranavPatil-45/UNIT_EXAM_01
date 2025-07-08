import { useState } from "react";

function App() {

  const [counter, setcounter ]=useState(0)

  return (

    

    <div>
      <div>
        <button data-testid="minusonebtn" onClick={()=> counter > 0 && setcounter(counter-1) } disabled={counter==0}>Decrease Number -1</button>
        <button data-testid="plusonebtn" onClick={()=> setcounter(counter+1)}>Increase Number +1</button>
      <div>
        <button data-testid="resetbtn" onClick={()=>setcounter(0)}>Reset</button>
      </div>
      </div>
      <span data-testid="counter">{counter}</span>
      <div>
        <span data-testid="odd-or-even">
         {counter % 2 == 0? "Even" : "Odd"}
        </span>
        <span data-testid="is-prime">
         
        </span>
      </div>
    </div>
  );

}

export default App;

