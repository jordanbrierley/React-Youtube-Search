// finds the module 'react' from our dependancies and stores it as a variable called React
import _ from 'lodash'; 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// imports custom component
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// declare YoutubeAPI key variable
const API_KEY = 'AIzaSyC4RjlRNX98Ax2cYaIuNfsnYVaXq7vF3w0';

// Create a new component. This component should produce some HTML
// const is a ES6 'variable' or constant - final value, will never change
// this is a type of component, class of component
class App extends Component {
	constructor (props) {
		super(props);
	
		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('surfboards');

	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) =>{
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});

	}


	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}
// ES6 javascript modules, code works in 'silos' like php classes, can't get access to other file variabless unless explicitly specified


// Take this components generated HTML and put this in the page (DOM)
// two arguments first is JSX component instance, second is HTML node
ReactDOM.render(<App />, document.querySelector('.container'));
