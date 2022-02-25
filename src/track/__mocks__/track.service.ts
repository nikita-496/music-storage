import { trackStub } from '../test/stubs/track.stub';

export const TrackService = jest.fn();
TrackService.mockReturnValue({
  getTrack: jest.fn().mockResolvedValue('GET ALL TRACKS'),
  createTrack: jest.fn().mockResolvedValue(trackStub()),
});
