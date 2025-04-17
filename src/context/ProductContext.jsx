
import { createContext, useState } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({children}) => {
    
    const [products, setProducts] = useState([]);
    function addProduct(proTitle, proQty){
        setProducts([...products, {
            id:Date.now(),
            title: proTitle,
            qty: proQty
        }])
    }
    function deleteProduct(id){
        let filteredproduct=products.filter(function(pro){
            return pro.id != id;
        });
        setProducts(filteredproduct);
    }
    function allProducts(){
        return products;
    }

    return <ProductContext.Provider value={{addProduct, deleteProduct, allProducts, products}}>
                {children}
            </ProductContext.Provider>

}