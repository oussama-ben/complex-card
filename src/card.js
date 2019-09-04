import React from 'react';
import './card.css';
import logo from './puce.jpg';
import logo2 from './master.png';
import logo3 from './baground.jpg';

class Card extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'xxxxx xxx',
        number: '0000000000000000',
        month: 'xx/yy',
       
        
      }}

      nameChange=(n)=> {
        this.setState({
          name: n.target.value
        });
      }
      
      numberChange=(c)=>{
        this.setState({
          number: c.target.value
        });
      }
      
      monthChange=(m)=> {
        this.setState({
         month: m.target.value
        });
      } 

      render()  {
    return (
      <div className="Container">
      
        
        <h1 className="titre">Credit Card</h1>
        <img className="image1" src={logo}  alt="puce" />
        <h2 className="code">{this.state.number.slice(0,4)+' '+this.state.number.slice(4,8 )+' '+this.state.number.slice(8,12 )+' '+this.state.number.slice(12,16 )+' '}</h2>
        <h1 className="id">{this.state.name.toUpperCase}</h1> 
        <h2 className="valid">{this.state.month.slice(0,2)+'/'+this.state.month.slice(2,4)}</h2>
        <h2 className="holder">{this.state.name}</h2>
        <img className="image2" src={logo2}  alt="master" />
        
        <div className="inputs">
        <input type="text" className="input1" maxLength="20" onChange={this.nameChange}/><br></br>
        <input type="text" className="input2" maxLength="4" onChange={this.monthChange}/><br></br>
        <input type="text" className="input3" maxLength="16" onChange={this.numberChange}/>
        </div>
    
    </div>
      
    );
      }
    }
      
export default Card;