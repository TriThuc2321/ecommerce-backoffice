export interface IDefaultRequest {
  page: number;
  take: number;
  search?: string;
}

export interface IMeta {
  page: number;
  take: number;
  totalCount: number;
}

export interface IMessage {
  message: string;
  statusCode: number;
}

export interface IErrorCustom extends Error {
  code?: string;
}

export interface IMenuItem {
  id: number;
  title: string;
  route: string;
}

export enum LanguageCode {
  EN = 'en',
  VI = 'vi',
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}
