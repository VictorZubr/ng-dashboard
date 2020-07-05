import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

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

export interface GroupingOption {
  id: number;
  key: string;
  name: string;
}

export interface UserData {
  id: number;
  date: string;
  country: string;
  city: string;
  transactions: number;
  amount: number;
}

export interface StatData {
  labels: Label[];
  barChartData: ChartDataSets[];
}
