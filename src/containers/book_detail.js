import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      console.log(this.props)
      return <div> Select a book to get started ! </div>;
    }
    console.log('selected', this.props.book.title)
    return (
      <div>
        Book detail:
        {this.props.book.title}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
