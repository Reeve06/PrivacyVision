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
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonImg,
  IonRow,
  IonCol,
} from "@ionic/react";
import SafetyPoint from "../../../components/SafetyPoint";

const TikTokPrivacyGuide: React.FC = () => {
  const openTikTokPrivacyCenter = () => {
    window.open("https://www.tiktok.com/legal/page/eea/privacy-policy/en", "_blank");
  };

  return (
    <IonPage>
      <IonHeader>
                <IonToolbar color="primary">

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>TikTok Privacy Guide</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonRow>
              <IonCol size="12">
                <IonButton color={"danger"} onClick={openTikTokPrivacyCenter}>
                  TikTok Privacy Center
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <SafetyPoint
          title="Privacy Settings"
          description="Access TikTok Privacy Tools to customize who can see your posts, select your audience, and manage privacy preferences. TikTok offers various privacy settings that allow you to control who can view your content and interact with you on the platform. You can adjust these settings to protect your privacy and feel comfortable sharing on TikTok."
          theImage="https://static.vecteezy.com/system/resources/previews/002/204/530/large_2x/privacy-settings-line-icon-vector.jpg"
        />

        <SafetyPoint
          title="Account Privacy"
          description="Review and adjust your account privacy settings to control who can view your profile information, videos, and liked content. You can choose to make your account public, private, or visible to friends only. Adjusting your account privacy settings can help you manage your online presence and protect your personal information on TikTok."
          theImage="https://th.bing.com/th/id/OIP.ImMz6dFqyD4wBlAWMXyXzwHaHa?rs=1&pid=ImgDetMain"
        />

        <SafetyPoint
          title="Video Privacy"
          description="Manage the privacy settings for your videos to control who can view and interact with your content. You can set individual videos to public, private, or visible to friends only. Adjusting video privacy settings allows you to share content with specific audiences and control who can comment, like, or duet your videos on TikTok."
          theImage="https://icon-library.com/images/privacy-icon-png/privacy-icon-png-13.jpg"
        />

        <SafetyPoint
          title="Comments and Interactions"
          description="Control who can comment on your videos and send you direct messages on TikTok. You can adjust comment settings to filter out spam or offensive comments and restrict interactions from specific users. Managing comments and interactions helps you maintain a positive and safe environment on TikTok."
          theImage="https://uploads.dailydot.com/2021/05/tiktok-text-to-speech.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.0&w=2048&wpsize=2048x2048"
        />

        <SafetyPoint
          title="Data Privacy"
          description="Review TikTok's data privacy policies to understand how your information is collected, used, and shared on the platform. TikTok collects various types of data, including user-generated content, device information, and location data. Understanding TikTok's data privacy policies can help you make informed decisions about your privacy settings and data sharing on the platform."
          theImage="https://image.freepik.com/free-icon/data-privacy_318-32777.jpg"
        />
      </IonContent>
    </IonPage>
  );
};

export default TikTokPrivacyGuide;
