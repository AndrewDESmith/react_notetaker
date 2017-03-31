var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');

ReactDOM.render(
// Retrieve the <Route></Route> from config/routes.js
  <Router>{routes}</Router>,
  document.getElementById('app')
)
