import { Content } from '../../schemas/content.shemas';
import mongoose from 'mongoose';


export const contentStub = (): Content => {
  return {
    //_id: new mongoose.Types.ObjectId('507f191e810c19729de860ea'),
    title: 'Меню',
    text: 'Главное',
    //image: 'image/209ed059-532a-4396-8257-d450672b7b1f.jpeg'
    picture: ''
  };
};