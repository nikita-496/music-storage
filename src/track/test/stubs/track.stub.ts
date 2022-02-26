import mongoose from 'mongoose';
import { Track } from '../../schemas/track.shemas';

export const trackStub = (): Track => {
  return {
    //_id: new mongoose.Types.ObjectId('507f191e810c19729de860ea'),
    name: 'Track1',
    artist: 'Artist1',
    listens: 0,
  };
};
