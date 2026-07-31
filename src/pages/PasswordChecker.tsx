import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonToast,
} from "@ionic/react";
import {
  checkmarkCircleOutline,
  closeCircleOutline,
  refreshOutline,
  eyeOutline,
  eyeOffOutline,
  copyOutline,
  shieldCheckmarkOutline,
} from "ionicons/icons";

const PasswordStrengthPage: React.FC = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [generatedPasswordLength, setGeneratedPasswordLength] = useState(12);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const checkPasswordStrength = (input: string) => {
    if (!input) {
      setStrength("");
      return;
    }
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    const mediumRegex = new RegExp(
      "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})"
    );

    if (strongRegex.test(input)) {
      setStrength("Strong");
    } else if (mediumRegex.test(input)) {
      setStrength("Medium");
    } else {
      setStrength("Weak");
    }
  };

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let newPassword = "";
    for (let i = 0; i < generatedPasswordLength; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPassword(newPassword);
    setToastMessage("Password generated!");
    setShowToast(true);
  };

  const copyToClipboard = (text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setToastMessage("Copied to clipboard!");
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Password Security & Generator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonGrid>
          <IonRow>
            {/* Password Checker */}
            <IonCol size="12" size-lg="6">
              <IonCard style={{ borderRadius: "12px" }}>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon icon={shieldCheckmarkOutline} slot="start" style={{ marginRight: "8px" }} />
                    Password Strength Checker
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList lines="full">
                    <IonItem>
                      <IonLabel position="stacked">Test Your Password</IonLabel>
                      <IonInput
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password to evaluate"
                        value={password}
                        onIonInput={(e) => {
                          const val = e.detail.value || "";
                          setPassword(val);
                          checkPasswordStrength(val);
                        }}
                      />
                      <IonButton slot="end" fill="clear" onClick={() => setShowPassword(!showPassword)}>
                        <IonIcon slot="icon-only" icon={showPassword ? eyeOffOutline : eyeOutline} />
                      </IonButton>
                    </IonItem>

                    {strength && (
                      <IonItem>
                        <IonIcon
                          slot="start"
                          icon={
                            strength === "Strong"
                              ? checkmarkCircleOutline
                              : strength === "Medium"
                              ? refreshOutline
                              : closeCircleOutline
                          }
                          color={
                            strength === "Strong"
                              ? "success"
                              : strength === "Medium"
                              ? "warning"
                              : "danger"
                          }
                        />
                        <IonLabel>
                          <h2><strong>Strength Rating:</strong> {strength}</h2>
                        </IonLabel>
                      </IonItem>
                    )}
                  </IonList>

                  <div style={{ marginTop: "16px" }}>
                    <h3>Recommended Requirements:</h3>
                    <ul>
                      <li>At least 8-12 characters long</li>
                      <li>Includes uppercase & lowercase letters</li>
                      <li>Includes numerical digits (0-9)</li>
                      <li>Includes special characters (!@#$%^&*)</li>
                    </ul>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Password Generator */}
            <IonCol size="12" size-lg="6">
              <IonCard style={{ borderRadius: "12px" }}>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon icon={refreshOutline} slot="start" style={{ marginRight: "8px" }} />
                    Secure Password Generator
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList lines="full">
                    <IonItem>
                      <IonLabel position="stacked">Password Length ({generatedPasswordLength})</IonLabel>
                      <IonInput
                        type="number"
                        min="6"
                        max="32"
                        value={generatedPasswordLength}
                        onIonInput={(e) => {
                          const val = parseInt(e.detail.value || "12", 10);
                          setGeneratedPasswordLength(isNaN(val) ? 12 : val);
                        }}
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel position="stacked">Generated Password</IonLabel>
                      <IonInput
                        type="text"
                        value={generatedPassword}
                        readonly
                        placeholder="Click generate to create"
                      />
                      {generatedPassword && (
                        <IonButton slot="end" fill="clear" onClick={() => copyToClipboard(generatedPassword)}>
                          <IonIcon slot="icon-only" icon={copyOutline} />
                        </IonButton>
                      )}
                    </IonItem>
                  </IonList>

                  <IonButton
                    expand="block"
                    color="primary"
                    style={{ marginTop: "16px" }}
                    onClick={generatePassword}
                  >
                    <IonIcon icon={refreshOutline} slot="start" />
                    Generate Strong Password
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonToast
          isOpen={showToast}
          message={toastMessage}
          duration={2000}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default PasswordStrengthPage;
