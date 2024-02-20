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

const SuspiciousLinksPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>{" "}
          <IonTitle>Importance of Privacy on Online Social Media</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>
              <h2>
                <IonTitle>Safeguard Personal Information</IonTitle>
              </h2>
              <p>
                <IonTitle>
                  <strong>Why It Matters:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                    Identity theft: Sharing personal information like addresses,
                    birthdates, and phone numbers makes you vulnerable to
                    identity theft, where someone uses your information for
                    fraudulent purposes.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                    Targeted scams: Knowing your details, scammers can craft
                    personalized phishing attempts or exploit them for targeted
                    advertising.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                    Data breaches: Platforms can experience data breaches,
                    exposing your information to unauthorized access.
                  </IonTitle>
                </li>
              </ul>
              <p>
                <IonTitle>
                  <strong>Action:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                    Review and adjust privacy settings: Limit what information
                    is publicly visible on each platform.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                    Utilize privacy tools: Many platforms offer tools to control
                    personal data sharing and visibility.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                    Be selective about what you share: Avoid sharing sensitive
                    information like home addresses, phone numbers, financial
                    details, etc.
                  </IonTitle>
                </li>
              </ul>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={shieldCheckmarkOutline} slot="start" />
            <IonLabel>
              <h3>
                <IonTitle>YouTube Links:</IonTitle>
              </h3>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aO858HyFbKI"
                title="How to Stay Safe Online (Crash Course Privacy)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PL388D1AC3B539E4F1"
                title="Digital Identity Theft Protection and Prevention"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SuspiciousLinksPage;
