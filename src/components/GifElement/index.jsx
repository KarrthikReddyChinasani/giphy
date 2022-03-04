import React, { createRef, memo, useState } from 'react';
import ReactFreezeframe from 'react-freezeframe';
import Play from '../svg/play';
import Pause from '../svg/pause';

import "./styles.css";

const GifElement = memo(({ gif, id, user }) => {
  let freezeEle = createRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    freezeEle?.current?.toggle();
    setIsPlaying(play => !play);
  }

  return (
    <div className='gifWrapper' key={id}>
      <ReactFreezeframe
        src={gif}
        ref={freezeEle}
        options={{
          trigger: false,
        }}
      />
      <div className='buttonWrapper' onClick={handlePlayClick}>
        {isPlaying ? <Pause /> : <Play />}
      </div>
      {user && <div className='user'>
        <img src={user?.avatar_url} className='avatar'/>
        <div className='user-name'>
          <p>{user?.display_name}</p>
        </div>
      </div>}
    </div>
  )
})

export default GifElement;