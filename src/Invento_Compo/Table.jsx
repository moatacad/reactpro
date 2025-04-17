
import Swal from 'sweetalert2' 

const Table = ({pro, sn, deleteProduct}) => {
    
  return (
    <tr key={pro.id}>
                            <td>{sn}</td>
                            <td> {pro.title}</td>
                            <td>{pro.qty} </td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={function(){
                                deleteProduct(pro.id)
                                console.log(products)
                                Swal.fire({
                                        title: 'Success!',
                                        text: 'Product deleted from inventory',
                                        icon: 'success',
                                        confirmButtonText: 'Okay'
                                        })
                                }}>Delete</button>
                            </td>
    </tr>
  )
}

export default Table