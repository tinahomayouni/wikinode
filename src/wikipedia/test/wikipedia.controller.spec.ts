import { Test, TestingModule } from '@nestjs/testing';
import { WikipediaService } from '../wikipedia.service';
import { WikipediaController } from '../wikipedia.controller';

describe('WikipediaController', () => {
  let wikipediaController: WikipediaController;
  let wikipediaService: WikipediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WikipediaController],
      providers: [WikipediaService],
    }).compile();

    wikipediaController = module.get<WikipediaController>(WikipediaController);
    wikipediaService = module.get<WikipediaService>(WikipediaService);
  });

  describe('search', () => {
    it('should return search results from WikipediaService', async () => {
      const query = 'NestJS';
      const mockSearchResult = {
        query: {
          searchinfo: {
            totalhits: 1,
          },
          search: [
            {
              title: 'NestJS',
              snippet:
                'NestJS is a framework for building efficient, scalable Node.js server-side applications.',
            },
          ],
        },
      };

      jest
        .spyOn(wikipediaService, 'search')
        .mockImplementation(async () => mockSearchResult);

      const result = await wikipediaController.search(query);

      expect(result).toBe(mockSearchResult);
      expect(wikipediaService.search).toHaveBeenCalledWith(query);
    });
  });
});
