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

const PlaystationPrivacyGuide: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>PlayStation Privacy Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <SafetyPoint
            title="Account Privacy Settings"
            description="Access your PlayStation account settings to manage privacy preferences. Control who can see your profile, friends list, and online status. Adjust message and voice chat settings for privacy."
            theImage="https://th.bing.com/th/id/OIP.HS3Kt0-jTvR70pvxx1xgSQHaHa?rs=1&pid=ImgDetMain"
          />

          <SafetyPoint
            title="Data Sharing"
            description="Review and manage data sharing settings. Understand what data Sony collects and how it's used. Opt out of targeted advertising and data sharing with third-party partners."
            theImage="https://icon-library.com/images/playstation-icon-png/playstation-icon-png-16.jpg"
          />

          <SafetyPoint
            title="Parental Controls"
            description="For parents, use parental controls to restrict content, online interactions, and spending. Set up age restrictions for games and limit communication features."
            theImage="https://cdn-icons-png.flaticon.com/512/2040/2040714.png"
          />

          <SafetyPoint
            title="Security Measures"
            description="Secure your PlayStation account with a strong password and two-factor authentication. Be wary of phishing attempts and never share your account details with others."
            theImage="https://th.bing.com/th/id/OIP.0p_BOqym_F1DZ0PD4BiRzgHaHa?rs=1&pid=ImgDetMain"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlaystationPrivacyGuide;
