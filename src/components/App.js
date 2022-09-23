import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature


      // Dark Mode Toggle (App.js)
      // w̶ u̶s̶e̶S̶t̶a̶t̶e̶ h̶o̶o̶k̶
        // c̶r̶e̶a̶t̶e̶ a̶ s̶t̶a̶t̶e̶ v̶a̶r̶
        // use var to determine Light or Dark
        // (update className on div - "App dark" or "App light")
      // add evt handler to btn
        // update state onClick
  
  const [darkMode, setMode] = useState(false)

  function handleClick(){
    setMode((darkMode) => !darkMode)
  }

  const appClass = darkMode ? "App dark" : "App light"

    return (
      <div className={appClass}>
        <header>
          <h2>Shopster</h2>
        <button onClick={handleClick}>{darkMode?"Light" : "Dark"} Mode →</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
