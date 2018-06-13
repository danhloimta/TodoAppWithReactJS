import React, { Component } from 'react';

class EditNote extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: this.props.dataEdit().id,
         name: this.props.dataEdit().title,
         value: this.props.dataEdit().content
      }
   }
   
   isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
         [name]: value
      });
      // console.log(this.state.name);
      // console.log(this.state.value);
      
   }
   saveData = () => {
      var note = {};
      note.id = this.state.id;
      note.title = this.state.name;
      note.content = this.state.value;
      //this.props.save(note);
      //console.log(this.props.dataEdit());
      //console.log(note);
      this.props.getDataFormEdit(note);
      this.props.changeEditStatus();
   }
   render() {
      //console.log(this.state.title);
      
      return (
         <div className="col-sm-12">
            <form>
               <div className="card border-primary mb-3 bg-secondary text-white">
                  <h4 className="card-header text-center">Sửa ghi chú</h4>
                  <div className="card-body text-primary">
                  <div className="form-group">                               
                     <input onChange = {(event) => this.isChange(event) } type="text" name="name" className="form-control" placeholder="Tiêu đề" defaultValue={this.props.dataEdit().title} />
                  </div>
                  <div className="form-group">                               
                     <input onChange = {(event) => this.isChange(event) } type="text" name="value" className="form-control" placeholder="Nội dung" defaultValue = {this.props.dataEdit().content} />
                  </div>
                  <input type="button" className="btn btn-danger btn-block" defaultValue="Lưu" onClick = {(note) => this.saveData(note)} />
                  </div>
               </div>
            </form>
         </div>

      );
   }
}

export default EditNote;