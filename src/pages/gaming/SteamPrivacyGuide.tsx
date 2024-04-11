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

const SteamPrivacyGuide: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Steam Privacy Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <SafetyPoint
            title="Profile Privacy Settings"
            description="Adjust your profile privacy settings to control who can see your profile, game details, and friends list. Decide whether to make your profile public, private, or visible to friends only."
            theImage="https://via.placeholder.com/150"
          />

          <SafetyPoint
            title="Game Library Visibility"
            description="Manage the visibility of your game library. Choose whether to make your game details visible to the public, friends only, or private."
            theImage="https://via.placeholder.com/150"
          />

          <SafetyPoint
            title="Community Content"
            description="Be cautious when sharing or accessing community content such as user-generated guides, artwork, and discussions. Report inappropriate content and avoid clicking on suspicious links."
            theImage="https://via.placeholder.com/150"
          />

          <SafetyPoint
            title="Account Security"
            description="Protect your Steam account with a strong password and enable two-factor authentication (2FA) for an extra layer of security. Be wary of phishing attempts and never share your account credentials."
            theImage="https://via.placeholder.com/150"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SteamPrivacyGuide;
