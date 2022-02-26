import { trackStub } from '../test/stubs/track.stub';

export const TrackService = jest.fn();
TrackService.mockReturnValue({
  createTrack: jest.fn().mockResolvedValue(trackStub()),
  getTracks: jest.fn().mockResolvedValue([trackStub()]),
  getTrackById: jest.fn().mockResolvedValue(trackStub()),
  updateTrack: jest.fn().mockResolvedValue(trackStub()),
  deleteTrack: jest.fn().mockResolvedValue(trackStub()._id),
});
