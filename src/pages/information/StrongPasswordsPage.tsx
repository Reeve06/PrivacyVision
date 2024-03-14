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
import {
  lockClosedOutline,
  shieldCheckmarkOutline,
  eyeOffOutline,
} from "ionicons/icons";
import Menu from "../../components/Menu";

const StrongPasswordsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>{" "}
          <IonTitle>Importance of Privacy on Online Social Media</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>
              <h2>
                <IonTitle>Strong Passwords</IonTitle>
              </h2>
              <p>
                <IonTitle>
                  <strong>Why It Matters:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                  Weak or reused passwords pose significant risks to your digital security. Here’s why strong passwords are crucial:
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Protection Against Hacking: Hackers often exploit predictable passwords. A strong password acts as a formidable barrier against unauthorised access.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Data and Account Security: Robust passwords safeguard your sensitive information,
                   including personal data, financial details, and communication.
                  </IonTitle>
                </li>
              </ul>
              <p>
                <IonTitle>
                  <strong>Actions for Creating Strong Passwords:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                  Mix Characters: Combine uppercase and lowercase letters, numbers, and special symbols (e.g., @, #, $).
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Avoid Predictability: Refrain from using easily guessable patterns like “123456” or “password.”
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Avoid Personal Information:                 
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Birthdays or Names: Never include personal details like birthdays, names, or family member names.
                  </IonTitle>
                </li>  
                 <li>
                  <IonTitle>
                  Common Words: Avoid dictionary words or phrases.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Password Manager Consideration:
                  </IonTitle>
                </li>

                <li>
                  <IonTitle>               
                  Use a Password Manager: Tools like LastPass, 1Password, 
                  or the built-in password manager in Google Chrome securely store and manage your passwords.
                  </IonTitle>
                </li>
              </ul>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={shieldCheckmarkOutline} slot="start" />
            <IonLabel>
              <h3>
                <IonTitle>YouTube Links:</IonTitle>
              </h3>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TvrFpAFitQ0?si=CybBMbWYDON0-XkO"
                title="Password Basics: How to Create a Strong Password"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3-vn3vcfi2M?si=tE4tIUkQ0lfuJON5"
                title="Password Manager Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default StrongPasswordsPage;
