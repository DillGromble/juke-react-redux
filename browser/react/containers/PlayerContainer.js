import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import { connect } from 'react-redux';


const mapProps = state => {
  return state.player;
};

const mapDispatch = (dispatch) => {
  return {
    next: () => {dispatch(next())},
    prev: () => {dispatch(previous())},
    toggle: (song, songList) => {
      dispatch(toggleSong(song, songList))
    },
    updateProgress: (progress) => {
      dispatch(setProgress(progress))
    }
  };
};


class PlayerContainersss extends Component {

  componentDidMount() {
    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      this.props.updateProgress(AUDIO.currentTime / AUDIO.duration)
    });
  }

  render() {
    return (
      <Player
        {...this.props}
        next={this.props.next}
        prev={this.props.prev}
        toggle={() => this.props.toggle(this.props.currentSong, this.props.currentSongList)}
    />
    )
  }

}

const PlayerContainer = connect(mapProps, mapDispatch)(PlayerContainersss)

export default PlayerContainer;
