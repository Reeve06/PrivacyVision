import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  logoFacebook,
  logoTwitter,
  logoSnapchat,
  logoInstagram,
  logoDiscord,
  logoWhatsapp,
  logoPlaystation,
  logoXbox,
  logoSteam,
  logoTiktok,
  lockClosed,
  lockClosedOutline,
  key,
  phonePortrait,
  pulse,
  school,
  thumbsUp,
  warning,
  musicalNote,
  homeOutline,
  shieldCheckmarkOutline
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const mainPages: AppPage[] = [
  {
    title: 'Home Dashboard',
    url: '/',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Password Strength & Generator',
    url: '/security/password',
    iosIcon: shieldCheckmarkOutline,
    mdIcon: shieldCheckmarkOutline
  }
];

const infoPages: AppPage[] = [
  {
    title: 'Privacy',
    url: '/privacy',
    iosIcon: lockClosed,
    mdIcon: lockClosed
  },
  {
    title: 'Reputation Management',
    url: '/reputation-management',
    iosIcon: thumbsUp,
    mdIcon: thumbsUp
  },
  {
    title: 'Counteract Crowding and Fatigue',
    url: '/crowding-fatigue',
    iosIcon: pulse,
    mdIcon: pulse
  },
  {
    title: 'Strong Passwords',
    url: '/strong-passwords',
    iosIcon: key,
    mdIcon: key
  },
  {
    title: 'Two-Factor Authentication (2FA)',
    url: '/two-factor-authentication',
    iosIcon: lockClosedOutline,
    mdIcon: lockClosedOutline
  },
  {
    title: 'Avoid Suspicious Links',
    url: '/suspicious-links',
    iosIcon: warning,
    mdIcon: warning
  },
  {
    title: 'Keep Devices Updated',
    url: '/device-updates',
    iosIcon: phonePortrait,
    mdIcon: phonePortrait
  },
  {
    title: 'Educate Yourself and Family',
    url: '/education',
    iosIcon: school,
    mdIcon: school
  }
];

const socialPages: AppPage[] = [
  {
    title: 'Spotify',
    url: '/social/spotify/login',
    iosIcon: musicalNote,
    mdIcon: musicalNote
  },
  {
    title: 'Facebook',
    url: '/social/facebook',
    iosIcon: logoFacebook,
    mdIcon: logoFacebook
  },
  {
    title: 'TikTok',
    url: '/social/tiktok',
    iosIcon: logoTiktok,
    mdIcon: logoTiktok
  },
  {
    title: 'Twitter',
    url: '/social/twitter',
    iosIcon: logoTwitter,
    mdIcon: logoTwitter
  },
  {
    title: 'Snapchat',
    url: '/social/snapchat',
    iosIcon: logoSnapchat,
    mdIcon: logoSnapchat
  },
  {
    title: 'Instagram',
    url: '/social/instagram',
    iosIcon: logoInstagram,
    mdIcon: logoInstagram
  },
  {
    title: 'Discord',
    url: '/social/discord',
    iosIcon: logoDiscord,
    mdIcon: logoDiscord
  },
  {
    title: 'WhatsApp',
    url: '/social/whatsapp',
    iosIcon: logoWhatsapp,
    mdIcon: logoWhatsapp
  }
];

const gamingPages: AppPage[] = [
  {
    title: 'PlayStation',
    url: '/gaming/playstation',
    iosIcon: logoPlaystation,
    mdIcon: logoPlaystation
  },
  {
    title: 'Xbox',
    url: '/gaming/xbox',
    iosIcon: logoXbox,
    mdIcon: logoXbox
  },
  {
    title: 'Steam',
    url: '/gaming/steam',
    iosIcon: logoSteam,
    mdIcon: logoSteam
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="main-list">
          <IonListHeader>Navigation</IonListHeader>
          {mainPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>

        <IonList id="info-list">
          <IonListHeader>Information Guides</IonListHeader>
          {infoPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>

        <IonList id="social-list">
          <IonListHeader>Social Media Guides</IonListHeader>
          {socialPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>

        <IonList id="gaming-list">
          <IonListHeader>Gaming Guides</IonListHeader>
          {gamingPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
