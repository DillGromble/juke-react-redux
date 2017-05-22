import { connect } from 'react-redux';
import Stations from '../components/Stations';

function sortStations (songsArray) {
  let stationList = {};

  songsArray.forEach( song => {
    stationList[song.genre]
      ? stationList[song.genre].push(song)
      : stationList[song.genre] = [song];
  })

  return stationList;
}



const mapStateToProps = state => {
  return {
    stations: sortStations(state.songs)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);

export default StationsContainer;

