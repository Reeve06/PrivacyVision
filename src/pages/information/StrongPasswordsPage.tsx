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
  keyOutline,
  shieldCheckmarkOutline,
} from "ionicons/icons";
import PasswordStrengthPage from "../PasswordChecker";

const StrongPasswordsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Strong Passwords Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList style={{ borderRadius: "12px", marginBottom: "24px" }}>
          <IonItem lines="none">
            <IonIcon icon={keyOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "8px 0" }}>
                Creating & Managing High-Security Passwords
              </h2>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "12px" }}>
                Why It Matters:
              </p>
              <ul>
                <li>
                  <strong>Hacking Prevention: </strong>
                  Automated dictionary attacks breach simple passwords in seconds. High complexity delays brute force attempts indefinitely.
                </li>
                <li>
                  <strong>Credential Reuse Risks: </strong>
                  Reusing a single password across sites exposes all your accounts if any single service suffers a data breach.
                </li>
              </ul>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "16px" }}>
                Key Guidelines:
              </p>
              <ul>
                <li><strong>Mix Characters: </strong>Combine uppercase/lowercase letters, numbers, and special symbols (`!@#$%^&*`).</li>
                <li><strong>Avoid Personal Context: </strong>Never include birth dates, names, or dictionary words.</li>
                <li><strong>Use a Password Manager: </strong>Store complex passphrases in encrypted vaults (e.g. Bitwarden, 1Password).</li>
              </ul>
            </IonLabel>
          </IonItem>

          <IonItem lines="none" style={{ marginTop: "16px" }}>
            <IonIcon icon={shieldCheckmarkOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "16px" }}>
                Educational Video Guides:
              </h3>
              <div className="video-container" style={{ marginBottom: "16px" }}>
                <iframe
                  src="https://www.youtube.com/embed/TvrFpAFitQ0?si=CybBMbWYDON0-XkO"
                  title="How to Create a Strong Password"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/3-vn3vcfi2M?si=tE4tIUkQ0lfuJON5"
                  title="Password Managers Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </IonLabel>
          </IonItem>
        </IonList>

        {/* Embedded Interactive Password Tools */}
        <PasswordStrengthPage />
      </IonContent>
    </IonPage>
  );
};

export default StrongPasswordsPage;
