import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.tuts',
  appName: 'tuts-ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
