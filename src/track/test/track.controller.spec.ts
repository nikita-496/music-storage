import { Track } from '../schemas/track.shemas';
import { trackStub } from './stubs/track.stub';
import { TrackService } from './../track.service';
import { TrackController } from './../track.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateTrackDTO } from '../dto/create-track.dto';

jest.mock('../track.service');

describe('TrackController', () => {
  let trackController: TrackController;
  let trackService: TrackService;

  beforeEach(async () => {
    const modulerRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [TrackController],
      providers: [TrackService],
    }).compile();

    trackController = modulerRef.get<TrackController>(TrackController);
    trackService = modulerRef.get<TrackService>(TrackService);
    jest.clearAllMocks();
  });

  describe('createTrack', () => {
    describe('when createTrack is called', () => {
      let track: Track;
      let createTrackDTO: CreateTrackDTO;

      beforeEach(async () => {
        createTrackDTO = {
          name: trackStub().name,
          artist: trackStub().artist,
        };
        track = await trackController.createTrack(createTrackDTO);
      });

      test('then it should call at least once', () => {
        expect(trackService.createTrack).toHaveBeenCalled();
      });
      test('then it should return a track', () => {
        expect(track).toEqual(trackStub());
      });
    });
  });

  describe('getTracks', () => {
    describe('when createTracks is called', () => {
      let tracks: Track[];

      beforeEach(async () => {
        tracks = await trackController.getTracks();
      });
      test('then it should call at least once', () => {
        expect(trackService.getTracks).toHaveBeenCalled();
      });
      test('then it should return tracks', () => {
        expect(tracks).toEqual([trackStub()]);
      });
    });
  });

  //when testing, include the _id field in the track scheme
  
  /*describe('getTrack', () => {
    describe('when createTrack is called', () => {
      let track: Track;

      beforeEach(async () => {
        track = await trackController.getTrackById(trackStub()._id);
      });
      test('then it should call at least once', () => {
        expect(trackService.getTrackById).toHaveBeenCalled();
      });
      test('then it should call with id', () => {
        expect(trackService.getTrackById).toBeCalledWith(trackStub()._id);
      });
      test('then it should return tracks', () => {
        expect(track).toEqual(trackStub());
      });
    });
  });*/

});
