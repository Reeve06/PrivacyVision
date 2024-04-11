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
import { settingsOutline } from "ionicons/icons";
import SafetyPoint from "../../components/SafetyPoint";

const XboxPrivacyGuide: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Xbox Privacy Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <SafetyPoint
            title="Access Xbox Settings"
            description="Navigate to Settings on your Xbox console or the Xbox website. Adjust settings for account privacy, online status, and data sharing."
            theImage="https://via.placeholder.com/150"
          />

          <SafetyPoint
            title="Privacy Controls"
            description="Manage who can see your gaming activity, profile, and online status. Control who can communicate with you and send you messages. Adjust sharing settings for game clips, screenshots, and achievements."
            theImage="https://via.placeholder.com/150"
          />

          <SafetyPoint
            title="Data Collection"
            description="Understand what data Xbox collects and how it's used. Review and manage your privacy settings to control data sharing with Microsoft and third-party developers."
            theImage="https://via.placeholder.com/150"
          />

          <SafetyPoint
            title="Family Settings"
            description="If you're a parent, use family settings to manage your child's Xbox account. Set restrictions on content, online interactions, and screen time. Monitor and approve purchases made by your child."
            theImage="https://via.placeholder.com/150"
          />

          <SafetyPoint
            title="Security Measures"
            description="Protect your Xbox account with strong passwords and two-factor authentication. Be cautious of phishing attempts and never share your account credentials with anyone."
            theImage="https://via.placeholder.com/150"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default XboxPrivacyGuide;
