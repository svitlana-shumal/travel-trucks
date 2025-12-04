import { ApiFilters } from '@/types/filters';
import { nextServer } from './api';

export const getCampers = async (filters: ApiFilters) => {
  const { data } = await nextServer.get('/campers', {
    params: filters,
  });

  return data;
};

export const getCampersById = async (id: string) => {
  const { data } = await nextServer.get(`/campers/${id}`);
  return data;
};
