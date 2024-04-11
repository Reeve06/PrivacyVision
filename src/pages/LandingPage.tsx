import React from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css'; 
import Menu from '../components/Menu';


const LandingPage: React.FC = () => {
  const history = useHistory();

  const navigateToMenu = () => {
    history.push('/menu'); 
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="landing-page">
          <img src="logo.png" alt="Landing Image" className="landing-image" />
        </div>
      </IonContent>
      <Menu /> 
    </IonPage>
  );
};

export default LandingPage;
