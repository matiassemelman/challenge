import { useNavigate } from "react-router-dom";
import {useEffect} from "react"



const DetailView = () => {
  const navigate = useNavigate();
  let token = sessionStorage.getItem('token');

  useEffect(() => {
    !token && navigate("/", { replace: true });
    }, []);
    
  return (
    <>
      
      <h2>DetailView </h2>
    
    </>
  );
};

export default DetailView;
