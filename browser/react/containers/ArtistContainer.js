import { connect } from 'react-redux';
import Artist from '../components/Artist';
import {toggleSong} from '../action-creators/player';


const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, {
      selectedArtist: state.artists.selected,
      children: ownProps.children
    },
    state.player
    );
};


const mapDispatchToProps = dispatch => {
  return {
    toggleOne: (song, list) => {
      dispatch(toggleSong(song, list))
    }
  };
};


const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);


export default ArtistContainer;
