import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonIcon,
  IonModal,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonToast,
} from "@ionic/react";
import axios from "axios";
import {
  lockClosedOutline,
  lockOpenOutline,
  linkOutline,
  playOutline,
  logOutOutline, 
} from "ionicons/icons";
import PlaylistVisibilityModal from "./PlaylistVisibilityModal";
import SpotifyWidget from "./TrackSpotify";

interface User {
  display_name: string;
  images: { url: string }[];
  product: string;
  followers: { total: number };
  uri: string;
  external_urls: { spotify: string };
}

interface Playlist {
  id: string;
  name: string;
  images: { url: string }[];
  description: string;
  owner: { display_name: string };
  collaborative: boolean;
  public: boolean;
  external_urls: { spotify: string };
  uri: string;
}

const PlaylistsPage: React.FC<{ accessToken: string }> = ({ accessToken }) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    fetchUserProfile();
    handleFetchPlaylists();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get<{ body: User }>("http://localhost:3000/spotify/user/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUser(response.data.body);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  const handleFetchPlaylists = async () => {
    try {
      const response = await axios.get<Playlist[]>("http://localhost:3000/spotify/playlists", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setPlaylists(response.data);
    } catch (error) {
      console.error("Failed to fetch playlists:", error);
    }
  };

  const handleToggleVisibility = async () => {
    try {
      if (!selectedPlaylist) return;

      const updatedPlaylist = {
        ...selectedPlaylist,
        public: !selectedPlaylist.public,
      };

      await axios.put(
        `http://localhost:3000/spotify/playlist/${selectedPlaylist.id}/visibility`,
        {
          isPublic: updatedPlaylist.public,
        }
      );

      const updatedPlaylists = playlists.map((playlist) =>
        playlist.id === updatedPlaylist.id ? updatedPlaylist : playlist
      );

      setPlaylists(updatedPlaylists);
      setSelectedPlaylist(null);
      setShowModal(false);
      showToastMessage('Playlist visibility changed successfully!');
    } catch (error) {
      console.error("Failed to toggle playlist visibility:", error);
      showToastMessage('Failed to toggle playlist visibility');
    }
  };

  const handleConfirmToggleVisibility = (playlist: Playlist) => {
    setSelectedPlaylist(playlist);
    setShowModal(true);
  };

  const handleCancelToggleVisibility = () => {
    setSelectedPlaylist(null);
    setShowModal(false);
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  const handleOpenInSpotify = (spotifyUrl: string) => {
    window.open(spotifyUrl, "_blank");
  };

  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <IonPage>
      <IonHeader>
                <IonToolbar color="primary">

          <IonTitle>Spotify Playlists - Logged in as: {user?.display_name}</IonTitle>
          <IonButton slot="end" onClick={handleLogout}>
            <IonIcon slot="icon-only" icon={logOutOutline} />
          </IonButton>
        </IonToolbar>
        {user && (
          <IonRow>
            <IonCol className="ion-text-center">
              { user.images.length >0 && <IonImg
                src={user.images[1].url}
                style={{ width: "200px", margin: "0 auto", display: "block" }}
              /> }
              <IonTitle>{user.display_name}</IonTitle>
              <IonCardSubtitle>
                {" "}
                Prenium Status: {user.product == "premium" ? "Yes" : "No"}
                {" - Followers: "} {user.followers.total}
              </IonCardSubtitle>

              <IonButton
                onClick={() => handleOpenInSpotify(user.uri)}
              >
                Open in Spotify
              </IonButton>
              <IonButton
                onClick={() =>
                  window.open(user.external_urls.spotify, "_blank")
                }
              >
                Open in Browser
              </IonButton>
              <IonButton
                onClick={() =>
                  window.open("https://www.spotify.com/uk/account/overview/", "_blank")
                }
              >
                Open Profile Settings
              </IonButton>
            </IonCol>
          </IonRow>
        )}

        <IonRow>
          <IonCol className="ion-text-center">
            <h2> Manipulate your Playlists Privacy</h2>
          </IonCol>
        </IonRow>
      </IonHeader>
      <IonContent>

        {/* <SpotifyWidget/> */}

        <IonList>
          {playlists.map((playlist) => (
            <IonItem key={playlist.id}>
               <IonImg
                src={playlist.images[0] ? playlist.images[0].url : 'http://localhost:8100' + '/spotify_logo.png'}
              
                slot="start"
                style={{ width: "100px" }}
              /> 
              <IonLabel>
                <h1>{playlist.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: playlist.description }} />
                <p>Owner: {playlist.owner.display_name}</p>
                <p>Collaborative: {playlist.collaborative ? "Yes" : "No"}</p>
              </IonLabel>
              <IonButton
                fill="clear"
                color="primary"
                onClick={() =>
                  handleOpenInSpotify(playlist.external_urls.spotify)
                }
              >
                <IonIcon icon={linkOutline} />
              </IonButton>
              <IonButton
                fill="clear"
                color="primary"
                onClick={() => handleOpenInSpotify(playlist.uri)}
              >
                <IonIcon icon={playOutline} />
              </IonButton>
              <IonButton
                fill="clear"
                color="primary"
                onClick={() => handleConfirmToggleVisibility(playlist)}
              >
                {playlist.public ? (
                  <IonIcon icon={lockOpenOutline} color="success" />
                ) : (
                  <IonIcon icon={lockClosedOutline} color="danger" />
                )}
              </IonButton>
              <IonButton
                fill="clear"
                color="danger"
                onClick={() => {}}
              >
                Delete
              </IonButton>
            </IonItem>
          ))}
        </IonList>

        {selectedPlaylist && (
          <PlaylistVisibilityModal
            isOpen={showModal}
            playlist={selectedPlaylist}
            onConfirm={handleToggleVisibility}
            onCancel={handleCancelToggleVisibility}
          />
        )}

        <IonToast
          isOpen={showToast}
          message={toastMessage}
          duration={2000}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default PlaylistsPage;
