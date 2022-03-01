import { contentStub } from './../test/stubs/content.stub';

export const ContentService = jest.fn();
ContentService.mockReturnValue({
  createContent: jest.fn().mockResolvedValue(contentStub()),
})