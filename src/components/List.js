import { useNavigate } from "react-router";
import {useEffect} from 'react'

const List = () => {
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/', {replace: true});
   }
  })
  
  return (
    <>List</>
  )
}

export default List