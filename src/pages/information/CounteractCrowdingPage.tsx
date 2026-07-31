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
  pulseOutline,
  shieldCheckmarkOutline,
} from "ionicons/icons";

const CounteractCrowdingPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Counteract Crowding & Fatigue</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList style={{ borderRadius: "12px" }}>
          <IonItem lines="none">
            <IonIcon icon={pulseOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "8px 0" }}>
                Managing Digital Overload and Social Fatigue
              </h2>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "12px" }}>
                Why It Matters:
              </p>
              <ul>
                <li>
                  <strong>Information Overload: </strong>
                  Continuous notification streams and dense feeds cause cognitive fatigue. Curating your network reduces noise.
                </li>
                <li>
                  <strong>Personalized Advertising: </strong>
                  Aggressive algorithmic ad tracking can feel intrusive. Adjusting ad data sharing controls your experience.
                </li>
                <li>
                  <strong>Echo Chambers: </strong>
                  Recommendation systems isolate users inside confirmation loops. Diversifying sources broadens perspective.
                </li>
              </ul>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "16px" }}>
                Action Steps:
              </p>
              <ul>
                <li><strong>Curate Your Feed: </strong>Unfollow or mute channels that induce stress or negativity.</li>
                <li><strong>Adjust Ad Preferences: </strong>Opt out of third-party behavior tracking across social platforms.</li>
                <li><strong>Schedule Offline Breaks: </strong>Establish daily digital detox windows for mental clarity.</li>
              </ul>
            </IonLabel>
          </IonItem>

          <IonItem lines="none" style={{ marginTop: "24px" }}>
            <IonIcon icon={shieldCheckmarkOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "16px" }}>
                Educational Video Resources:
              </h3>
              <div className="video-container" style={{ marginBottom: "16px" }}>
                <iframe
                  src="https://www.youtube.com/embed/sJdZ7kmA2QQ?si=T0eiL0srHQSQ6yZE"
                  title="Digital Minimalism Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/jzhKgcmbjCA?si=mfVe5NyjdbwOj6yA"
                  title="Escaping Echo Chambers"
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

export default CounteractCrowdingPage;
