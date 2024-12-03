import { registerPlugin } from '@capacitor/core';

export interface MyFirstPlugin {
  logMessage(options: { message: string }): Promise<{ message: string }>;
}

// 註冊插件
export const MyFirst = registerPlugin<MyFirstPlugin>('MyFirst');
