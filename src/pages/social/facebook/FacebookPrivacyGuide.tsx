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
  IonCardTitle,
} from "@ionic/react";
import SafetyPoint from "../../../components/SafetyPoint";

const FacebookPrivacyGuide: React.FC = () => {
  const openFacebookHelpCenter = () => {
    window.open("https://www.facebook.com/help", "_blank");
  };

  const openFacebookDataPolicy = () => {
    window.open("https://www.facebook.com/help/193677450678703", "_blank");
  };

  return (
    <IonPage>
      <IonHeader>
                <IonToolbar color="primary">

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Facebook Privacy Guide</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonRow>
              <IonCol size="12">
                <IonButton color={"danger"} onClick={openFacebookHelpCenter}>
                  Visit Facebook Help Center
                </IonButton>
                <IonButton color={"danger"} onClick={openFacebookDataPolicy}>
                  Facebook Data Policy
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <SafetyPoint
          title="Access Facebook Settings"
          description="Access your Facebook account settings to control various privacy options. These settings include who can see your posts, who can send you friend requests, and how Facebook uses your data."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Privacy Basics"
          description="Adjust settings for who can see your future posts, review your posts and things you're tagged in, limit the audience for your shared posts, manage friend requests, and control who can look you up using your email address or phone number. These settings help you control your online privacy and who can interact with you on Facebook."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Timeline and Tagging"
          description="Manage settings for who can post on your timeline, who can tag you in posts, review posts you're tagged in before they appear on your timeline, and control who can see posts you've been tagged in. These settings help you manage your online presence and control what others can share about you on Facebook."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Face Recognition"
          description="Choose whether Facebook can recognize you in photos and videos. This feature uses facial recognition technology to identify you in images and videos uploaded to Facebook. You can choose to enable or disable this feature based on your privacy preferences."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Blocking"
          description="Manage settings for blocking users, app invites, event invites, and more. If you encounter unwanted interactions or content on Facebook, you can block specific users or prevent certain types of notifications. This helps you control your online experience and protect yourself from harassment or unwanted attention."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Location"
          description="Adjust settings for location services and location history. Facebook may collect location data from your device to provide location-based features, such as check-ins and location-based ads. You can control whether Facebook has access to your precise location and manage your location history through these settings."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Notifications"
          description="Customize settings for various notification types. Facebook sends notifications for various activities, such as friend requests, comments on your posts, and upcoming events. You can customize which notifications you receive and how you receive them to manage your notification preferences."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Mobile"
          description="Manage settings for Facebook on your mobile device. The Facebook mobile app may have additional settings and features compared to the desktop version. You can manage your account settings, notification preferences, and privacy settings directly from the Facebook mobile app."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Apps and Websites"
          description="Review and manage settings for apps connected to your Facebook account. Many third-party apps and websites allow you to sign in using your Facebook credentials or access your Facebook data. You can review and manage the permissions granted to these apps and websites to control how they access your information."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Ads"
          description="Adjust settings for ad preferences, ad settings, and your information used for ads. Facebook uses your activity and interests to show you targeted ads. You can manage your ad preferences, control which information is used for ads, and customize the types of ads you see on Facebook."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Facebook Privacy Policy"
          description="Review the Facebook Data Policy. The Facebook Data Policy outlines how Facebook collects, uses, and shares your information. By reviewing the data policy, you can understand how your data is handled on Facebook and make informed decisions about your privacy settings."
          theImage="https://via.placeholder.com/150"
        />
      </IonContent>
    </IonPage>
  );
};

export default FacebookPrivacyGuide;
