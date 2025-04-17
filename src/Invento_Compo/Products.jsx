import {useContext} from "react";
import Swal from 'sweetalert2' 
import { ProductContext } from "../context/ProductContext";
import Table from "./Table";
const Products = () => {
    let sn = 1;
    const{products, deleteProduct} = useContext(ProductContext);
    if(products && products.length > 0){
      return (
        <table className="table table-light">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map(function(pro){
                   return <Table pro={pro} sn={sn++} 
                   deleteProduct={deleteProduct}/>
                  })
                }
              </tbody>
        </table>
      )
    }else{
      return (
        <h2 className="alert alert-warning"> No Product in Inventory</h2>
      )
    }
  }
  
  export default Products