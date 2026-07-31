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
  warningOutline,
  shieldCheckmarkOutline,
} from "ionicons/icons";

const SuspiciousLinksPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Avoid Suspicious Links</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList style={{ borderRadius: "12px" }}>
          <IonItem lines="none">
            <IonIcon icon={warningOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-warning)" }} />
            <IonLabel className="ion-text-wrap">
              <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "8px 0" }}>
                Detecting Phishing Scams & Malicious URLs
              </h2>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "12px" }}>
                Why It Matters:
              </p>
              <ul>
                <li>
                  <strong>Phishing Spoofing: </strong>
                  Attackers craft lookalike login portals to harvest passwords and banking credentials.
                </li>
                <li>
                  <strong>Drive-by Malware Downloads: </strong>
                  Clicking unverified links can trigger background malware payloads or ransomware.
                </li>
              </ul>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "16px" }}>
                Protective Measures:
              </p>
              <ul>
                <li><strong>Inspect Hover Destinations: </strong>Hover over links to verify the underlying destination domain matches the official host.</li>
                <li><strong>Beware Shortened Links: </strong>Use URL expanders on shortened links (`bit.ly`, `tinyurl`) before opening.</li>
                <li><strong>Verify Sender Identity: </strong>Confirm suspicious links out-of-band directly with the sender.</li>
              </ul>
            </IonLabel>
          </IonItem>

          <IonItem lines="none" style={{ marginTop: "24px" }}>
            <IonIcon icon={shieldCheckmarkOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "16px" }}>
                Educational Video Guides:
              </h3>
              <div className="video-container" style={{ marginBottom: "16px" }}>
                <iframe
                  src="https://www.youtube.com/embed/o0btqyGWIQw?si=Fy2VpN7ysSiNcytz"
                  title="How to Spot Phishing Emails"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/aO858HyFbKI?si=rouB586lhiUTLy2d"
                  title="Avoiding Phishing Scams"
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

export default SuspiciousLinksPage;
