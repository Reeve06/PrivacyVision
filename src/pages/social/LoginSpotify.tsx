// LoginPage.jsx
import { IonButton, IonContent, IonPage } from '@ionic/react';
import axios from 'axios';

const LoginSpotify = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3000/spotify/auth');
      window.location.href = response.data.redirect;
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
