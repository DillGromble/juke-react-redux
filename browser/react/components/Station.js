import React from 'react';
import Songs from './Songs';


const Station = props => {
  console.log(props);
  return (
    <div>
      <h3>{ props.genreName }</h3>
      <Songs
        songs={ props.songs }
        currentSong={ props.currentSong }
        isPlaying={ props.isPlaying }
        toggleOne={ props.toggleOne }
      />
    </div>
  )
};

export default Station;
