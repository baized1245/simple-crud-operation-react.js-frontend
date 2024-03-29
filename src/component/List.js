import React from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { baseURL } from '../utils/constant';
import axios from 'axios';


const List = ({id, task, setUpdateUi, updateMode}) => {

  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`)
    .then((res) => {
      console.log(res);
      setUpdateUi((prevState) => !prevState)
    })
  };

  // const updateTask = () => {
  //   axios.put(`${baseURL}/update/${id}`)
  //   .then((res) => {
  //     console.log(res);
  //     setUpdateUi((prevState) => !prevState)
  //   })
  // }


  return (
      <li>  
          {task}
          <div className='icon_holder'>
            <BiEditAlt className='icon' onClick={()=> updateMode(id, task)} />
            <BsTrash className='icon' onClick={removeTask} />
          </div>
      </li>
  )
}

export default List