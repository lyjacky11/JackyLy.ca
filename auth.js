// Initialize Firebase
var config = {
  apiKey: "AIzaSyBYhCeWnxBnIZh4VHWKULQl1wg62fplD0c",
  authDomain: "login-auth-ed4eb.firebaseapp.com",
  databaseURL: "https://login-auth-ed4eb.firebaseio.com",
  projectId: "login-auth-ed4eb",
  storageBucket: "login-auth-ed4eb.appspot.com",
  messagingSenderId: "673661821383"
};
firebase.initializeApp(config);

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: '#',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '#',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('#');
  }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
