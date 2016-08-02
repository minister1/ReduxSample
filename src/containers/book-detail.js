import React,{Component} from 'react';
import {connect} from 'react-redux';

export default class BookDetail extends Component{
  render(){
    if(!this.props.book){
      return <div>Selact a book to get started.</div>;
    }
    return(
      <div>
        <h3>Deatils for :</h3>
        <div>Title:{this.props.book.title}</div>
      <div>Pages:{this.props.book.Pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    book:state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
