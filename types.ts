import Stripe from 'stripe';

export interface Song {
  id: string;
  author: string;
  title: string;
  song_path: string;
  image_path: string;
}