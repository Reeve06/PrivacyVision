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
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonImg,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Page.css";
import { image } from "ionicons/icons";

const SafetyPoint: React.FC<{
  title: string;
  description: string;
  theImage: string;
}> = ({ title, description, theImage }) => {
  return (
    <>
      <IonCard>
        <IonCardContent>
          <IonRow>
            <IonCol size="1">
              <IonImg
                src={theImage}
                alt="Safety Point Image"
                style={{ width: "100px", height: "100px" }}
              />
            </IonCol>
            <IonCol>
              <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{description}</p>
              </IonCardContent>
            </IonCol>
          </IonRow>
        </IonCardContent>
      </IonCard>
    </>
  );
};

const SnapChat: React.FC = () => {
  const openSnapchatWebsite = () => {
    window.open("https://www.snapchat.com", "_blank");
  };

  const openSnapchatApp = () => {
    window.open("snapchat://privacy", "_system");
  };

  const openSafetyCenter = () => {
    window.open("https://values.snap.com/en-GB/safety/safety-center", "_blank");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
            <IonRow className="ion-align-items-center ion-text-center">
              <IonImg
                src={"https://1000logos.net/wp-content/uploads/2017/08/Snapchat-Logo-2013.png"}
                alt="Safety Point Image"
                style={{ width: "100px", height: "100px" }}
              />
              <IonTitle>SnapChat</IonTitle>
            </IonRow>
          </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="page-content-container">
          <IonRow className="ion-justify-content-center">
            <div>
              <IonButton color={"danger"} onClick={openSnapchatWebsite}>
                Visit Snapchat Website
              </IonButton>
              <IonButton color={"danger"} onClick={openSnapchatApp}>
                Open Snapchat App (Privacy Section)
              </IonButton>
              <IonButton color={"danger"} onClick={openSafetyCenter}>
                Snap Safety Center
              </IonButton>
            </div>
          </IonRow>

          <SafetyPoint
            title="Privacy Settings"
            description="Review and adjust your privacy settings on Snap to control who can view your content and interact with you. Consider setting your account to private, so only approved friends can see your snaps and stories. Disable the 'Quick Add' feature to prevent strangers from finding and adding you as a friend."
            theImage="https://images.ctfassets.net/kw9k15zxztrs/5KBrcOSxzutPs8zuko65xt/8f6525b2f47ed0595333fa586c13449a/Phone-shield.png"
          />

          <SafetyPoint
            title="Stranger Danger"
            description="Avoid adding or accepting friend requests from strangers. Only connect with people you know in real life."
            theImage="https://images.ctfassets.net/kw9k15zxztrs/5KBrcOSxzutPs8zuko65xt/8f6525b2f47ed0595333fa586c13449a/Phone-shield.png"
          />

          <SafetyPoint
            title="Be Mindful of Content"
            description="Think twice before sharing sensitive or personal content. Once shared, it can be challenging to control who sees it. Consider using the 'My Eyes Only' feature to protect private photos and videos with a passcode."
            theImage="https://images.ctfassets.net/kw9k15zxztrs/5KBrcOSxzutPs8zuko65xt/8f6525b2f47ed0595333fa586c13449a/Phone-shield.png"
          />

          <SafetyPoint
            title="Location Services"
            description="Turn off location services when not needed to prevent others from tracking your physical location through snaps."
            theImage="https://images.ctfassets.net/kw9k15zxztrs/5KBrcOSxzutPs8zuko65xt/8f6525b2f47ed0595333fa586c13449a/Phone-shield.png"
          />

          <SafetyPoint
            title="Report Suspicious Activity"
            description="If you encounter any suspicious or harmful behavior, report it to Snapchat and, if necessary, to law enforcement."
            theImage="https://images.ctfassets.net/kw9k15zxztrs/2nKmkPtRZFYUvyOLqjX8tC/37af320c365e2fe0f6918c63a4d7c0af/Phone-flag.png?fm=avif&q=40&h=400"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SnapChat;
