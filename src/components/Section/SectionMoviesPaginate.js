import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { API_TOKEN } from '../../API/TMDBApi';
import Card from './Card';
import './SectionMoviesPaginate.css';

class SectionMovies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			offset: 0,
			data: [],
			prePage: 5,
			currentPage: 0
		};
		this.handlePageClick = this
			.handlePageClick
			.bind(this);
	}

	receiveData() {
		let dataItems;
		let postData;

		axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + 'star')
		.then((response) => {
			console.log(response.data.results);
			dataItems = response.data.results;
			console.log(dataItems.length);
			const slice = dataItems.slice(this.offset, this.state.offset + this.state.prePage)
			postData = slice.map(pd => <Fragment>
					<Card title={pd.title} description={pd.overview} />
				</Fragment>)
		})
		.catch((error) => console.log(error));

		this.setState({
			data: this.dataItems,
			pageCount: Math.ceil(this.state.data.length / this.state.prePage),
			postData: this.postData
		})

		console.log(this.state.data)
	}

	handlePageClick = (e) => {
		const selectPage = e.selected;
		const offset = selectPage * this.state.prePage;

		this.setState({
			currentPage: selectPage,
			offset: offset
		}, () => {
			this.receiveData();
		});
	};

	componentDidMount() {
		this.receiveData()
	}

	render() {
		return(
			<>
				<p>Class Component</p>
				<div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
			</>
		)
	}
}

export default SectionMovies;