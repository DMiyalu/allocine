import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import Card from '../Section/Card';
import { API_TOKEN } from '../../API/TMDBApi';

window.React = React;

export class CommentList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    let commentNodes = this.props.data.map(function (comment, index) {
      return <Card title={comment.title} />;
    });

    return (
      <div id="project-comments" className="commentList">
        <div>{commentNodes}</div>
      </div>
    );
  }
}

export class MoviesPaginate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      offset: 0,
      perPage: 5,
      url: 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + 'star'
    };
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.state.url,
      data: { limit: 5, offset: 0 },
      dataType: 'json',
      type: 'GET',

      success: (data) => {
        this.setState({
          data: data.results,
          pageCount: Math.ceil(20 / 5),
        });
      },

      error: (xhr, status, err) => {
        console.error(this.state.url, status, err.toString()); // eslint-disable-line
      },
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer();
    });
  };

  render() {
    return (
      <div className="commentBox">
        <CommentList data={this.state.data} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

