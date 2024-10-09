import { EmbedYoutube } from "../components/EmbedYoutube"
import { useVideoControls } from "../hooks/useVideoControls"


export const Exploremos = () => {

  const controls = useVideoControls()

  return (

    <> 
    
    <EmbedYoutube videoId={'XPhmpfiWEEw'} controls={controls} start={82}/>


    </>
  )

}