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
      <IonContent fullscreen>
        <IonList>
          <IonItem lines="none">
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>
            <IonTitle><h2>Use a VPN (Virtual Private Network)</h2></IonTitle>
              <p>
              <IonTitle><strong>Why It Matters:</strong></IonTitle>
              </p>
              <ul>
                <li>
                <IonTitle><strong>Secure Your Network</strong>
                A VPN effectively secures your network by encrypting your internet traffic.
                Without a VPN, websites and applications can track your online activity, potentially leading to intrusive ads and privacy breaches.
                With a VPN, your transmitted data remains secure and anonymous.</IonTitle>
                </li>
                <li>
                <IonTitle><strong>Hide Your Private Information:</strong>
                Data throttling happens when you’ve consumed a specific amount of your available data, and your internet service provider (ISP) then decides to slow your service down.
                With a VPN, you’ll benefit from avoiding data caps, especially when using data plans on smart devices while on the road.</IonTitle>
                </li>
                <li>
                <IonTitle> <strong>Avoid Bandwidth Throttling:</strong>
                Bandwidth throttling occurs when your internet speed is intentionally slowed down based on the websites you visit or your online activities.
                A VPN encrypts your mobile traffic, preventing others from seeing the websites you’re visiting and avoiding throttling.</IonTitle>
                </li>
              </ul>
              <p>
              <IonTitle><strong>Action:</strong></IonTitle>
              </p>
              <ul>
                <li>
                <IonTitle>
                Choose a reputable VPN service.</IonTitle>
                </li>
                <li>
                <IonTitle>Install the VPN app on your device.</IonTitle>
                </li>
                <li>
                <IonTitle> Enable the VPN whenever you’re connected to public Wi-Fi or browsing sensitive content.</IonTitle>
                </li>
              </ul>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon icon={shieldCheckmarkOutline} slot="start" />
            <IonLabel>
            <IonTitle> <h3>YouTube Links:</h3></IonTitle>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_wQTRMBAvzg?si=tawfR3uQuyb1GE9_"
                  title="What is a VPN and How Does it Work?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5oKxgUHpH8g?si=YVxPzjG0xXWIFp_X"
                  title="BEST VPN Comparison"
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

export default PrivacyPage;
