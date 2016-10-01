require('../node_modules/bootstrap/dist/css/bootstrap.css');
var ReactDOM = require('react-dom');
var React = require('react');
var App = require('./containers/App');

var app  = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);