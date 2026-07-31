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
  IonIcon
} from "@ionic/react";
import { openOutline, shieldCheckmarkOutline } from "ionicons/icons";
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

      <IonContent fullscreen className="ion-padding">
        <IonCard style={{ borderRadius: "12px", marginBottom: "20px" }}>
          <IonCardContent>
            <IonRow className="ion-align-items-center">
              <IonCol size="12" size-md="8">
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, margin: "0 0 4px 0" }}>
                  Official Facebook Privacy Resources
                </h3>
                <p style={{ margin: 0, color: "var(--ion-color-medium-shade)", fontSize: "0.95rem" }}>
                  Direct links to official Facebook security documentation and policy settings.
                </p>
              </IonCol>
              <IonCol size="12" size-md="4" className="ion-text-right">
                <IonButton color="primary" onClick={openFacebookHelpCenter} style={{ marginRight: "8px" }}>
                  <IonIcon icon={openOutline} slot="start" />
                  Help Center
                </IonButton>
                <IonButton color="primary" fill="outline" onClick={openFacebookDataPolicy}>
                  Data Policy
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <SafetyPoint
          title="Access Facebook Settings"
          description="Access your Facebook account settings to control various privacy options. These settings include who can see your posts, who can send you friend requests, and how Facebook uses your data."
          theImage="https://th.bing.com/th/id/OIP.1lZgAcOqQ55oYnsmkdtSFwHaHa?rs=1&pid=ImgDetMain"
        />

        <SafetyPoint
          title="Privacy Basics"
          description="Adjust settings for who can see your future posts, review your posts and things you're tagged in, limit the audience for your shared posts, manage friend requests, and control who can look you up using your email address or phone number."
          theImage="https://cdn-icons-png.flaticon.com/512/3973/3973952.png"
        />

        <SafetyPoint
          title="Timeline and Tagging"
          description="Manage settings for who can post on your timeline, who can tag you in posts, review posts you're tagged in before they appear on your timeline, and control who can see posts you've been tagged in."
          theImage="https://th.bing.com/th/id/OIP.xkLyNSpL6zRdeW6r8sGLBwHaHa?rs=1&pid=ImgDetMain"
        />

        <SafetyPoint
          title="Face Recognition & Biometrics"
          description="Choose whether Facebook can recognize you in photos and videos. This feature uses facial recognition technology to identify you in images uploaded to Facebook."
          theImage="https://th.bing.com/th/id/OIP.YX9M-1pAe_O3MWTr-L_hdAHaHa?rs=1&pid=ImgDetMain"
        />

        <SafetyPoint
          title="Blocking & Harassment Prevention"
          description="Manage settings for blocking users, app invites, and unwanted event invites. If you encounter unwanted interactions, block specific users to prevent further contact."
          theImage="https://static.thenounproject.com/png/1203371-200.png"
        />

        <SafetyPoint
          title="Location Tracking Permissions"
          description="Adjust settings for location services and location history. Facebook may collect location data from your device for check-ins and ads. You can control location permissions directly."
          theImage="https://th.bing.com/th/id/OIP.0QNsrqfl7QR_JBTb1GQ0EgHaHa?rs=1&pid=ImgDetMain"
        />

        <SafetyPoint
          title="Third-Party Apps and Websites"
          description="Review and manage settings for apps connected to your Facebook account. Many third-party apps allow Facebook login. Revoke permissions for inactive apps regularly."
          theImage="https://th.bing.com/th/id/R.ba42534570fe1c78724444c03a33f4e1?rik=tqhAnj0MMND8RQ&pid=ImgRaw&r=0"
        />

        <SafetyPoint
          title="Ad Preference Customization"
          description="Adjust settings for ad preferences and your information used for targeted ads. Control which profile attributes and online activities influence advertising algorithms."
          theImage="https://socioblend.com/blog/wp-content/uploads/2016/01/10-facebook-ads-you-should-be-running-right-now.jpg"
        />
      </IonContent>
    </IonPage>
  );
};

export default FacebookPrivacyGuide;
