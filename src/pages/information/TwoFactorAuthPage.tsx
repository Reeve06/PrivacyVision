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

const TwoFactorAuthPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>{" "}
          <IonTitle>Two-Factor Authentication 2FA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>
              <h2>
                <IonTitle>Two-Factor Authentication 2FA</IonTitle>
              </h2>
              <p> <IonTitle> Two-Factor Authentication (2FA), 
                  also known as multi-factor authentication (MFA) or two-step verification, 
                  is a security mechanism that requires two separate forms of identification 
                  before granting access to an account or service. The goal is to enhance 
                  security beyond relying solely on a password.
                  </IonTitle>
              </p>
              <p>
                <IonTitle>
                  <strong>Why It Matters:</strong>                 
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                  2FA adds an extra layer of security by requiring a second verification step, like a code sent to your phone, after entering your password.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Enhanced Security: By combining two factors, 2FA provides a more robust defense against unauthorised access.
                   It ensures that even if someone obtains your password, they still need an additional piece of information to gain entry
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Mitigating Password Vulnerabilities: Traditional passwords can be compromised due to weak choices, 
                  reuse, or data breaches. 2FA mitigates these vulnerabilities by adding an extra layer of verification.
                  </IonTitle>
                </li>
              </ul>
              <p>
                <IonTitle>
                  <strong>Action:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                  <strong> Mobile Apps:</strong>                  
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Use your mobile device to generate unique codes (tokens).                   
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  These codes are sent via SMS and verified on websites or apps.
                  </IonTitle>
                </li>
              </ul>
              <p>
                <IonTitle>
                  <strong>Advantages:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                  No need for a separate hardware token generator.                 
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Passcode generators are efficient and secure.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Max passcode entry prevents hacking
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
                src="https://www.youtube.com/embed/AMOtB7XkTT4?si=2FqplY3ov6WQlmJ2"
                title="What is Two-Factor Authentication (2FA)?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2ZLnBx8Mm40?si=6JocGliH9vxLT21i"
                title="How to Enable 2FA on Different Platforms"
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

export default TwoFactorAuthPage;
