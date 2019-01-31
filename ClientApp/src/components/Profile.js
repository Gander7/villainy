import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Villains';

class Profile extends Component {

    componentWillMount() {
        this.props.requestVillain("junq");
    }

    renderItem(villain) {
        return (
            <tr key={villain.name}>
              <td>{villain.name}</td>
              <td>{villain.powers}</td>
              <td>{villain.hobbies}</td>
            </tr>
        );
    }

    renderVillianTable(props) {
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
                {this.renderItem(props.villain)}
              </tbody>
            </table>
          )
    }

    render() {
        return (
          <div>
              <h1>Fellow Villain</h1>
              {this.renderVillianTable(this.props)}
          </div>  
        );
    }
}

export default connect(
    state => state.villains,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Profile);