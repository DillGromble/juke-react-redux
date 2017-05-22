// import React, {Component} from 'react';
// import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';
import { connect } from 'react-redux';


const mapProps = state => {
  return Object.assign({
    playlists: state.playlists,
    selectedPlaylist: state.playlists.selected,
  }, state.player);
}

const mapDispatch = dispatch => {
  return {
    toggleOne: (song, list) => {
      dispatch(toggleSong(song, list))
    }
  };
}


const PlaylistContainer = connect(mapProps, mapDispatch)(Playlist)

export default PlaylistContainer;
