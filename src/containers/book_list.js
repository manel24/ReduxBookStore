import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="group-list-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}
//ANything returned from this fx will be passed as
//props in the BookList container
function mapStateToProps(state) {
  return { books: state.books };
}
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed
  //to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//Promote BookList from a component to a container _ it needs
// to know about this new dispatch method selectBook.
// Make it available as a prop

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
