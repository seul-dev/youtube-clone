/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_YOUTUBE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
