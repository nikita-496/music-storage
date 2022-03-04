import { Content } from './../../../../server/src/content/schemas/content.shemas';

export const contentStub = (): Content => {
  return {
    title: '',
    text: '',
    picture: ''
  };
}
