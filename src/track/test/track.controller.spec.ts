import { UpdateTrackDTO } from './../dto/update-track.dto';
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

  //WHEN TESTING getTrackById and (or) updateTrack, INCLUDE THE _id FIELD IN THE TRACK SCHEME
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

  /*describe('updateTrack', () => {
    describe('when updateTrack is called', () => {
      let track: Track;
      let updateTrackDto: UpdateTrackDTO;

      beforeEach(async () => {
        updateTrackDto = {
          name: 'Track1',
          artist: 'Artist1',
          listens: 5,
        };
        track = await trackController.updateTrack(trackStub()._id, updateTrackDto);
      });

      test('then it should call at least once', () => {
        expect(trackService.updateTrack).toHaveBeenCalled();
      });
      test('then it should call with parameters id and dto', () => {
       expect(trackService.updateTrack).toHaveBeenCalledWith(trackStub()._id, updateTrackDto);
      });
      test('then it should return a track', () => {
        expect(track).toEqual(trackStub());
      });
    });
  });*/
});
