import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Villains';

class FellowVillains extends Component {

  state = {
    name: "",
    powers: "",
    hobbies: "",
  };

  componentWillMount() {
    // This method runs when the component is first added
    this.props.requestVillains();
  };

  addVillain() {
    const villain = { name: this.state.name, powers: this.state.powers, hobbies: this.state.powers };
    this.props.addVillain(villain);
    setTimeout(this.props.requestVillains, 600);
  };

  render() {
    return (
      <div>
        <h1>Fellow Villains</h1>
        <p>This components demonstrates fetching data</p>
        {this.renderVillainsTable(this.props)}

        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td><input id="villainName" type="text" value={this.state.name} onChange={(ev) => this.setState({ name: ev.target.value })}></input></td>
            </tr>
            <tr>
              <td>Powers:</td>
              <td><input id="villainPowers" type="text" value={this.state.powers} onChange={(ev) => this.setState({ powers: ev.target.value })}></input></td>
            </tr>
            <tr>
              <td>Hobbies:</td>
              <td><input id="villainHobbies" type="text" value={this.state.hobbies} onChange={(ev) => this.setState({ hobbies: ev.target.value })}></input></td>
            </tr>
            <tr>
              <td></td>
              <td><button onClick={this.addVillain.bind(this)}>Add</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  renderVillainsTable(props) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Powers</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {props.villains.map(villain => 
            <tr key={villain.name}>
              <td>{villain.name}</td>
              <td>{villain.powers}</td>
              <td>{villain.hobbies}</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

export default connect(
  state => state.villains,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(FellowVillains);
