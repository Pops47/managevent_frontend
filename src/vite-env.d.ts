/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCAL_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
