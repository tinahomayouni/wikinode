import { Controller, Get, Param } from '@nestjs/common';
import { WikipediaService } from './wikipedia.service';

@Controller('wikipedia')
export class WikipediaController {
  constructor(private readonly wikipediaService: WikipediaService) {}

  @Get('search/:param') //http://localhost:3000/wikipedia/search/NestJS to visit and check
  async search(@Param('param') param: string): Promise<any> {
    return this.wikipediaService.search(param);
  }
}
