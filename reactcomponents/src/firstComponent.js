import React, {Component} from 'react';

var images = ['./images/green.png','./images/red.png','./images/lotus.png','./images/yellow.png'];

class firstClass extends Component{
constructor(){
    super();
    this.state = {}
    
        this._randomImage = this._randomImage.bind(this);
      }
    
      _randomImage(){
        this.setState({});
      }
      

render(){

    const imageArray = images.map((image, i) => {
        return <img className="images" src={require(`${image}`)}/>
      });

      const random = images[Math.floor(Math.random() * images.length)];

    return (
        <div>
        {imageArray}
        <p> ------ </p>
        
        <img className="images" src={require(`${random}`)}/>
        <p> ------ </p>
        
        <button onClick={this._randomImage.bind(this)}>
        Random image
      </button>
    
        </div>
    )};


};

export default firstClass;