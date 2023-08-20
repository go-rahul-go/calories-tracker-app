import { useState } from "react";

function List(props)
{
    const [foods,updatefoods] = useState([]);
    updatefoods([...foods,props.name])
    console.log(updatefoods);
    return(<p>{props.name}</p>)
}
export default List;