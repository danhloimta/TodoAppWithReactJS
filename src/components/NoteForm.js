import React, { Component } from 'react';

class NoteForm extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   
   isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
         [name]: value
      }); 
   }
   addStatus = () => {
      if (this.props.addStatus() === true) {
         return (
            <div className="col">
               <h4 className="text-info">Thêm ghi chú mới</h4>
               <div className="form-group">
                  <label >Tiêu đề ghi chú:</label>
                  <input onChange = {(event) => this.isChange(event)}
                  type="text" name="title" className="form-control" placeholder="Tiêu đề" aria-describedby="helpId" />
                  <div className="form-group">
                     <label >Nội dung ghi chú:</label>
                     <textarea onChange = {(event) => this.isChange(event)}
                     type="text" name="content" className="form-control" placeholder="Nội dung note" aria-describedby="helpId" defaultValue={" "} />
                  </div>
                  <button onClick = {(title,content) => this.props.getDataForm(this.state.title, this.state.content)} type="submit" className="btn btn-primary btn-block">Lưu</button>
               </div>
            </div>
         )
      }
   }
  
   render() {     
      return (
        <div>
           {this.addStatus()}
         </div>

      );
   }
}


export default NoteForm;

