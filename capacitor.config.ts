import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.psp2.practice',
  appName: 'ps-p2-mobile',
  webDir: 'dist/apps/garry-p1',
  ios: {
    path: 'apps/ios'
  },
  android: {
    path: 'apps/android'
  },
};

export default config;
