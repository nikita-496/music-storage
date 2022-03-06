import { Content } from '../schemas/content.shemas';
import { ContentController } from '../content.controller';
import { ContentService } from '../content.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateContentDTO } from '../dto/create-content.dto';
import { contentStub } from '../../../../client/components/__tests__/stubs/content.stub';

jest.mock('../content.service')

describe('ContentController', () => {
  let contentController: ContentController;
  let contentService: ContentService;

  beforeEach(async () => {
    const modulerRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [ContentController],
      providers: [ContentService],
    }).compile();

    contentController = modulerRef.get<ContentController>(ContentController);
    contentService = modulerRef.get<ContentService>(ContentService);
    jest.clearAllMocks();
  });

  describe('createContent', () => {
    describe('when createContent is called', () => {
      let content: Content
      let createContentDTO: CreateContentDTO
      const picture = contentStub().picture
      
       beforeEach(async () => {
        createContentDTO = {
          title: contentStub().title,
          text: contentStub().text,
        }
        content = await contentController.createContent(picture, createContentDTO)
       })
       test('then it should call at least once', () => {
        expect(contentService.createContent).toHaveBeenCalled();
      });
      test('then it should return a content', () => {
        expect(content).toEqual(contentStub());
      });
    });
  });
})
