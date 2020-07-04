export interface Environment {
  apiKey: string;
  production: boolean;
  fbDbUrl: string;
}

export interface MenuItem {
  name: string;
  route: string;
}

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
