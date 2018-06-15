interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
    silentCallbackURL: string;
    audience: string;
    apiUrl: string
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'wR3wNXSuEyugAkm1lQ27kyDVkMP3jzM6',
    domain: 'azuresec.auth0.com',
    callbackURL: 'http://localhost:2000/callback',
    silentCallbackURL: 'http://localhost:1001/silent',
    audience: 'https://usermgmtAPI.azuresec.com',
    apiUrl: 'http://localhost:6060'
  };