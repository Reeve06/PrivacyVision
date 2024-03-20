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

const EducationPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>{" "}
          <IonTitle>Educate Yourself and Family</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>
              <h2>
                <IonTitle>Educate Yourself and Family</IonTitle>
              </h2>
              <p>
                <IonTitle>
                  <strong>Why It Matters:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                  Empowerment through Knowledge:
                   Understanding online risks empowers you to make informed decisions.
                   Awareness helps you recognise and avoid potential dangers.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Protecting:
                    By educating your family, you create a safer digital environment for everyone.
                    Children and teenagers benefit from learning responsible online behavior.
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
                  <strong> Stay Informed:</strong>
                    Current Threats: Regularly educate yourself about online threats and scams.
                    Security Updates: Keep software, apps, and devices up to date to address vulnerabilities.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  <strong>Family Conversations:</strong>
                    Talk to Your Family: Engage in open discussions about online safety.
                    Age-Appropriate Guidance: Tailor advice to different family members’ needs.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  <strong> Encourage Responsible Behavior: </strong>
                    Children and Teens: Teach them about privacy settings, safe browsing, and avoiding sharing personal information.
                    Critical Thinking: Help them question suspicious requests or links.
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
                src="https://www.youtube.com/embed/dFg6G8eMRbM?si=HVpH1X84NhMk-z5L"
                title="Cybersecurity Awareness Training for Everyone"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/yiKeLOKc1tw?si=5Xq5iW8_Sq3Yx9A9"
                title="Talking to Kids About Online Safety"
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

export default EducationPage;
