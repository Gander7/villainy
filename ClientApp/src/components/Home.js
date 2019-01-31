import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Hello, fellow villain!</h1>
    <p>Welcome to Villainy</p>
    <p>Here you can:</p>
    <ul>
      <li>Find new friends, or old nemesis</li>
      <li>Set up socializations</li>
      <li>Look for new ways to commit attrocities</li>
    </ul>
    <p>Above all, have fun!</p>
  </div>
);

export default connect()(Home);
