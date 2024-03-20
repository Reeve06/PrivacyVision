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

const DeviceUpdatesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>{" "}
          <IonTitle>Keep Devices Updated</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>
              <h2>
                <IonTitle> Backing Up Your Data</IonTitle>
              </h2>
              <p>
                <IonTitle>
                  <strong>Why It Matters:</strong>
                </IonTitle>
              </p>
              <ul>
                <li>
                  <IonTitle>
                  Data Loss Can Happen to Anyone:
                  Whether it’s due to hardware defects, ransomware attacks, accidental deletion, or even physical theft, data loss is a real risk.
                  Imagine losing precious family photos, critical work documents, or important records. Having a backup ensures you can recover your data swiftly.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  The Role of Data Backup:
                  A data backup is a duplicate or archive of the vital information stored on your devices (computer, phone, tablet).
                  It serves as a safety net, allowing you to restore your original data in case of loss.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Secure Archive of Important Information:
                        Business Documents: For businesses, data backups protect classified documents and critical information.
                        Personal Memories: For individuals, backups preserve treasured photos and memories.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Startling Statistics:
                  Shockingly, 45% of Indian users have never backed up their devices.
                  Consider this: 1 in every 2 Indians either loses or gets their phone stolen.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Ransomware Threats:
                    In India, more than 80% of business organisations experienced ransomware attacks in 2020.
                    Having a backup can be your lifeline if your data is held hostage by cybercriminals
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
                  Create Regular Backups:
                    Use external hard drives, cloud storage, or backup servers.
                    Set up automated backups to ensure consistency.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  Test Your Backups:
                    Periodically verify that your backups are working correctly.
                    Ensure you can restore data from them.
                  </IonTitle>
                </li>
                <li>
                  <IonTitle>
                  World Backup Day:
                    While World Backup Day is celebrated on March 31st, make data backup a year-round practice.
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
                src="https://www.youtube.com/embed/FIL6L7f32Bs?si=yW-wiU8Aq7dUqOZv"
                title="The Importance of Regularly Backing Up Your Digital Data"
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

export default DeviceUpdatesPage;
