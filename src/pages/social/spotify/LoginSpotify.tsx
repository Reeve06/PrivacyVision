import { IonContent, IonPage } from '@ionic/react';
import axios from 'axios';
import "./page.css";

const LoginSpotify = () => {
  const handleLogin = async () => {
    try {
      window.location.href = 'http://localhost:3000/spotify/auth';
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="login-content">
        <div className="centered-content">
          <div className="spotify-logo-container">
            <img onClick={handleLogin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png" alt="Spotify Logo" className="spotify-logo" />
            <p className="sync-message">Click to sync your Spotify account</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginSpotify;
