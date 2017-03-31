var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

// Exporting the instruction for our router to App.js.
module.exports = (
  // Going to the root path of the application will result in being served the Main component.
  // IndexRoute is a default path, used if no other routes match.
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
