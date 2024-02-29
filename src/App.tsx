import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SnapChat from './pages/social/SnapChat';
import PrivacyPage from './pages/information/PrivacyPage';
import ReputationManagementPage from './pages/information/ReputationManagementPage';
import CounteractCrowdingPage from './pages/information/CounteractCrowdingPage';
import StrongPasswordsPage from './pages/information/StrongPasswordsPage';
import TwoFactorAuthPage from './pages/information/TwoFactorAuthPage';
import DeviceUpdatesPage from './pages/information/DeviceUpdatesPage';
import EducationPage from './pages/information/EducationPage';
import SuspiciousLinksPage from './pages/information/SuspiciousLinksPage';
import LoginSpotify from './pages/social/LoginSpotify';
import PlaylistsPage from './pages/social/PlaylistsSpotify';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {<Menu /> }
          <IonRouterOutlet id="main">
  <Route path="/" exact={true}>
    <Redirect to="/privacy" />
  </Route>

  {/* Info Pages */}
  <Route path="/privacy" exact={true}>
    <PrivacyPage />
  </Route>


  <Route path="/reputation-management" exact={true}>
    <ReputationManagementPage />
  </Route>
  <Route path="/crowding-fatigue" exact={true}>
    <CounteractCrowdingPage />
  </Route>
  <Route path="/strong-passwords" exact={true}>
    <StrongPasswordsPage />
  </Route>
  <Route path="/two-factor-authentication" exact={true}>
    <TwoFactorAuthPage />
  </Route>
  <Route path="/suspicious-links" exact={true}>
    <SuspiciousLinksPage />
  </Route>
  <Route path="/device-updates" exact={true}>
    <DeviceUpdatesPage />
  </Route>
  <Route path="/education" exact={true}>
    <EducationPage />
  </Route>

  <Route path="/social/spotify/login" exact={true}>
    <LoginSpotify />
  </Route>

  <Route path="/social/spotify/playlists" exact={true}>
    <PlaylistsPage accessToken={''} />
  </Route>

  {/* Social Pages
  <Route path="/social/facebook" exact={true}>
    <FacebookPage />
  </Route>
  <Route path="/social/tiktok" exact={true}>
    <TikTokPage />
  </Route>
  <Route path="/social/twitter" exact={true}>
    <TwitterPage />
  </Route>
  <Route path="/social/snapchat" exact={true}>
    <SnapchatPage />
  </Route>
  <Route path="/social/instagram" exact={true}>
    <InstagramPage />
  </Route>
  <Route path="/social/discord" exact={true}>
    <DiscordPage />
  </Route>
  <Route path="/social/whatsapp" exact={true}>
    <WhatsAppPage />
  </Route>

  {/* Gaming Pages */}
  {/* <Route path="/gaming/playStation" exact={true}>
    <PlayStationPage />
  </Route>
  <Route path="/gaming/xbox" exact={true}>
    <XboxPage />
  </Route>
  <Route path="/gaming/steam" exact={true}>
    <SteamPage />
  </Route>  */}
</IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;