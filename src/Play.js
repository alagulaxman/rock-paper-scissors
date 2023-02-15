/* eslint-disable no-unused-vars */
import React , { useEffect, useState } from 'react'


function Play({gameArrayitems}) {
    const [playerChoice,setPlayerChoice]=useState('')
    // eslint-disable-next-line no-unused-vars
    const [CompChoice,setCompChoice]=useState('')
    const [winner,setWinner]=useState('')
    const [userWins,setUserWins]=useState(0)
    
    const [compWins,setCompWins]=useState(0)

    useEffect(()=>
        decideWinner(playerChoice,CompChoice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[CompChoice,playerChoice])

    const compSelection=()=>{
        const randomIndex=Math.floor(Math.random()*gameArrayitems.length)
        let item=gameArrayitems[randomIndex]
        setCompChoice(item)

    }

    
    const handlleGame=(item)=>{
        setPlayerChoice(item)
        compSelection()
    }

    const decideWinner=(player,comp)=>{
        if(player && comp){
        if(player===comp){
            setWinner("Draw")}
        else{
        switch(player){
            case "Rock" :
                if(comp==="Scissors") {
                    setWinner("User Wins")
                    setUserWins(userWins+1)
                }else{
                    setWinner("Computer Wins")
                    setCompWins(compWins+1)
                }
                break;
            case "Scissors" :
                if(comp==="Paper"){
                    setWinner("User Wins")
                    setUserWins(userWins+1)
                }else{
                    setWinner("Computer Wins")
                    setCompWins(compWins+1)
                }
                break;
            case "Paper":
                if(comp==="Rock"){
                    setWinner("User Wins")
                    setUserWins(userWins+1)
                }else{
                    setWinner("Computer Wins")
                    setCompWins(compWins+1)
                }
                break;
            default :
                break;
        }}
    }
        else{
            setWinner('')
        }
        
    }

    

  return (
    <div>
        <ul>
        {gameArrayitems.map((item)=>{
            return(
                <li key={item}>
                <button className="btn-game-item" onClick={()=>handlleGame(item)}>{item}</button>
                </li>
            )
        })}
        </ul>
        <br/>
        <br/>
        <h4>User's Choice: {playerChoice}</h4>
        <h4>Computer's Choice: {CompChoice}</h4>
        <h4>{winner}</h4>
        <br/>
        <br />
        <h4>User Wins:{userWins} &nbsp;&nbsp;&nbsp; Computer Wins:{compWins}</h4>
    </div>
  )
}

export default Play