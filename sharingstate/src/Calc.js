import React from 'react';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {kilos: 0, pounds: 0}
    this.kilos  = this.kilos.bind(this);
    this.pounds = this.pounds.bind(this);
  }

  kilos = function(x){
    this.setState({
      pounds: x.target.value*2.20,
      kilos: x.target.value
    });
  }
  pounds = function(x){
    this.setState({
      kilos: x.target.value/2.20,
      pounds: x.target.value
    });
  }

  render() {
    return (
      <div>

        <p>
          <label>Kilos</label>
          <input type="text" name="kilos" value={this.state.kilos} onChange={this.kilos}/>
        </p>

        <p>
          <label>Pounds</label>
          <input type="text" name="pounds" value={this.state.pounds} onChange={this.pounds}/>
        </p>
        <p></p>
      </div>
    );
  }
}

export default Calc;
