import ListItem from './listItemComponent';
import Next from './nextComponent';
import { getAll } from "../service/APIrequests";
import React, { useState, useEffect } from "react";

export default function List() {
  const [data, setData] = useState([]);
  async function ret() {
    let d = await getAll();
    setData([...data, ...d]);
  }
  
  useEffect(() => {
    ret();
  }, []); 
  
  const one = data.slice(0,1);
  const rest = data.slice(1);

  return (
    <div id="list">
      <Next one={one}/>
      <ListItem rest={rest}/>
    </div>
  );
}
