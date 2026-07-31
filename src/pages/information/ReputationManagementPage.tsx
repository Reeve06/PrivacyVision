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
  thumbsUpOutline,
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
          <IonTitle>Reputation Management</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList style={{ borderRadius: "12px" }}>
          <IonItem lines="none">
            <IonIcon icon={thumbsUpOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "8px 0" }}>
                Managing Your Online Reputation
              </h2>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "12px" }}>
                Why It Matters:
              </p>
              <ul>
                <li>
                  <strong>Potential Employers: </strong>
                  Social media profiles are frequently screened during hiring processes. Inappropriate or unprofessional posts can harm job prospects.
                </li>
                <li>
                  <strong>Personal & Professional Relationships: </strong>
                  Misinterpreted posts can cause unnecessary misunderstandings or offend peers and contacts.
                </li>
                <li>
                  <strong>Personal Brand: </strong>
                  Your online presence is a direct extension of your personal brand. Positive, respectful content creates lasting credibility.
                </li>
              </ul>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "16px" }}>
                Action Steps:
              </p>
              <ul>
                <li><strong>Think Before Posting: </strong>Pause and evaluate the long-term impact of your updates and photos.</li>
                <li><strong>Audit Old Content: </strong>Periodically review and prune outdated posts that no longer represent your values.</li>
                <li><strong>Use Audience Controls: </strong>Restrict personal or sensitive posts to verified close friends and family.</li>
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
                  src="https://www.youtube.com/embed/D7A-yYztCig?si=Iwl3xUgC1IZefP7a"
                  title="Impact of Social Media on Reputation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/7_iVgqgXzi8?si=_ANEkAiYmV569aMg"
                  title="Managing Your Online Reputation"
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
