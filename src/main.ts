import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilterTsFilter } from './filters/http-exception.filter.ts/http-exception.filter.ts.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilterTsFilter())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
