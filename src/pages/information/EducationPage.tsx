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
  schoolOutline,
  shieldCheckmarkOutline,
} from "ionicons/icons";

const EducationPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Educate Yourself & Family</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList style={{ borderRadius: "12px" }}>
          <IonItem lines="none">
            <IonIcon icon={schoolOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "8px 0" }}>
                Cybersecurity Literacy & Digital Safety
              </h2>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "12px" }}>
                Why It Matters:
              </p>
              <ul>
                <li>
                  <strong>Human Firewall: </strong>
                  Technical security tools are most effective when paired with cybersecurity awareness and critical thinking.
                </li>
                <li>
                  <strong>Protecting Vulnerable Family Members: </strong>
                  Kids and elderly relatives are target demographics for social engineering scams and identity theft.
                </li>
              </ul>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "16px" }}>
                Actionable Advice:
              </p>
              <ul>
                <li><strong>Open Family Discussions: </strong>Discuss online privacy, stranger danger, and account protection openly.</li>
                <li><strong>Set Social Media Boundaries: </strong>Help younger family members configure strict profile privacy settings.</li>
                <li><strong>Promote Critical Verification: </strong>Encourage family members to question unsolicited messages and urgency tactics.</li>
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
                  src="https://www.youtube.com/embed/dFg6G8eMRbM?si=HVpH1X84NhMk-z5L"
                  title="Cybersecurity Awareness Training"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/yiKeLOKc1tw?si=5Xq5iW8_Sq3Yx9A9"
                  title="Online Safety for Families"
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

export default EducationPage;
