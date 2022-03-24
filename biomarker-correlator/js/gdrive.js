// Taken from https://developers.google.com/drive/api/v3/quickstart/js

// Client ID and API key from the Developer Console
// https://console.cloud.google.com/apis/credentials?project=biomarker-correlator
var CLIENT_ID = '1071930237240-elt3e48qnnn155muu6iiqmtecius43ep.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAqhZ6Ar766JmnIQcd8kmcaquUADFyk_KU';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// See possibilities at
// https://developers.google.com/identity/protocols/oauth2/scopes#drive.
var SCOPES = 'https://www.googleapis.com/auth/drive.readonly';


function require(url, callback) {
  var e = document.createElement("script");
  e.src = url;
  e.type="text/javascript";
  e.addEventListener('load', callback);
  document.getElementsByTagName("head")[0].appendChild(e);
}

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    require("/biomarker-correlator/biomarker-correlator/js/libs.js/main.js");
    require("/biomarker-correlator/biomarker-correlator/js/app.js", function() {
      // Load the app
      app.core.init_BANG_();

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      document.getElementById('authorize_button').onclick = handleAuthClick;
      document.getElementById('signout_button').onclick = handleSignoutClick;
    });

    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
  }, function(error) {
    console.log(error);
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    document.getElementById('authorize_button').style.display = 'none';
    document.getElementById('signout_button').style.display = 'block';
    // listFiles();
  } else {
    document.getElementById('authorize_button').style.display = 'block';
    document.getElementById('signout_button').style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}
