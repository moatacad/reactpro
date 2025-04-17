
import Dashboard from "./Dashboard";
import Login from "./Login";


const Content = (prop) => {
    let result = prop.firstMovie(); //picking up function as a prop
    // alert(result);

  return (
    <div>
        {/* if isLogin is true: show Dashboard component else Login */}

        {
            prop.isLogin==true ? <Dashboard/> : <Login/>
        }

        <h3>
            The name of the app we are building is {prop.xyz} and the author is  {prop.author}
        </h3>

        <ul className="list-group">
            {
                prop.titles.map(function(title, index){
                  return  <li className="list-group-item" key={index}>
                        {title}
                    </li>
                })

            }
        </ul>
        <p>The First Movie is <strong>{result}</strong> </p>
    </div>
  )
}

export default Content