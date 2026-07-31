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

const PrivacyPage: React.FC = () => {
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
      <IonContent fullscreen className="ion-padding">
        <IonList style={{ borderRadius: "12px" }}>
          <IonItem lines="none">
            <IonIcon icon={lockClosedOutline} slot="start" style={{ fontSize: "2rem", color: "var(--ion-color-primary)" }} />
            <IonLabel className="ion-text-wrap">
              <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "8px 0" }}>
                Use a VPN (Virtual Private Network)
              </h2>
              
              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "12px" }}>
                Why It Matters:
              </p>
              <ul>
                <li>
                  <strong>Secure Your Network: </strong>
                  A VPN effectively secures your network by encrypting your internet traffic.
                  Without a VPN, websites and applications can track your online activity, potentially leading to intrusive ads and privacy breaches.
                  With a VPN, your transmitted data remains secure and anonymous.
                </li>
                <li>
                  <strong>Hide Your Private Information: </strong>
                  Data throttling happens when you’ve consumed a specific amount of your available data, and your internet service provider (ISP) then decides to slow your service down.
                  With a VPN, you’ll benefit from avoiding data caps, especially when using data plans on smart devices while on the road.
                </li>
                <li>
                  <strong>Avoid Bandwidth Throttling: </strong>
                  Bandwidth throttling occurs when your internet speed is intentionally slowed down based on the websites you visit or your online activities.
                  A VPN encrypts your mobile traffic, preventing others from seeing the websites you’re visiting and avoiding throttling.
                </li>
              </ul>

              <p style={{ fontWeight: "bold", color: "var(--ion-color-dark)", marginTop: "16px" }}>
                Action Steps:
              </p>
              <ul>
                <li>Choose a reputable VPN service.</li>
                <li>Install the VPN app on your device.</li>
                <li>Enable the VPN whenever you’re connected to public Wi-Fi or browsing sensitive content.</li>
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
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/_wQTRMBAvzg?si=tawfR3uQuyb1GE9_"
                  title="What is a VPN and How Does it Work?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "8px", border: "none" }}
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/5oKxgUHpH8g?si=YVxPzjG0xXWIFp_X"
                  title="BEST VPN Comparison"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "8px", border: "none" }}
                ></iframe>
              </div>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PrivacyPage;
