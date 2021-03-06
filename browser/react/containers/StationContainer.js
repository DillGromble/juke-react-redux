import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';


const mapStateToProps = (state, ownProps) => {
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs
                .filter( song => song.genre === ownProps.params.genreName)
                .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: (song, list) => {
      dispatch(toggleSong(song, list))
    }
  };
};

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
