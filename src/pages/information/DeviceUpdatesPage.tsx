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
  phonePortraitOutline,
  shieldCheckmarkOutline,
} from "ionicons/icons";

const DeviceUpdatesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Keep Devices Updated & Backed Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList style={{ borderRadius: "12px" }}>
          <IonItem lines="none">
            <IonIcon icon={phonePortraitOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "8px 0" }}>
                Patch Management & Data Backups
              </h2>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "12px" }}>
                Why It Matters:
              </p>
              <ul>
                <li>
                  <strong>System Security Updates: </strong>
                  Operating system patches remediate zero-day vulnerabilities exploited by malware and ransomware.
                </li>
                <li>
                  <strong>Data Loss Protection: </strong>
                  Hardware failure, theft, or malware infection can result in permanent data loss without routine backups.
                </li>
              </ul>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "16px" }}>
                Recommended Actions:
              </p>
              <ul>
                <li><strong>Enable Auto-Updates: </strong>Turn on automatic OS and application updates on mobile devices and PCs.</li>
                <li><strong>Automate Cloud & Local Backups: </strong>Configure scheduled backups to external storage or secure cloud services.</li>
                <li><strong>Test Recovery: </strong>Periodically test restoring data files from your backup storage.</li>
              </ul>
            </IonLabel>
          </IonItem>

          <IonItem lines="none" style={{ marginTop: "24px" }}>
            <IonIcon icon={shieldCheckmarkOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "16px" }}>
                Educational Video Guides:
              </h3>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/FIL6L7f32Bs?si=yW-wiU8Aq7dUqOZv"
                  title="Importance of Backing Up Data"
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

export default DeviceUpdatesPage;
