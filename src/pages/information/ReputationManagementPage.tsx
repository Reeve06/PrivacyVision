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
import Menu from "../../components/Menu";
const ReputationManagementPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Reputation Mangement</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem lines="none">
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>
            <IonTitle><h2>Reputation Management</h2></IonTitle>
              <p>
              <IonTitle> <strong>Why It Matters:</strong></IonTitle>
              </p>
              <ul>
                <li>
                <IonTitle>	Potential employers: Social media profiles
                   are often screened by potential employers, 
                  and inappropriate content can hurt your chances.</IonTitle>
                </li>
                <li>
                <IonTitle>Relationships: Posts can create misunderstandings or offend others, damaging relationships.</IonTitle>
                </li>
                <li>
                <IonTitle>Personal brand: Social media is an extension of your personal brand, and consistent, positive content reflects well on you.</IonTitle>
                </li>
              </ul>
              <p>
              <IonTitle><strong>Action:</strong></IonTitle>
              </p>
              <ul>
                <li>
                <IonTitle> Be mindful of your posts: Consider the potential impact of your content before sharing.</IonTitle>
                </li>
                <li>
                <IonTitle> Review past posts: Regularly review and delete old posts that might not reflect your current self or goals.</IonTitle>
                </li>
                <li>
                <IonTitle>Maintain privacy for sensitive content: Share personal experiences with close friends and family using private groups or messages.</IonTitle>
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
                  src="https://www.youtube.com/embed/D7A-yYztCig?si=Iwl3xUgC1IZefP7a"
                  title="The Dark Side of Social Media - Impact on Our Livesn"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
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
