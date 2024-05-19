import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { instance } from 'logger/winston.logger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance: instance,
    }),
    cors: true,
  });
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.NODE_PORT || 8000);
}
bootstrap();
