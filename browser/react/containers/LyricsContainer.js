import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { connect } from 'react-redux';

import {searchLyrics} from '../action-creators/lyrics';



const mapStateToProps = state => {
  return state;
};


class LyricsWrapper extends Component {

  constructor() {
    super();
    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }

  render() {
    return (
      <Lyrics
        {...this.props}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }
}


const LyricsContainer = connect(mapStateToProps)(LyricsWrapper);

export default LyricsContainer;
