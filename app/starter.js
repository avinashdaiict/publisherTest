/**
 * Created by avinashsrivastava on 1/23/17.
 */
var react = require('react');
var path = require("path");
var lodash = require('lodash');
var reactDOM = require('react-dom');
var reactRouter = require('react-router');
var classnames = require('classnames');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

if (ExecutionEnvironment.canUseDOM) {
  console.log("shdsajdsad");
  window.React = react;
  window.lodash = lodash;
  window.classnames = classnames;
  window.ReactRouter = reactRouter;
  window.ReactDom = reactDOM;
}
