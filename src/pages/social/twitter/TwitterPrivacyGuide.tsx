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

const TwitterPrivacyGuide: React.FC = () => {
  const openTwitterPrivacySettings = () => {
    window.open("https://help.twitter.com/en/privacy", "_blank");
  };

  return (
    <IonPage>
      <IonHeader>
                <IonToolbar color="primary">

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Twitter Privacy Guide</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonRow>
              <IonCol size="12">
                <IonButton color={"danger"} onClick={openTwitterPrivacySettings}>
                  Manage Your Twitter Privacy Settings
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <SafetyPoint
          title="Ad Preferences"
          description="Customize your ad experience on Twitter by managing your ad preferences. You can control the types of ads you see, the information used to show you ads, and the advertisers who can target you with ads. Adjusting your ad preferences allows you to see more relevant and personalized ads while maintaining your privacy."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Direct Messages (DMs)"
          description="Filter out unwanted messages in your Twitter DMs by adjusting your message settings. You can control who can send you direct messages, receive message requests from non-followers, and filter message requests containing offensive content. Managing your DM settings helps you maintain a safe and positive messaging experience on Twitter."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Discoverability"
          description="Control how others find you on Twitter by managing your discoverability settings. You can adjust settings related to your account visibility in search results, suggestions, and recommendations. Managing your discoverability settings allows you to control who can find and follow you on Twitter, helping you maintain your privacy and security."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="My Followers"
          description="Decide who can see your posts and tag you in photos by managing your follower settings. You can adjust settings related to your account's privacy, including who can follow you, retweet your tweets, and tag you in photos. Managing your follower settings allows you to control your audience and protect your privacy on Twitter."
          theImage="https://via.placeholder.com/150"
        />
      </IonContent>
    </IonPage>
  );
};

export default TwitterPrivacyGuide;
