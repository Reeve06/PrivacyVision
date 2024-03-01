// Required modules
const express = require('express');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const SpotifyWebApi = require('spotify-web-api-node');

const router = express.Router();


// Spotify API credentials
const clientId = 'fa7bbc17345f40fb942c10728d8e9099';
const clientSecret = 'bcffa67579cc47388e9ef904a98fa7f9';
const spotifyApi = new SpotifyWebApi();

// Spotify authentication setup
passport.use(new SpotifyStrategy({
  clientID: clientId,
  clientSecret: clientSecret,
  callbackURL: 'http://localhost:3000/spotify/auth/callback'
}, (accessToken, refreshToken, expiresIn, profile, done) => {
  spotifyApi.setAccessToken(accessToken);
  done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Routes

// Authentication route
const spotifyAuthStrategy = passport.authenticate('spotify', {
  scope: [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-read-collaborative',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify',
    'user-read-email',
    'user-read-private',
  ],
  showDialog: true
});

// Proxy route for Spotify authentication
router.get('/auth', spotifyAuthStrategy);

// Callback route for Spotify authentication
router.get('/auth/callback', (req, res, next) => {
  passport.authenticate('spotify', {
    successRedirect: 'http://localhost:8100/social/spotify/playlists',
    failureRedirect: '/login' 
  })(req, res, next);
});
// Logout route
router.get('/logout', (req, res) => {
  req.logout(); 
  res.redirect('/'); 
});

// Delete playlist route
router.delete('/playlist/:id', async (req, res) => {
    try {
      const playlistId = req.params.id;
      const data = await spotifyApi.unfollowPlaylist(playlistId);
  
      res.json({ message: 'Playlist deleted successfully' });
    } catch (error) {
      console.error('Failed to delete playlist:', error);
      res.status(500).json({ error: 'Failed to delete playlist' });
    }
  });
  
// Get user playlists route
router.get('/playlists', (req, res) => {
    spotifyApi.getUserPlaylists()
      .then(data => {
        res.json(data.body.items);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch playlists' });
      });
  });

// Get user profile route
router.get('/user/profile', async (req, res) => {
  const data = await spotifyApi.getMe();
  res.json(data);
});

// Get user privacy settings route
router.get('/user/privacy', async (req, res) => {
  try {
    const userPrivacy = await spotifyApi.getUserPrivacySettings();
    res.json(userPrivacy.body);
  } catch (error) {
    console.error('Failed to fetch user privacy settings:', error);
    res.status(500).json({ error: 'Failed to fetch user privacy settings' });
  }
});

// Update playlist visibility route
router.put('/playlist/:id/visibility', async (req, res) => {
  try {
    const playlistId = req.params.id;
    const { isPublic } = req.body;

    const options = { public: isPublic };
    const data = await spotifyApi.changePlaylistDetails(playlistId, options);

    res.json(data.body);
  } catch (error) {
    console.error('Failed to update playlist visibility:', error);
    res.status(500).json({ error: 'Failed to update playlist visibility' });
  }
});

module.exports = router;
