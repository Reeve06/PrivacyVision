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

const InstagramPrivacyGuide: React.FC = () => {
  const openInstagramPrivacySettings = () => {
    window.open("https://help.instagram.com/196883487377501", "_blank");
  };

  return (
    <IonPage>
      <IonHeader>
                <IonToolbar color="primary">

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Instagram Privacy Guide</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonRow>
              <IonCol size="12">
                <IonButton color={"danger"} onClick={openInstagramPrivacySettings}>
                  Manage Your Instagram Privacy Settings
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <SafetyPoint
          title="Account Privacy"
          description="Set your Instagram account to private to control who can view your posts and stories. With a private account, only approved followers can see your content. You can also block specific users to prevent them from interacting with your account."
          theImage="https://static.wixstatic.com/media/8517ec_046ef4eb19854a729e393a3563eba753~mv2.jpg/v1/fill/w_504,h_470,al_c,lg_1,q_80/8517ec_046ef4eb19854a729e393a3563eba753~mv2.jpg"
        />

        <SafetyPoint
          title="Activity Status"
          description="Disable your activity status to prevent others from seeing when you were last active on Instagram. By turning off this feature, other users won't be able to see when you were last online or active on the platform."
          theImage="https://th.bing.com/th/id/OIP.yvKggJrJJ8o6y7aV5wwlbgAAAA?rs=1&pid=ImgDetMain"
        />

        <SafetyPoint
          title="Story Controls"
          description="Customise who can view your Instagram stories by adjusting your story controls. You can hide your stories from specific followers or create a close friends list to share stories with a select group of people. Managing your story controls gives you more control over your privacy on Instagram."
          theImage="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3433178/instagram-icon-md.png"
        />

        <SafetyPoint
          title="Tagging and Mentions"
          description="Control who can tag you in photos and mention you in comments by adjusting your tagging and mention settings. You can choose to manually approve tags and mentions before they appear on your profile, helping you manage your online presence and protect your privacy."
          theImage="https://cdn2.iconfinder.com/data/icons/instagram-outline/19/12-512.png"
        />
      </IonContent>
    </IonPage>
  );
};

export default InstagramPrivacyGuide;
