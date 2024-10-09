import { v4 as uuid } from 'uuid';
import { useEffect, useRef, useState } from "react";

export const EmbedYoutube = ({
  videoId,
  controls,
  className= '',
  start=0 
}) => {
  const [initialized, setIntialized] = useState(false)

  const videoPlayerId = `player-${videoId}`
  const videoPlayerRef = useRef(<div id={videoPlayerId} className="w-full aspect-video h-full"></div>)
  
  useEffect(() => {
    if(initialized) {
      console.log('already initialized', videoId)
      return
    }

    console.log('Init video embed',videoId);
    // Cargar la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    setIntialized(true)

    // Crear el reproductor una vez que la API esté lista
    window.onYouTubeIframeAPIReady = () => {
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
    };
  }, [videoPlayerId, controls, initialized]);

  return <div className={`${className}`}>
      {videoPlayerRef.current}
    </div>;

}