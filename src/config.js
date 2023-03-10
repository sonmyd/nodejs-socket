import { config } from 'dotenv';
config();

export const PORT = process.env.PORT || 3001;

export const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/socketsdb';

export const URL_CLIENT = process.env.URL_CLIENT;
