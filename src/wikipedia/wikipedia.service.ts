import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WikipediaService {
  private readonly apiKey: string;

  constructor() {
    this.apiKey = process.env.WIKIPEDIA_API_KEY;
  }

  async search(query: string): Promise<any> {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${query}&srlimit=1&formatversion=2&origin=*`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Api-Key': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(
        `Error fetching data from Wikipedia API: ${error.message}`,
      );
    }
  }
}
