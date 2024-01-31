import { Module } from '@nestjs/common';
import { WikipediaModule } from './wikipedia/wikipedia.module';

@Module({
  imports: [WikipediaModule],
})
export class AppModule {}
