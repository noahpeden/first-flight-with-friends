import React, { Component } from 'react';
import { database } from './firebase';
import firebase from './firebase';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			newData: ''
		};

		this.dataRef = firebase.database().ref();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		database.ref().on('value', snapshot => {
			this.setState({
				data: snapshot.val()
			});
		});
	}

	componentWillMount() {
		this.dataRef.on('value', snapshot => {
			this.setState({
				data: snapshot.val()
			});
		});
	}

	handleChange(event) {
		const newData = event.target.value;
		this.setState({
			newData: newData
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.dataRef.push(this.state.newData);
		this.setState({ newData: '' });
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Welcome to React and Firebase</h2>
				</div>
				<pre className="App-data">
					{JSON.stringify(this.state.data, null, 2)}
				</pre>
				<form className="App-form" onSubmit={this.handleSubmit}>
					<input value={this.state.newData} onChange={this.handleChange} />
					<input type="submit" disabled={!this.state.newData} />
				</form>
			</div>
		);
	}
}

export default App;
