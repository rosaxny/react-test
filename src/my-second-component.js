import React from 'react';

export default class MySecondComponent extends React.Component {
	render() {
		return (<p onClick={this.props.executeFunction}>Hi</p>);
	}
}