import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import PrivacyPage from "./pages/information/PrivacyPage";
import ReputationManagementPage from "./pages/information/ReputationManagementPage";
import CounteractCrowdingPage from "./pages/information/CounteractCrowdingPage";
import StrongPasswordsPage from "./pages/information/StrongPasswordsPage";
import TwoFactorAuthPage from "./pages/information/TwoFactorAuthPage";
import DeviceUpdatesPage from "./pages/information/DeviceUpdatesPage";
import EducationPage from "./pages/information/EducationPage";
import SuspiciousLinksPage from "./pages/information/SuspiciousLinksPage";
import LoginSpotify from "./pages/social/spotify/LoginSpotify";
import PlaylistsPage from "./pages/social/spotify/PlaylistsSpotify";
import PasswordStrengthPage from "./pages/PasswordChecker";
import LandingPage from "./pages/LandingPage";
import FacebookPrivacyGuide from "./pages/social/facebook/FacebookPrivacyGuide";
import SnapChat from "./pages/social/snapchat/SnapChat";
import DiscordPrivacyGuide from "./pages/social/discord/DiscordPrivacyGuide";
import TikTokPrivacyGuide from "./pages/social/tiktok/TiktokPrivacyGuide";
import TwitterPrivacyGuide from "./pages/social/twitter/TwitterPrivacyGuide";
import InstagramPrivacyGuide from "./pages/social/instagram/InstagramPrivacyGuide";
import WhatsAppPrivacyGuide from "./pages/social/whatsapp/WhatsappPrivacyGuide";
import XboxPrivacyGuide from "./pages/gaming/XboxPrivacyGuide";
import PlaystationPrivacyGuide from "./pages/gaming/PlaystationPrivacyGuide";
import SteamPrivacyGuide from "./pages/gaming/SteamPrivacyGuide";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {<Menu />}
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <LandingPage />
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
              <PlaylistsPage accessToken={""} />
            </Route>

            <Route path="/security/password" exact={true}>
              <PasswordStrengthPage />
            </Route>

            <Route path="/social/facebook" exact={true}>
              <FacebookPrivacyGuide />
            </Route>

            <Route path="/social/snapchat" exact={true}>
              <SnapChat />
            </Route>

            <Route path="/social/discord" exact={true}>
              <DiscordPrivacyGuide />
            </Route>

            <Route path="/social/tiktok" exact={true}>
              <TikTokPrivacyGuide />
            </Route>

            <Route path="/social/twitter" exact={true}>
              <TwitterPrivacyGuide />
            </Route>

            <Route path="/social/instagram" exact={true}>
              <InstagramPrivacyGuide />
            </Route>

            <Route path="/social/whatsapp" exact={true}>
              <WhatsAppPrivacyGuide />
            </Route>

            <Route path="/gaming/xbox" exact={true}>
              <XboxPrivacyGuide />
            </Route>

            <Route path="/gaming/playstation" exact={true}>
              <PlaystationPrivacyGuide />
            </Route>

            <Route path="/gaming/steam" exact={true}>
              <SteamPrivacyGuide />
            </Route>
            
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
