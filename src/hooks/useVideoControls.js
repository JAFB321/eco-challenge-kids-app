import { useRef } from "react"


export const useVideoControls = () => {
  const videoControls = useRef({
    play: () => console.warn('Video not initialized yet. Cannot play'),
    pause: () => console.warn('Video not initialized yet. Cannot pause'),
    mute: () => console.warn('Video not initialized yet. Cannot mute'),
    unMute: () => console.warn('Video not initialized yet. Cannot unMute')
  })
  
  return videoControls
}