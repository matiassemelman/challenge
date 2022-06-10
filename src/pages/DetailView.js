import { useNavigate } from "react-router-dom";
import {useEffect} from "react"



const DetailView = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token');

  useEffect(() => {
    !token && navigate("/", { replace: true });
    }, [token]);
    
  return (
    <>
      
      <h2>DetailView </h2>
    
    </>
  );
};

export default DetailView;
