
import React, { useState,useEffect} from "react";

import "../style.css";

const Form = () => {
    const [food, updateFood] = useState("");
    const [calories, updateCalories] = useState(0);
    const [items, updateItems] = useState(JSON.parse(localStorage.getItem("items")) || [])

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(food)
        const newFoods = { food, calories }
        updateItems([...items, newFoods]);
        updateFood("");
        updateCalories(0);
       
    }
    function deleteItem(index){
        updateItems(items.filter((item)=>items[index]!==item))

    }
    function sortAll(){
        const newArr=items.sort((item1,item2)=>{
            return item2.calories - item1.calories
        })
        console.log(newArr)
        updateItems(newArr)
        localStorage.setItem("items",JSON.stringify(newArr))
    }
    const deleteAll = ()=>{
        updateItems([])
    }

    useEffect(()=>{
        localStorage.setItem("items",JSON.stringify(items))
    },[items])

    return (
        <div id="calorie-app">
            <form onSubmit={handleSubmit} className="form">
                <div className="input-field">
                <input type="text" value={food} onChange={(e) => updateFood(e.target.value)} placeholder="enter food" required/>
               <input type="number" min="0" value={calories} onChange={(e)=>updateCalories(e.target.value)}/>
                </div>
               
                <button type="submit" id="submit-btn"><i className="fa fa-plus"></i></button>
                
            </form>
            <div className="list">
                <div id="buttons-container">
                <button onClick={sortAll}>Sort</button>
                <button onClick={deleteAll} id="delete-all">Delete All</button>
                </div>
            <ul>{
                items.map((item,index) => {
                    return (<li>
                        <div>
                        <i className="fa fa-fire"></i> <span id="text-area">{item.food}</span> <span id="calorie-area">{item.calories}</span>
                        </div>
                    <i className="fa fa-trash" onClick={()=>deleteItem(index)}></i></li>)
                })}
            </ul>
            </div>
        </div>
    )
}

export default Form;