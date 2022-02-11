import { useNavigate } from "react-router-dom";
import './RandomSpace.css';
import data from "../../sfpopos-data.json";

function RandomSpace() {
  const navigate = useNavigate();
  return (
    <button 
      className="RandomSpace"
      onClick={(evt) => {
        const id = Math.floor(Math.random() * data.length);
        navigate(`/details/${id}`);
      }}
    >
      random space
    </button>
  )
}

export default RandomSpace;
