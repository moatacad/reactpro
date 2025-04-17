import {useState} from 'react'
import Swal from 'sweetalert2' 

let Contact = ()=>{
    let [title,setTitle] = useState("")
    let [content,setContent] = useState("")
    let [feedback, setFeedback] = useState("")
    let [errormsg,setErrormsg] = useState(null)

    let handleSubmit = (event)=>{
        event.preventDefault()
        //validate to be sure that the form is not empty.
        if(title =='' || content==''){            
             Swal.fire({
                title: 'Error!',
                text: 'All Fields are required',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
        }else{
            //connect to backend API here
            const data={title:title,body:content,userId:1}
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };

            fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response =>{
                return response.json()
            }) //response type?
            .then(rspdata => { 
                console.log(rspdata) 
                setFeedback(`Your Message ${rspdata.title} has been received` )
                setErrormsg(null)
                //clear form
                setTitle('')
                setContent('')
            })
            .catch(error=>{ 
                console.log(error)
                setErrormsg("An error occured, please try again.")
                setFeedback(null)
            })
        }        
    }
    return <>
        <div className="row">
            <div className="col-md-12">
                
            {feedback && 
                <div className='alert alert-success noround'>
                    {feedback}
                </div>}

                {errormsg && 
                <div className='alert alert-danger noround'>
                    {errormsg}
                </div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Title</label>
                        <input type="text" name='title' value={title} className="form-control noround border-dark" onChange={(event)=>{ setTitle(event.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>Content</label>
                        <input type="text" name='content' value={content} className="form-control noround border-dark" onChange={(event)=>{setContent(event.target.value)}}/>
                    </div>
                    <div className="mb-3"><button className="btn btn-outline-danger noround col-12"> Submit</button> </div>
                </form>
            </div>
        </div>
    </>
}

export default Contact