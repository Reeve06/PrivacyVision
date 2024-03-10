import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { logoFacebook, logoTwitter, logoSnapchat, logoInstagram, logoDiscord, logoWhatsapp, logoPlaystation, logoXbox, logoSteam, logoTiktok, lockClosed, lockClosedOutline, key, phonePortrait, pulse, school, thumbsUp, warning, musicalNote} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

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
    url: '/gaming/playStation',
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

      <IonList id="inbox-list">
          <IonListHeader>Information</IonListHeader>
          {infoPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      <IonList id="inbox-list">
          <IonListHeader>Socials Medias</IonListHeader>
          {socialPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="inbox-list">
          <IonListHeader>Gaming</IonListHeader>
          {gamingPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
