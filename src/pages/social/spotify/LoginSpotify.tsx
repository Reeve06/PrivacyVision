// LoginPage.jsx
import { IonButton, IonContent, IonPage } from '@ionic/react';
import axios from 'axios';

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
      <IonContent>
        <IonButton expand="block" onClick={handleLogin}>Login with Spotify</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginSpotify;
