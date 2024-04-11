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
  IonToggle,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  checkmarkCircleOutline,
  closeCircleOutline,
  refreshOutline,
  eyeOutline,
  eyeOffOutline,
} from "ionicons/icons";

const PasswordStrengthPage: React.FC = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [generatedPasswordLength, setGeneratedPasswordLength] = useState(10);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkPasswordStrength = (input: string) => {
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
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let newPassword = "";
    for (let i = 0; i < generatedPasswordLength; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPassword(newPassword);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Password Strength Checker & Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonList>
                <IonItem>
                  <IonLabel>
                    <h2>Password Strength Checker</h2>
                    <IonInput
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onIonChange={(e) => {
                        setPassword(e.detail.value!);
                        checkPasswordStrength(e.detail.value!);
                      }}
                    ></IonInput>
                  </IonLabel>
                  <IonButton fill="clear" onClick={() => setShowPassword(!showPassword)}>
                    <IonIcon slot="icon-only" icon={showPassword ? eyeOffOutline : eyeOutline} />
                  </IonButton>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <p>
                      <strong>Password Strength:</strong> {strength}
                    </p>
                    <IonIcon
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
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCol>
            <IonCol>
              <IonList>
                <IonItem>
                  <IonLabel>
                    <h2>Generated Password</h2>
                    <IonInput
                      type="text"
                      placeholder="Generated Password"
                      value={generatedPassword}
                      readonly
                    ></IonInput>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Password Length</h2>
                    <IonInput
                      type="number"
                      placeholder="Password Length"
                      value={generatedPasswordLength}
                      onIonChange={(e) =>
                        setGeneratedPasswordLength(parseInt(e.detail.value!, 10))
                      }
                    ></IonInput>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonButton onClick={generatePassword} expand="block">
                    <IonIcon icon={refreshOutline} slot="start" />
                    Generate Password
                  </IonButton>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="ion-padding">
          <h2>Password Requirements:</h2>
          <ul>
            <li>At least 8 characters long</li>
            <li>Contains at least one uppercase letter</li>
            <li>Contains at least one lowercase letter</li>
            <li>Contains at least one digit</li>
            <li>Contains at least one special character</li>
          </ul>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PasswordStrengthPage;
