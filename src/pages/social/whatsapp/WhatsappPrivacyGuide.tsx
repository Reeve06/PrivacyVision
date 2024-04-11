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

const WhatsAppPrivacyGuide: React.FC = () => {
  const openWhatsAppPrivacySettings = () => {
    window.open("https://www.whatsapp.com/legal/privacy-policy", "_blank");
  };

  return (
    <IonPage>
      <IonHeader>
                <IonToolbar color="primary">

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>WhatsApp Privacy Guide</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonRow>
              <IonCol size="12">
                <IonButton color={"danger"} onClick={openWhatsAppPrivacySettings}>
                  Access WhatsApp Privacy Settings
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <SafetyPoint
          title="Last Seen and Online"
          description="Choose who can see your activity status on WhatsApp. You can control who can view when you were last seen online and your current online status."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Profile Photo"
          description="Control who can view your profile picture on WhatsApp. You can set your profile photo visibility to everyone, contacts only, or nobody."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="About Information"
          description="Decide who can see the 'About' section on your WhatsApp profile. You can set the visibility of your status message to everyone, contacts only, or nobody."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Status Updates"
          description="Choose who can view your status updates on WhatsApp. You can share status updates with all contacts, selected contacts, or exclude specific contacts."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Read Receipts"
          description="Enable or disable read receipts (blue ticks) for your messages on WhatsApp. When read receipts are disabled, other users won't be able to see if you've read their messages."
          theImage="https://via.placeholder.com/150"
        />

        <SafetyPoint
          title="Who Can Add You to Groups"
          description="Limit who can add you to WhatsApp groups. You can choose to allow everyone, contacts only, or nobody to add you to groups without your permission."
          theImage="https://via.placeholder.com/150"
        />
      </IonContent>
    </IonPage>
  );
};

export default WhatsAppPrivacyGuide;
