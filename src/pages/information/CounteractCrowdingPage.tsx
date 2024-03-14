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
const CounteractCrowdingPage: React.FC = () => {
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
            <IonTitle> <h2>Counteract Crowding and Fatigue</h2></IonTitle>
              <p><IonTitle>
                <strong>Why It Matters:</strong></IonTitle>
              </p>
              <ul>
                <li>
                <IonTitle><strong>Information Overload:</strong>
                  Challenge: Constant exposure to content can lead to information overload and overwhelm.
                  Solution: Curate your feeds by unfollowing accounts that contribute to this overload or negativity.</IonTitle>
                </li>
                <li>
                <IonTitle><strong>Personalised Advertising:</strong>
                  Challenge: Social media platforms leverage your data for targeted advertising, which can feel intrusive.
                  Solution: Utilise privacy settings to manage the type of targeted ads you see. Take control of your online experience.
                </IonTitle>
                </li>
                <li>
                <IonTitle><strong>Echo Chambers:</strong>
                  Challenge: Algorithms expose you mainly to content that reinforces your existing beliefs, limiting your perspective.
                  Solution: Break free from echo chambers by diversifying your online experience.</IonTitle>
                </li>
              </ul>
              <p>
              <IonTitle><strong>Action:</strong></IonTitle>
              </p>
              <ul>
                <li>
                <IonTitle><strong>Curate Your Feeds:</strong>
                Unfollow Accounts: Identify accounts that contribute to information overload or negativity. Unfollow them to reduce clutter and maintain a more balanced feed. </IonTitle>
                </li>
                <li>
                <IonTitle> Targeted Ads: Adjust privacy settings on social media platforms to manage the type of ads you encounter.</IonTitle>
                </li>
                <li>
                <IonTitle>Offline Activities: Take breaks from social media. Engage in offline activities to recharge and gain fresh perspectives.
                Explore Different Platforms: Venture beyond your usual platforms. Explore different online spaces to broaden your understanding and avoid echo chambers.</IonTitle>
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
                  src="https://www.youtube.com/embed/sJdZ7kmA2QQ?si=T0eiL0srHQSQ6yZE"
                  title="Digital Minimalism Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/jzhKgcmbjCA?si=mfVe5NyjdbwOj6yA"
                  title="How to Escape the Social Media Echo Chamber"
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
