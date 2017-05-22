import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';

const mapState = state => state.playlists

const SidebarContainer = connect(mapState)(Sidebar);

export default SidebarContainer;
