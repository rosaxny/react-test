import React from 'react';
import MySecondComponent from './my-second-component';

export default class MyFirstComponent extends React.Component {
	constructor(props) {
		super(props);
		console.log('I am inside constructor');
		this.state= {
			name: ''
		}
	}
	changeState() {
		this.setState({name: 'Jon'})
	}

	componentDidUpdate() {
		console.log('I am inside componentDidUpdate');
	}
	componentDidMount() {
		console.log('I am inside componentDidMount');
	}
	render() {
		console.log('I am inside render');
		return (
			<MySecondComponent executeFunction={this.changeState.bind(this)}/>
			);
	}
}
