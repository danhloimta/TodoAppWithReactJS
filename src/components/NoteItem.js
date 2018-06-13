import React, { Component } from 'react';

class NoteItem extends Component {
	EditClick = (note) => {
		this.props.getNoteEdit(note);
		this.props.changeEditStatus();
	}
  show = () => (
	 this.props.showData().map((value,key) => (
		<div className="card" key={key}>
			<div className="card-header" role="tab" id="section1HeaderId">
				<h5 className="mb-0">
				<a  data-toggle="collapse" data-parent="#note" href={"#" + key} aria-expanded="true" aria-controls="section1ContentId">
				{value.title}
				</a>
				<i onClick = {(id) => this.props.deleteNote(value.id)} className="fas fa-times"/>
				<i onClick = {(note) => this.EditClick(value)} className="fas fa-pencil-alt" ></i>
				</h5>
			</div>
			<div id={key} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
				<div className="card-body">
				{value.content}
				</div>
			</div>
		</div>
	 ))
	)
   render() {
      return (
			<div>
				{this.show()}
			</div>
      );
   }
}

export default NoteItem;