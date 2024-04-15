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
            theImage="https://www.vhv.rs/dpng/d/208-2087625_download-icon-xbox-svg-eps-png-psd-ai.png"
          />

          <SafetyPoint
            title="Privacy Controls"
            description="Manage who can see your gaming activity, profile, and online status. Control who can communicate with you and send you messages. Adjust sharing settings for game clips, screenshots, and achievements."
            theImage="https://compass-ssl.xboxlive.com/assets/6b/74/6b749982-7a77-4939-acb4-79da5117916b.png?n=pan-settings--privacy-safety-l.png"
          />

          <SafetyPoint
            title="Data Collection"
            description="Understand what data Xbox collects and how it's used. Review and manage your privacy settings to control data sharing with Microsoft and third-party developers."
            theImage="https://th.bing.com/th/id/R.4799923d6ea1a1efdc73bb7d1bd26e11?rik=xKK1dSR5HFhVqA&riu=http%3a%2f%2fwww.icons101.com%2ficon_png%2fsize_256%2fid_83962%2fXBox.png&ehk=IzHVA51RJkwu4pjTCZemUWQ%2fnqQmpvIFCP%2fQwlE%2blNQ%3d&risl=&pid=ImgRaw&r=0"
          />

          <SafetyPoint
            title="Family Settings"
            description="If you're a parent, use family settings to manage your child's Xbox account. Set restrictions on content, online interactions, and screen time. Monitor and approve purchases made by your child."
            theImage="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/09/Hero_image_video-thumbnail.png"
          />

          <SafetyPoint
            title="Security Measures"
            description="Protect your Xbox account with strong passwords and two-factor authentication. Be cautious of phishing attempts and never share your account credentials with anyone."
            theImage="https://xboxer.sk/wp-content/uploads/2018/03/Xbox-Security.jpg"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default XboxPrivacyGuide;
