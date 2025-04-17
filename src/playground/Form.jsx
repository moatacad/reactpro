import { useState } from "react"

const Form = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [data, setData] = useState({
        username: "",
        password: ""
    })
    
    function handleLogin(){
        // console.log({username, password});
        //validate
        if(data.username == "" || data.password == ""){
            alert("all fields are required")
        }else{

            //process the form: connect with an api and send the data to the endpoint
            console.log(data);
            alert("login successfull");
        }
        
    }


  return (
    <div className="row">

        <div className="col-md-8 offset-md-2 py-5">
            <div className="row">
                <div className="col-md-5">
                    <input type="text"   placeholder="username" className="form-control py-3" value={data.username}  onChange={
                        function(e){
                            //console.log(e.target.value);
                            setData({...data,  username:e.target.value});
                        }
                    }/>
                    
                </div>
                <div className="col-md-5">
                        <input type="password" placeholder="password" className="form-control py-3" value={data.password} 
                            onChange={ 
                                function(e){
                                    setData({...data, password:e.target.value});
                                 }
                        }
                        />
                    </div>
                <div className="col-md-2">
                    <button className="btn btn-success" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Form