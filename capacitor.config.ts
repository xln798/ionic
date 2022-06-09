/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2022-06-08 12:16:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-08 16:15:41
 */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ion',
  webDir: 'dist',
  bundledWebRuntime: false,
  "server": {
    "url": "http://10.100.124.100:3000/#/login",
    "cleartext": true
  }
};

export default config;
