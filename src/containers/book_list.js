import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
import { bindActionCreators } from 'redux';

 
class BookList extends Component {

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.props.books.map(book =>(
          <li 
            onClick={() => this.props.selectBook(book)} 
            className='list-group-item' 
            key={book.title}>
              {book.title}
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    books: state.books
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);