import axios from 'axios';
import { SearchResult } from '../types/github'; // Corrigido o caminho do arquivo

const API_URL = 'https://api.github.com/search/repositories';

export const searchRepositories = async (query: string): Promise<SearchResult> => {
  const response = await axios.get<SearchResult>(API_URL, {
    params: {
      q: query,
      sort: 'stars',
      order: 'desc',
    },
  });

  return response.data; // Corrigido para retornar a resposta correta
};