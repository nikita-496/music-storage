import mongoose from 'mongoose';
import { Track } from '../../schemas/track.shemas';

export const trackStub = (): Track => {
  return {
    //s_id: new mongoose.Types.ObjectId('123'),
    name: 'Track1',
    artist: 'Artist1',
    listens: 0,
  };
};
