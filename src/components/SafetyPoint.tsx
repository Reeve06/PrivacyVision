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

interface SafetyPointProps {
  title: string;
  description: string;
  theImage: string;
}

const SafetyPoint: React.FC<SafetyPointProps> = ({ title, description, theImage }) => {
  return (
    <IonCard style={{ margin: "16px", borderRadius: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
      <IonRow className="ion-align-items-center ion-padding-vertical">
        <IonCol size="12" size-sm="4" size-md="3" size-lg="2" className="ion-text-center">
          <div style={{ padding: "12px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IonImg
              src={theImage}
              alt={title}
              style={{
                maxWidth: "90px",
                maxHeight: "90px",
                objectFit: "contain",
                borderRadius: "8px"
              }}
            />
          </div>
        </IonCol>
        <IonCol size="12" size-sm="8" size-md="9" size-lg="10">
          <IonCardHeader style={{ paddingBottom: "4px" }}>
            <IonCardTitle style={{ fontSize: "1.2rem", fontWeight: 600 }}>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.5", color: "var(--ion-color-medium-shade)" }}>
              {description}
            </p>
          </IonCardContent>
        </IonCol>
      </IonRow>
    </IonCard>
  );
};

export default SafetyPoint;
