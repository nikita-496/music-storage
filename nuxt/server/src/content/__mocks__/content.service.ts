import { contentStub } from '../__tests__/stubs/content.stub';

export const ContentService = jest.fn();
ContentService.mockReturnValue({
  createContent: jest.fn().mockResolvedValue(contentStub()),
})