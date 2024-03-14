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

const SuspiciousLinksPage: React.FC = () => {
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
                <IonTitle>Avoid Suspicious Links</IonTitle>
              </h2>
              <p>
                <IonTitle>
                  <strong>Why It Matters:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                  Phishing Attempts: Malicious links often lead to fake websites that impersonate legitimate services 
                  (like banks or email providers). These sites trick you into revealing sensitive information, 
                  such as passwords or credit card details.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Malware Infections: Clicking a harmful link can download malware onto your device.
                   Malware can steal your data, damage files, or even take control of your system.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Website Redirects: Some links redirect you to fraudulent websites or pop-ups. 
                  These sites may prompt you to install malicious software or enter personal information.
                  </IonTitle>
                </li>
              </ul>
              <p>
                <IonTitle>
                  <strong>Protective Actions:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                  View before clicking: When you receive an email or message with a link, hover your cursor over it. 
                  The actual URL will appear (usually at the bottom left of your screen). Verify that it matches the expected domain.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Avoid shortened links: Be cautious with shortened URLs (like bit.ly).
                   They hide the true destination. If you’re unsure, don’t click.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Verify Unsolicited Links: Even if a link seems to come 
                  from a familiar source (like a friend or colleague), exercise caution.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Contact the sender: Before clicking, verify with the sender that they intentionally shared the link. 
                  Cybercriminals can compromise accounts and send malicious messages.
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
                src="https://www.youtube.com/embed/o0btqyGWIQw?si=Fy2VpN7ysSiNcytz"
                title="How to Spot Phishing Emails"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aO858HyFbKI?si=rouB586lhiUTLy2d"
                title="Staying Safe Online: Avoiding Phishing Scams"
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

export default SuspiciousLinksPage;
