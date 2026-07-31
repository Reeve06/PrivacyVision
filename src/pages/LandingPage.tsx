import React from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import {
  shieldCheckmarkOutline,
  lockClosedOutline,
  shareSocialOutline,
  gameControllerOutline,
  arrowForwardOutline,
  keyOutline,
  phonePortraitOutline,
  eyeOffOutline
} from 'ionicons/icons';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>PrivacyVision</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        {/* Hero Banner */}
        <div className="landing-hero">
          <img src="/logo.png" alt="PrivacyVision Logo" className="landing-logo" />
          <h1 style={{ fontWeight: 700, fontSize: '2rem', margin: '8px 0' }}>
            Empower Your Digital Privacy
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 20px', color: 'var(--ion-color-medium-shade)', fontSize: '1.05rem' }}>
            PrivacyVision helps you protect your online accounts, evaluate password strength, and configure security settings across major social media and gaming platforms.
          </p>
          <IonButton
            color="primary"
            shape="round"
            size="large"
            onClick={() => history.push('/security/password')}
          >
            <IonIcon icon={shieldCheckmarkOutline} slot="start" />
            Check Password Security
          </IonButton>
        </div>

        {/* Core Modules Grid */}
        <IonGrid style={{ padding: 0 }}>
          <IonRow>
            {/* Security Tools Card */}
            <IonCol size="12" size-md="6">
              <IonCard className="feature-card">
                <IonCardHeader>
                  <IonIcon icon={keyOutline} className="card-icon" />
                  <IonCardTitle>Password Security & Generator</IonCardTitle>
                  <IonCardSubtitle>Interactive Security Tools</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    Analyze password strength in real time and generate high-entropy cryptographic passwords to safeguard your online credentials.
                  </p>
                  <IonButton
                    fill="clear"
                    color="primary"
                    style={{ marginTop: '12px', paddingLeft: 0 }}
                    onClick={() => history.push('/security/password')}
                  >
                    Open Password Tools
                    <IonIcon icon={arrowForwardOutline} slot="end" />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Information Guides Card */}
            <IonCol size="12" size-md="6">
              <IonCard className="feature-card">
                <IonCardHeader>
                  <IonIcon icon={lockClosedOutline} className="card-icon" />
                  <IonCardTitle>Privacy & Security Guides</IonCardTitle>
                  <IonCardSubtitle>Best Practices & Awareness</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    Learn about VPN protection, two-factor authentication (2FA), device updates, avoiding suspicious links, and reputation management.
                  </p>
                  <IonButton
                    fill="clear"
                    color="primary"
                    style={{ marginTop: '12px', paddingLeft: 0 }}
                    onClick={() => history.push('/privacy')}
                  >
                    Explore Privacy Guides
                    <IonIcon icon={arrowForwardOutline} slot="end" />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Social Media Privacy Card */}
            <IonCol size="12" size-md="6">
              <IonCard className="feature-card">
                <IonCardHeader>
                  <IonIcon icon={shareSocialOutline} className="card-icon" />
                  <IonCardTitle>Social Media Privacy</IonCardTitle>
                  <IonCardSubtitle>Platform Configurations</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    Step-by-step guides and Spotify playlist privacy controls for Facebook, Instagram, TikTok, Snapchat, Discord, Twitter, and WhatsApp.
                  </p>
                  <IonButton
                    fill="clear"
                    color="primary"
                    style={{ marginTop: '12px', paddingLeft: 0 }}
                    onClick={() => history.push('/social/facebook')}
                  >
                    View Social Media Guides
                    <IonIcon icon={arrowForwardOutline} slot="end" />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Gaming Platforms Card */}
            <IonCol size="12" size-md="6">
              <IonCard className="feature-card">
                <IonCardHeader>
                  <IonIcon icon={gameControllerOutline} className="card-icon" />
                  <IonCardTitle>Gaming Privacy Guides</IonCardTitle>
                  <IonCardSubtitle>Console & PC Protection</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    Configure account privacy, communication limits, data collection, and parental controls for PlayStation, Xbox, and Steam.
                  </p>
                  <IonButton
                    fill="clear"
                    color="primary"
                    style={{ marginTop: '12px', paddingLeft: 0 }}
                    onClick={() => history.push('/gaming/playstation')}
                  >
                    View Gaming Guides
                    <IonIcon icon={arrowForwardOutline} slot="end" />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
