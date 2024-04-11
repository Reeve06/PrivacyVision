

import React from "react";
import {
  IonCard,
  IonCardContent,
  IonRow,
  IonCol,
  IonImg,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

const SafetyPoint: React.FC<{
  title: string;
  description: string;
  theImage: string;
}> = ({ title, description, theImage }) => {
  return (
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
  );
};

export default SafetyPoint;
