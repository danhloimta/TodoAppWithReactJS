import React, { Component } from 'react';
import EditNote from './EditNote';

class Search extends Component {
      EditNote = () => {
			if (this.props.editStatus() === true) {
				return (
					<EditNote 
					dataEdit = {() => this.props.dataEdit()} 
					getDataFormEdit = {(note) => this.props.getDataFormEdit(note)}
					changeEditStatus = {() => this.props.changeEditStatus()}
					/>
				)
			}
		}
		isChange = (event) => {
			const searchText = event.target.value;
			this.setState({
				textSearch: searchText
			});
			
		}
   render() {
      return (
         <div className="col-sm-12 mb-4">
			{this.EditNote()}
            <div className="form-group">
               <div className="btn-group">
                  <input onChange = { (event) => this.isChange(event)} type="text" name="search" className="form-control" placeholder="Nhập từ khóa" aria-describedby="helpId" style={{width: 500}} />
                  <button onClick = {(text) => this.props.getTextSearch(this.state.textSearch)} className="btn btn-info">
                        Tìm kiếm
                  </button>
               </div>
               <button className="btn btn-success float-right" onClick = {(event) => this.props.changeAddStatus(event)}>Thêm mới ghi chú</button>
            </div>
          </div>
      );
   }
}

export default Search;