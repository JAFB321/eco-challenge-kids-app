import { v4 as uuid } from 'uuid';
import { useContext, useEffect, useMemo, useState } from "react";
import { YoutubeApiContext } from '../context/YoutubeApiContext';

export const EmbedYoutube = ({
  videoId,
  controls,
  className= '',
  start=0 
}) => {
  const [initialized, setIntialized] = useState(false)
  
  const youtubeApiContext = useContext(YoutubeApiContext)
  const videoPlayerId = useMemo(() => `player-${videoId}-${uuid()}`, [videoId])

  useEffect(() => {
    if(initialized) {
      console.log('already initialized', videoId)
      return
    }
    if(!youtubeApiContext.ready){
      console.log('Youtube Api not ready', videoId)
      return
    }

    console.log('Init video embed',videoId);
    setIntialized(true)

    new window.YT.Player(videoPlayerId, {
        videoId, // ID del video de YouTube
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          showinfo: 0,
          quality: 'highres',
          start: start
          // mute: 1,
        },
        events: {
          onReady: (event) => {
            console.log('Ready video embed',videoId);
            controls.current.play = () => event.target.playVideo()
            controls.current.pause = () => event.target.pauseVideo()
            controls.current.mute = () => event.target.mute()
            controls.current.unMute = () => event.target.unMute()
          },
        },
      });
  }, [videoPlayerId, controls, initialized, youtubeApiContext]);

  return <div className={`${className}`}>
      <div id={videoPlayerId} className="w-full aspect-video h-full"></div>
    </div>;

}