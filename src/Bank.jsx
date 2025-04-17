import Atm from "./Bank_Compo/Atm"
import Counter from "./Bank_Compo/Counter"
import { useState } from "react"

const Bank = () => {

//   let accountBalance = 1000; dynamic value, dont use variable: state
//accountbalance should be stored as state
// useState
     const[accountBalance, setAccountBalance] =  useState(0);

     // a function that add to accountbalance
     function deposit(amount){
        if(amount == ""){
            alert("Please enter deposit amount");
        }else{
           //accountBalance + 100 never try this at home
            setAccountBalance(accountBalance + amount); 
        }
     }
     //a function that deducts from accountbalance
     function withdraw(amount){
        if(accountBalance > amount){
            setAccountBalance(accountBalance-amount);
        }else{
            alert("insufficient Fund")
        }
     }


  return (
    <div className="container">
        <h1>Whatever Bank</h1>
        <h3>Your account balance is : {accountBalance} </h3>
        {/* if account balance is below 1000 display an alert that says you are going broke else display bootstrap alert that says : you odogwu */}

        {
            accountBalance < 1000 ? <p className="alert alert-danger">You are going broke</p> : <p className="alert alert-success">You be OdoGwu</p>
        }


        <hr />
        <hr />
        <Atm accountBalance={accountBalance} deposit={deposit} withdraw={withdraw} />
        <hr />
        <Counter accountBalance={accountBalance} deposit={deposit} withdraw={withdraw}/>
    </div>
  )
}

export default Bank