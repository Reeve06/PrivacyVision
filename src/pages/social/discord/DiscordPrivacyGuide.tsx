import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonRow,
  IonCol,
} from "@ionic/react";
import SafetyPoint from "../../../components/SafetyPoint";

const DiscordPrivacyGuide: React.FC = () => {
  const openDiscordSafetyPage = () => {
    window.open("https://support.discord.com/hc/en-us/categories/115000168351-Trust-Safety", "_blank");
  };

  const openDiscordPrivacyPolicy = () => {
    window.open("https://discord.com/privacy", "_blank");
  };

  return (
    <IonPage>
      <IonHeader>
                <IonToolbar color="primary">

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Discord Privacy Guide</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonRow>
              <IonCol size="12">
                <IonButton color={"danger"} onClick={openDiscordSafetyPage}>
                  Discord Safety Page
                </IonButton>
                <IonButton color={"danger"} onClick={openDiscordPrivacyPolicy}>
                  Discord Privacy Policy
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <SafetyPoint
          title="Server Privacy"
          description="Adjust settings for sensitive media, direct message (DM) spam filtering, and server privacy. You can control who can view sensitive media in servers, filter out unwanted DMs, and manage server privacy settings to protect your online conversations and content."
          theImage="https://th.bing.com/th/id/OIP.TPZWGwKCY7fyCdaFF69f2AAAAA?w=256&h=256&rs=1&pid=ImgDetMain"
        />

        <SafetyPoint
          title="Blocking Users"
          description="Block users who engage in harassing or unwanted behavior. If you encounter users who send harassing messages or engage in inappropriate behavior, you can block them to prevent further contact. Discord provides tools to block users and manage your blocked list."
          theImage="https://th.bing.com/th/id/OIP.ps1kQRpesvqqy7_mwsVXegAAAA?rs=1&pid=ImgDetMain"
        />

        <SafetyPoint
          title="Privacy Settings"
          description="Manage privacy settings for your account, including who can send you friend requests, view your online status, and send you direct messages. You can adjust these settings to control who can interact with you on Discord and protect your online privacy."
          theImage="https://cdn-icons-png.flaticon.com/512/9807/9807129.png"
        />

        <SafetyPoint
          title="Two-Factor Authentication (2FA)"
          description="Enable two-factor authentication (2FA) to add an extra layer of security to your Discord account. With 2FA enabled, you'll need to provide a verification code in addition to your password when logging in. This helps prevent unauthorized access to your account."
          theImage="https://thumbs.dreamstime.com/b/fa-icon-two-factor-verification-secure-password-login-vector-outline-mobile-phone-computer-screen-authentication-code-279852957.jpg"
        />

        <SafetyPoint
          title="Privacy Mode"
          description="Activate privacy mode to hide sensitive information from non-friends. When privacy mode is enabled, non-friends will not be able to see details such as your mutual servers, game activity, and online status. This helps protect your privacy from strangers on Discord."
          theImage="https://icon-library.com/images/discord-transparent-server-icon/discord-transparent-server-icon-23.jpg"
        />

        <SafetyPoint
          title="Parental Controls"
          description="Parents can set up parental controls to manage their child's Discord account and ensure a safe online experience. With parental controls, you can restrict access to certain features, control who can send friend requests, and monitor your child's activity on Discord."
          theImage="https://th.bing.com/th/id/OIP.iY1wiRp0-7JHpFxSWgP5SwHaHa?rs=1&pid=ImgDetMain"
        />
      </IonContent>
    </IonPage>
  );
};

export default DiscordPrivacyGuide;
