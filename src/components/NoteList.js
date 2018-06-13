import React, { Component } from 'react';
import NoteItem from './NoteItem';
//import NoteItem from './NoteItem';


class NoteList extends Component {
   render() {
     //console.log(this.showData());
      return (
         <div className="col mb-4">
            <div id="note" role="tablist" aria-multiselectable="true">
              <NoteItem 
              showData = {() => this.props.getData} 
              deleteNote = {(id) => this.props.deleteNote(id)}
              changeEditStatus = {() => this.props.changeEditStatus()}
              getNoteEdit = {(note) => this.props.getNoteEdit(note)}
              />
            </div>
         </div>
       
      );
   }
}

export default NoteList;