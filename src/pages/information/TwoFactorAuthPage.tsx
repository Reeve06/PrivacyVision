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

const TwoFactorAuthPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Two-Factor Authentication (2FA)</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList style={{ borderRadius: "12px" }}>
          <IonItem lines="none">
            <IonIcon icon={lockClosedOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "8px 0" }}>
                Understanding Two-Factor Authentication
              </h2>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "12px" }}>
                Why It Matters:
              </p>
              <ul>
                <li>
                  <strong>Defense in Depth: </strong>
                  2FA requires two distinct factors (something you know + something you have) before authenticating, rendering stolen passwords useless on their own.
                </li>
                <li>
                  <strong>Mitigating Breach Exposure: </strong>
                  Even if your credentials leak in a third-party breach, 2FA prevents unauthorized account entry.
                </li>
              </ul>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "16px" }}>
                Recommended Setup:
              </p>
              <ul>
                <li><strong>Authenticator Apps: </strong>Use TOTP apps like Google Authenticator or Authy over SMS codes.</li>
                <li><strong>Hardware Keys: </strong>Consider FIDO2/YubiKey security tokens for ultra-high security accounts.</li>
                <li><strong>Backup Codes: </strong>Store emergency recovery codes securely offline.</li>
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
                  src="https://www.youtube.com/embed/AMOtB7XkTT4?si=2FqplY3ov6WQlmJ2"
                  title="What is Two-Factor Authentication?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/2ZLnBx8Mm40?si=6JocGliH9vxLT21i"
                  title="How to Enable 2FA on Platforms"
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

export default TwoFactorAuthPage;
