import { useState } from "react";

const Atm = ({accountBalance, deposit, withdraw}) => {
    //create a function that alerts you deposit
    const [amount, setAmount] = useState('');
    function handleDeposit(){
        alert(" You deposited");
    }
  return (
    <div className="">
        <h1>ATM</h1>
        <h3>Your Account Balance is: <strong> {accountBalance} </ strong> </h3>
        
        <input type="number"  placeholder="amount" className="form-control mb-3" value={amount} onChange={function(e){setAmount(e.target.value)}}/>
        
        <button className="btn btn-danger" onClick= { function(){
           withdraw(Number(amount))
        } }  >Withdraw</button>
        <button className="btn btn-primary" onClick={function(){deposit(Number(amount))}}>Deposit</button>
    </div>
  )
}

export default Atm