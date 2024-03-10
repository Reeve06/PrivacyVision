
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonList, IonItem, IonImg, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { linkOutline, playOutline } from 'ionicons/icons';

const SpotifyWidget = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/spotify/top_tracks', // Replace this with your Spotify API endpoint
          {
            headers: {
              Authorization: 'Bearer YOUR_SPOTIFY_ACCESS_TOKEN', // Replace this with your Spotify access token
            },
          }
        );
        setTracks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <IonList>
      {tracks.map((track) => (
        <IonItem key={track.id}>
          <IonImg
            src={track.album.images[0].url}
            slot="start"
            style={{ width: "100px" }}
          />
          <IonLabel>
            <h1>{track.name}</h1>
            <p>Artists: {track.artists.map((artist) => artist.name).join(', ')}</p>
            <p>Album: {track.album.name}</p>
          </IonLabel>
          <IonButton
            fill="clear"
            color="primary"
            onClick={() =>
              handleOpenInSpotify(track.external_urls.spotify)
            }
          >
            <IonIcon icon={linkOutline} />
          </IonButton>
          <IonButton
            fill="clear"
            color="primary"
            onClick={() => handleOpenInSpotify(track.uri)}
          >
            <IonIcon icon={playOutline} />
          </IonButton>
        </IonItem>
      ))}
    </IonList>
  );
};

export default SpotifyWidget;
