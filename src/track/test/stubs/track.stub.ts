import { Track } from '../../schemas/track.shemas';

export const trackStub = (): Track => {
  return {
    name: 'Track1',
    artist: 'Artist1',
    listens: 0,
  };
};
