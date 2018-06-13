import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import data from './components/Data.json';
import Search from './components/Search';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
			editStatus: false,
			addStatus: false,
			textSearch: ''
		}
	}
	
	getDataForm = (title,content) => {
		var item = {};
		item.title = title;
		item.content = content;
		var items = this.state.data;
		items.push(item);
		this.setState({
			data: items
		});
	}
	deleteNote = (id) => {
		var notes = this.state.data.filter(item => item.id !== id)
		this.setState({
			data: notes
		});
	}
	changeAddStatus = (event) => {
		this.setState({
			addStatus: !this.state.addStatus
		});
	}
	getNoteEdit = (note) => {
		this.setState({
			dataEdit: note
		});
	}
	getDataFormEdit = (note) => {
		this.state.data.forEach((value,key) => {
			if (value.id === note.id) {
				value.id = note.id
				value.title = note.title;
				value.content = note.content;	
				//console.log(value);
			}
		});
	}
	changeEditStatus = (event) => {
		this.setState({
			editStatus: !this.state.editStatus
		});
	}
	getTextSearch = (text) => {
		this.setState({
			textSearch: text
		});	
	}
  render() {
	   var result = [];
	   this.state.data.forEach((note)=>{
			if (note.content.indexOf(this.state.textSearch) !== -1) {
				result.push(note);
			}
		})
    return (
      <div>
        <Nav />
        <div className="container">
				<div className="row">

					<Search 
					changeAddStatus = {(event) => this.changeAddStatus(event)}
					getDataFormEdit = {(note) => this.getDataFormEdit(note)}
					editStatus = {() => this.state.editStatus}
					dataEdit = {() => this.state.dataEdit}
					getTextSearch = {(text) => this.getTextSearch(text)}
					changeEditStatus = {(event) => this.changeEditStatus(event)}
					/>

					<NoteList 
					getData = {result} 
					deleteNote = {(id) => this.deleteNote(id)}
					changeEditStatus = {(event) => this.changeEditStatus(event)}
					getNoteEdit = {(note) => this.getNoteEdit(note)}
					/>

					<NoteForm 
					getDataForm = { (title,content) => this.getDataForm(title,content)}
					addStatus = {() => this.state.addStatus}
					/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
