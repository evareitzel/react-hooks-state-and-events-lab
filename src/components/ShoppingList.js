import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterCategory, setFilterCategory] = useState("All")

  function handleChange(e){
    setFilterCategory(e.target.value)
  }

  const filteredItems = items.filter((item) => {
    if(filterCategory === "All"){
      return item
    }
    return item.category === filterCategory})

// console.log(filteredItems)
  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleChange}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => {
            return <Item key={item.id} name={item.name} category={item.category} />
          }
)}
      </ul>
    </div>
  );
}

export default ShoppingList;
