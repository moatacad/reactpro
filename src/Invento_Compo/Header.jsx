
import Title from "./Title";
import Count from "./Count";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Header = ({mode, handleMode}) => {
  
  return (
    <div className="row header">
        <div className="col text-center">
        
            <div className="d-flex justify-content-between align-items-center pb-5">
                <Title textValue="Product Inventory"/>
                <div>
                {
                  mode=="light"? <button className="btn btn-dark btn-sm" onClick={handleMode}><MdDarkMode /></button>:<button className="btn btn-light btn-sm" onClick={handleMode}><CiLight /></button>
                }
                
                
                </div>
            </div>

            <Count />
        </div>
    </div>

  )
}

export default Header