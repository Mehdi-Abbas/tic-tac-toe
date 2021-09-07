import React, {useState} from "react"
import "./Tictac.css";

class Tictac extends React.Component{
    
    constructor(){
        super()
        this.state={
            turn:"X", //Turn starts from X
            value_1:"",
            value_2:"",
            value_3:"",
            value_4:"",
            value_5:"",
            value_6:"",
            value_7:"",
            value_8:"",
            value_9:"",
            gameEnd:false,
            winner:"",
            draw:false,
            color_1:"white",
            color_2:"white",
            color_3:"white",
            color_4:"white",
            color_5:"white",
            color_6:"white",
            color_7:"white",
            color_8:"white",
            color_9:"white",
            winningColor:"#adedaf"
            
            
        }
        this.handleClick=this.handleClick.bind(this)
    }

    async handleClick(event){
        
        const {name, prevValue}=event

        this.state[name]==="" && this.setState({
            turn:this.state.turn==="X"?"O":"X"
        })

        !this.state.gameEnd && this.state[name]==="" && await this.setState({
            [name]:this.state.turn
        })
        

        // TOP DOWN LOGIC
        if(this.state.value_1===prevValue && this.state.value_1===this.state.value_4 && this.state.value_4===this.state.value_7){
            console.log("game end 1")
            this.setState({
                gameEnd:true,
                winner:prevValue,
                color_1:this.state.winningColor,
                color_4:this.state.winningColor,
                color_7:this.state.winningColor
                
            })
        }
        else if(this.state.value_2===prevValue && this.state.value_2===this.state.value_5 && this.state.value_5===this.state.value_8){
            console.log("game end 2")
            this.setState({
                gameEnd:true,
                winner:prevValue,
                color_2:this.state.winningColor,
                color_5:this.state.winningColor,
                color_8:this.state.winningColor
            })
        }
        else if(this.state.value_3===prevValue && this.state.value_3===this.state.value_6 && this.state.value_6===this.state.value_9){
            console.log("game end 3")
            this.setState({
                gameEnd:true,
                winner:prevValue,
                color_3:this.state.winningColor,
                color_6:this.state.winningColor,
                color_9:this.state.winningColor
            })
        }
        // LEFT RIGHT LOGIC
        else if(this.state.value_1===prevValue && this.state.value_1===this.state.value_2 && this.state.value_2===this.state.value_3){
            console.log("game end 4")
            this.setState({
                gameEnd:true,
                winner:prevValue,
                color_1:this.state.winningColor,
                color_2:this.state.winningColor,
                color_3:this.state.winningColor
            })
        }
        else if(this.state.value_4===prevValue && this.state.value_4===this.state.value_5 && this.state.value_5===this.state.value_6){
            console.log("game end 5")
            this.setState({
                gameEnd:true,
                winner:prevValue,
                color_4:this.state.winningColor,
                color_5:this.state.winningColor,
                color_6:this.state.winningColor
            })
        }
        else if(this.state.value_7===prevValue && this.state.value_7===this.state.value_8 && this.state.value_8===this.state.value_9){
            console.log("game end 6")
            this.setState({
                gameEnd:true,
                winner:prevValue,
                color_7:this.state.winningColor,
                color_8:this.state.winningColor,
                color_9:this.state.winningColor
            })
        }
        // Diagonal LOGIC
        else if(this.state.value_1===prevValue && this.state.value_1===this.state.value_5 && this.state.value_5===this.state.value_9){
            console.log("game end 7")
            this.setState({
                gameEnd:true,
                winner:prevValue,
                color_1:this.state.winningColor,
                color_5:this.state.winningColor,
                color_9:this.state.winningColor
            })
        }
        else if(this.state.value_7===prevValue && this.state.value_7===this.state.value_5 && this.state.value_5===this.state.value_3){
            console.log("game end 8")
            this.setState({
                gameEnd:true,
                winner:prevValue,
                color_7:this.state.winningColor,
                color_5:this.state.winningColor,
                color_3:this.state.winningColor
            })
        }
        //DRAW LOGIC
        else if(this.state.value_1!=="" && 
                this.state.value_2!=="" && 
                this.state.value_3!=="" && 
                this.state.value_4!=="" && 
                this.state.value_5!=="" && 
                this.state.value_6!=="" && 
                this.state.value_7!=="" && 
                this.state.value_8!=="" && 
                this.state.value_9!==""){
            this.setState({
                gameEnd:true,
                draw:true
            })
        }

    }
    
    result(){
        if(this.state.gameEnd){
            if(this.state.winner==="X"){
                return "X win!"
            }if(this.state.winner==="O"){
                return "O win!"
            }if(this.state.draw){
                return "It's a tie!"
            }
        }
    }
    
    board(params) {
        return(
            <div className="board">
                <table style={this.styles}>
                    <tr>
                        <td style={{color:this.state.value_1==="X"?"red":"blue", backgroundColor:this.state.color_1}} onClick={()=>this.handleClick({name:"value_1", prevValue:this.state.turn})}>{this.state.value_1}</td>
                        <td className="vert" style={{color:this.state.value_2==="X"?"red":"blue", backgroundColor:this.state.color_2}} onClick={()=>this.handleClick({name:"value_2", prevValue:this.state.turn})}>{this.state.value_2}</td>
                        <td style={{color:this.state.value_3==="X"?"red":"blue", backgroundColor:this.state.color_3}} onClick={()=>this.handleClick({name:"value_3", prevValue:this.state.turn})}>{this.state.value_3}</td>
                    </tr>
                    <tr>
                        <td className="hori" style={{color:this.state.value_4==="X"?"red":"blue", backgroundColor:this.state.color_4}} onClick={()=>this.handleClick({name:"value_4", prevValue:this.state.turn})}>{this.state.value_4}</td>
                        <td className="vert hori" style={{color:this.state.value_5==="X"?"red":"blue", backgroundColor:this.state.color_5}} onClick={()=>this.handleClick({name:"value_5", prevValue:this.state.turn})}>{this.state.value_5}</td>
                        <td className="hori" style={{color:this.state.value_6==="X"?"red":"blue", backgroundColor:this.state.color_6}} onClick={()=>this.handleClick({name:"value_6", prevValue:this.state.turn})}>{this.state.value_6}</td>
                    </tr>
                    <tr>
                        <td style={{color:this.state.value_7==="X"?"red":"blue", backgroundColor:this.state.color_7}} onClick={()=>this.handleClick({name:"value_7", prevValue:this.state.turn})}>{this.state.value_7}</td>
                        <td className="vert" style={{color:this.state.value_8==="X"?"red":"blue", backgroundColor:this.state.color_8}} onClick={()=>this.handleClick({name:"value_8", prevValue:this.state.turn})}>{this.state.value_8}</td>
                        <td style={{color:this.state.value_9==="X"?"red":"blue", backgroundColor:this.state.color_9}} onClick={()=>this.handleClick({name:"value_9", prevValue:this.state.turn})}>{this.state.value_9}</td>
                    </tr>
                </table>
            </div>
        )
    }
    render(){
        return(
            <div className="main">
                <div className="tictac">
                    <div className="header">
                        Tic Tac Toe
                    </div>
                    {this.board()}
                    <h1 style={{display:this.state.gameEnd?"none":"block"}}>Turn: {this.state.turn}</h1>
                    
                    <h1>{this.result()}</h1>
                    <button onClick={()=>{this.setState({
                        turn:"X",
                        value_1:"",
                        value_2:"",
                        value_3:"",
                        value_4:"",
                        value_5:"",
                        value_6:"",
                        value_7:"",
                        value_8:"",
                        value_9:"",
                        gameEnd:false,
                        winner:"",
                        draw:false,
                        color_1:"white",
                        color_2:"white",
                        color_3:"white",
                        color_4:"white",
                        color_5:"white",
                        color_6:"white",
                        color_7:"white",
                        color_8:"white",
                        color_9:"white",
                        winningColor:"#adedaf"
                    })}}>Restart Game</button>


                </div>
            </div>
        )
    }
}

export default Tictac

