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
} from "ionicons/icons";

const ReputationManagementPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Privacy Management: Why It Matters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem lines="none">
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>
              <h2>Importance of Privacy on Online Social Media</h2>
              <p>
                <strong>Why It Matters:</strong>
              </p>
              <ul>
                <li>
                  Identity theft: Sharing personal information like addresses,
                  birthdates, and phone numbers makes you vulnerable to
                  identity theft, where someone uses your information for
                  fraudulent purposes.
                </li>
                <li>
                  Targeted scams: Knowing your details, scammers can craft
                  personalized phishing attempts or exploit them for targeted
                  advertising.
                </li>
                <li>
                  Data breaches: Platforms can experience data breaches,
                  exposing your information to unauthorized access.
                </li>
              </ul>
              <p>
                <strong>Action:</strong>
              </p>
              <ul>
                <li>
                  Review and adjust privacy settings: Limit what information is
                  publicly visible on each platform.
                </li>
                <li>
                  Utilize privacy tools: Many platforms offer tools to control
                  personal data sharing and visibility.
                </li>
                <li>
                  Be selective about what you share: Avoid sharing sensitive
                  information like home addresses, phone numbers, financial
                  details, etc.
                </li>
              </ul>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={shieldCheckmarkOutline} slot="start" />
            <IonLabel>
              <h3>YouTube Links:</h3>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/VCoyZ8lKDZI"
                  title="Managing Your Online Reputation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/aO858HyFbKI"
                  title="The Dark Side of Social Media - Impact on Our Lives"
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

export default ReputationManagementPage;
