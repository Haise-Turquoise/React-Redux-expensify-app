'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const obj = {
//     name: 'Takina',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);

// //console.log(obj.getName());
// console.log(getName());

// stateless 


// class Options extends React.Component {

//     // constructor(props){
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} choice={option} />)
//                 }
//             </div>
//         );
//     }
// }


_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, { options: ['Takina', 'Chisato'] }), document.getElementById('app')); // install -> input -> use
