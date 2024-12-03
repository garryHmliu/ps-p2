import { registerPlugin } from '@capacitor/core';

export interface MySecondPlugin {
  logMessageee(options: { message: string }): Promise<{ message: string }>;
}

// 註冊插件
export const MySecond = registerPlugin<MySecondPlugin>('MySecond');
