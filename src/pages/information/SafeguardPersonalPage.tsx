import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import {
  lockClosedOutline,
  shieldCheckmarkOutline,
  eyeOffOutline,
} from "ionicons/icons";
import Menu from "../../components/Menu";
const SafeguardPersonalPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Importance of Privacy on Online Social Media</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem lines="none">
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>
            <IonTitle><h2>Safeguard Personal Information</h2></IonTitle>
              <p>
              <IonTitle><strong>Why It Matters:</strong></IonTitle>
              </p>
              <ul>
                <li>
                <IonTitle>Identity theft: Sharing personal information like addresses,
                  birthdates, and phone numbers makes you vulnerable to
                  identity theft, where someone uses your information for
                  fraudulent purposes.</IonTitle>
                </li>
                <li>
                <IonTitle>Targeted scams: Knowing your details, scammers can craft
                  personalised phishing attempts or exploit them for targeted
                  advertising.</IonTitle>
                </li>
                <li>
                <IonTitle> Data breaches: Platforms can experience data breaches,
                  exposing your information to unauthorised access.</IonTitle>
                </li>
              </ul>
              <p>
              <IonTitle> <strong>Action:</strong></IonTitle>
              </p>
              <ul>
                <li>
                <IonTitle> Review and adjust privacy settings: Limit what information is
                  publicly visible on each platform.</IonTitle>
                </li>
                <li>
                <IonTitle> Utilise privacy tools: Many platforms offer tools to control
                  personal data sharing and visibility.</IonTitle>
                </li>
                <li>
                <IonTitle> Be selective about what you share: Avoid sharing sensitive
                  information like home addresses, phone numbers, financial
                  details, etc.</IonTitle>
                </li>
              </ul>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={shieldCheckmarkOutline} slot="start" />
            <IonLabel>
            <IonTitle><h3>YouTube Links:</h3></IonTitle>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/aO858HyFbKI"
                  title="How to Stay Safe Online (Crash Course Privacy)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?list=PL388D1AC3B539E4F1"
                  title="Digital Identity Theft Protection and Prevention"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SafeguardPersonalPage;
