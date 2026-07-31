import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonList, IonItem, IonImg, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { linkOutline, playOutline } from 'ionicons/icons';

interface Artist {
  name: string;
}

interface AlbumImage {
  url: string;
}

interface Album {
  name: string;
  images: AlbumImage[];
}

interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: Album;
  external_urls: { spotify: string };
  uri: string;
}

const SpotifyWidget: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Track[]>(
          'http://localhost:3000/spotify/top_tracks'
        );
        setTracks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleOpenInSpotify = (spotifyUrl: string) => {
    window.open(spotifyUrl, '_blank');
  };

  return (
    <IonList>
      {tracks.map((track) => (
        <IonItem key={track.id}>
          <IonImg
            src={track.album?.images?.[0]?.url || 'http://localhost:8100/spotify_logo.png'}
            slot="start"
            style={{ width: "100px" }}
          />
          <IonLabel>
            <h1>{track.name}</h1>
            <p>Artists: {track.artists?.map((artist) => artist.name).join(', ')}</p>
            <p>Album: {track.album?.name}</p>
          </IonLabel>
          <IonButton
            fill="clear"
            color="primary"
            onClick={() =>
              handleOpenInSpotify(track.external_urls?.spotify)
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
