// Manual declarations to replace missing vite/client types and fix the "Cannot find type definition file" error
declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

interface ImportMetaEnv {
  [key: string]: any;
}

interface ImportMeta {
  url: string;
  readonly env: ImportMetaEnv;
}