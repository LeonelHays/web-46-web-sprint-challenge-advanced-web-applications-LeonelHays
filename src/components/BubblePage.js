import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";


const BubblePage = (props) => {

  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
      setColors(fetchColorService(colors))
  }, [])
  console.log(colors.id)

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colors.id}`, colors)
    .then(res => {
      setColors([...editColor, res.data])
      props.history.push('/colors')
    })
    .catch(err => {
      console.error(err);
    })
  };
  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${colors.id}`)
    .then(res => {
      setColors([...colorToDelete ,res.data]);
      props.history.push('/colors');
    }).catch(err => {
      console.error(err);
    })
  };
  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
