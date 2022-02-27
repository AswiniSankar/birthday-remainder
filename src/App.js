import React, {useState} from "react";
import data from "./data";
import List  from "./List";

function App(){
    const [people,setPeople] = useState(data);
    return(
      <div className="container">
           <h1>Birthday Today &#10084; &#127881;</h1>
           <List people={people}/>
           <button onClick={() => {setPeople([])}} type="button">Clear All</button>
      </div>
       
    )
   
}

export default App;