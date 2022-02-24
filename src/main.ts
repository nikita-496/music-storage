import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const startApp = async () => {
  try {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch(e) {
    console.log(e);
  }
};
startApp();
