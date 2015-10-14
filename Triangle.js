'use strict';

 var React = require('react-native');
 var {
   StyleSheet,
   View,
 } = React;

 var Triangle = React.createClass({

   getDefaultProps: function() {
     return {
       direction: 'up',
       width: 0,
       height: 0,
       color: 'white',
     };
   },

   _borderStyles() {
     if (this.props.direction == 'up') {
       return {
         borderTopWidth: 0,
         borderRightWidth: this.props.width/2.0,
         borderBottomWidth: this.props.height,
         borderLeftWidth: this.props.width/2.0,
         borderTopColor: 'transparent',
         borderRightColor: 'transparent',
         borderBottomColor: this.props.color,
         borderLeftColor: 'transparent',
       };
     } else if (this.props.direction == 'right') {
       return {
         borderTopWidth: this.props.height/2.0,
         borderRightWidth: 0,
         borderBottomWidth: this.props.height/2.0,
         borderLeftWidth: this.props.width,
         borderTopColor: 'transparent',
         borderRightColor: 'transparent',
         borderBottomColor: 'transparent',
         borderLeftColor: this.props.color,
       };
     } else if (this.props.direction == 'down') {
       return {
         borderTopWidth: this.props.height,
         borderRightWidth: this.props.width/2.0,
         borderBottomWidth: 0,
         borderLeftWidth: this.props.width/2.0,
         borderTopColor: this.props.color,
         borderRightColor: 'transparent',
         borderBottomColor: 'transparent',
         borderLeftColor: 'transparent',
       };
     } else if (this.props.direction == 'left') {
       return {
         borderTopWidth: this.props.height/2.0,
         borderRightWidth: this.props.width,
         borderBottomWidth: this.props.height/2.0,
         borderLeftWidth: 0,
         borderTopColor: 'transparent',
         borderRightColor: this.props.color,
         borderBottomColor: 'transparent',
         borderLeftColor: 'transparent',
       };
     } else {
       console.log('Error: Triangle.js wrong direction.');
       return {};
     }
   },

   render: function() {
     var borderStyles = this._borderStyles();
     return (
       <View style={[styles.triangle, borderStyles, this.props.style]}/>
     )
   },

 });

 var styles = StyleSheet.create({
   triangle: {
     width: 0,
     height: 0,
     backgroundColor: 'transparent',
     borderStyle: 'solid',
   },
 });

 module.exports = Triangle;
