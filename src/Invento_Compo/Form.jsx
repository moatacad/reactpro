
import { useContext, useState } from "react";
import Swal from 'sweetalert2' 
import { ProductContext } from "../context/ProductContext";
const Form = () => {
  const {addProduct, products} = useContext(ProductContext);

  const [title, setTitle] = useState('');
  const [qty, setQty] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    //validation
    if(title == "" | qty==""){
      Swal.fire({
        title: 'Error!',
        text: 'All Fields are required',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
      
    }else{
      // send title and qty to the function that will add them to array
      addProduct(title, qty);
      //send the title and qty to an api
      Swal.fire({
        title: 'Success!',
        text: 'Product added to inventory',
        icon: 'success',
        confirmButtonText: 'Okay'
      })
      //clear all the input
      setTitle("")
      setQty("")
      console.log(products);
    }

  }

    return (
      <div className="row text-center formy">
        <div className="col-md-6 offset-md-3">
          <h3>Add Product</h3>
        </div>
        <div className="col-md-8 offset-md-2">
          <form className="py-3 px-5 brr" onSubmit={handleSubmit}>
            <div className="row my-4">
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="product name"
                  value={title}
                  onChange={function(e){setTitle(e.target.value)}}
                />
              </div>
              <div className="col-md-3">
                <input type="number" className="form-control" placeholder=" Qty" value={qty}
                  onChange={(e)=>{
                      setQty(e.target.value);
                  }}/>
              </div>
              <div className="col-md-2 text-end">
                <input
                  type="submit"
                  defaultValue="Add Product"
                  className="btn btn-primary mine"
                  
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default Form