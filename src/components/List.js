import { useNavigate } from "react-router";

const List = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  if (token === null) {
    navigate('/login', {replace: true});
  }  
  
  return (
    <>List</>
  )
}

export default List