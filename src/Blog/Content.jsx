import { useEffect } from 'react'
import { useState } from 'react'

import Contact from './Contact'

let Content = ({total})=>{
    //to demonstrate that whenever locatotal which is a state variable changes, there will be a re-rendering of this component

    let [localtotal,setLocalTotal] = useState(total) //change the value of total in Layout to see the effect
    let [counter, setCounter] = useState(0) //change the value of counter when we click on a button to see the effect

    let [allposts,setAllPosts] = useState([])
    let [errormsg, setErrormsg] = useState(null)
    let [loader, setLoader] = useState(false)

    useEffect(()=>{
     //  console.log("This will run after every render "+total + counter )
     setLoader(true)
     fetchPosts()
    },[counter])

    function fetchPosts(){
        //connect to api here
        fetch('https://dummyjson.com/posts')
        .then(response =>{
            return response.json()
        }) //response type?
        .then(rspdata => { 
            setAllPosts(rspdata.posts)
            console.log(rspdata.posts) //[{id:0,title:"",body:""},{}]
        })
        .catch(error=>{ 
            setErrormsg(error.message)
            console.log(error)
        })
        .finally(()=>{
            setLoader(false)
        })
    }

    let external = allposts.map(function(value,key){
        return <div key={key}>
         <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">{value.title}</h2>
            <h3 className="post-subtitle">
              {value.body}
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on July 8, 2023
          </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
        </div>
    })
    return <>
    <div className="container px-4 px-lg-5">
    <div className="row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-12">
        <div className="text-center">
            <button className="btn">Okay</button>
          <button className="btn btn-outline-danger" onClick={()=>{ 
            setCounter(++counter)}}>{counter} Guests online</button>
        </div> 
        {/* The Loader Div will be displayed when loader is truthy true */}
        {loader && <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>} 
        {errormsg && <div className='alert alert-danger'>{errormsg}</div>} 
        
        {external}  

        <hr className="my-4" />
        {/* Post preview*/}
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">Failure is not an option</h2>
            <h3 className="post-subtitle">
              Many say exploration is part of our destiny, but it’s actually our
              duty to future generations.
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on July 8, 2023
          </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
        {/* Pager*/}
        <div className="d-flex justify-content-end mb-4">
          <a className="btn btn-danger text-uppercase" href="#!">
            Older Posts →
          </a>
        </div>
      </div>
    </div>
    <Contact/>
  </div>
  </>
}

export default Content