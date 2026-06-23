import "./SpotifyPlayer.css";

export const SpotifyPlayer = () => {
  
  const spotifyUrl = "https://open.spotify.com/embed/playlist/6cGy1S2lCJUZBnlxWtvzjX?utm_source=generator&si=173b9c2c4867400f";

  return (
    <div className="spotify-fixed">
      <iframe 
        src={spotifyUrl} 
        width="100%" 
        height="80" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        title="Nacer con Estilo Playlist"
      ></iframe>
    </div>
  );
};