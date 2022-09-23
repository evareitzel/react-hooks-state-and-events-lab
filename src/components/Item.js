import React, {useState} from "react";
// Add to Cart
    // a̶d̶d̶ s̶t̶a̶t̶e̶
    // btn onClick - add item tocart
    // change className on <li> el
      // ""/"in-cart"
      // if no item in cart "Add to Cart"
      // else "Remove from Cart"
function Item({ name, category }) {

  const [addItem, setAddItem] = useState(false)
  function handleClickAddItem(){
    setAddItem((addItem) => !addItem)
  }

  const itemClass = addItem ? "in-cart" : ""

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className={itemClass}>{category}</span>
      <button onClick={handleClickAddItem}className="add">{addItem?"Add to Cart": "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
