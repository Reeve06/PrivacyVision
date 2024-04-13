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
            theImage="https://th.bing.com/th/id/OIP.jW5ww8BecSRhTFivZVJuJAHaE8?rs=1&pid=ImgDetMain"
          />

          <SafetyPoint
            title="Game Library Visibility"
            description="Manage the visibility of your game library. Choose whether to make your game details visible to the public, friends only, or private."
            theImage="https://th.bing.com/th/id/OIP.GaXdBRm-MqEuMoJxLqOdagHaD6?rs=1&pid=ImgDetMain"
          />

          <SafetyPoint
            title="Community Content"
            description="Be cautious when sharing or accessing community content such as user-generated guides, artwork, and discussions. Report inappropriate content and avoid clicking on suspicious links."
            theImage="https://icon-library.com/images/steam-logo-icon/steam-logo-icon-26.jpg"
          />

          <SafetyPoint
            title="Account Security"
            description="Protect your Steam account with a strong password and enable two-factor authentication (2FA) for an extra layer of security. Be wary of phishing attempts and never share your account credentials."
            theImage="https://www.vhv.rs/file/max/22/224600_steam-logo-png.png"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SteamPrivacyGuide;
