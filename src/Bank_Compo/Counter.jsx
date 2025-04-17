
const Counter = ({accountBalance, deposit, withdraw}) => {
    return (
      <div>
          <h1>Counter</h1>
          <h3>Your Account Balance is: <strong> {accountBalance} </strong>  </h3>
          <button className="btn btn-danger" onClick={function(){
                withdraw();
          }}>Withdraw</button>
          <button className="btn btn-primary" 
            onClick={function(){
                deposit()
            }}
          >Deposit</button>
      </div>
    )
  }
  
  export default Counter