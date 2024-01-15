import {useQuery, UseQueryOptions} from 'react-query';
import {APIFootballServiceAdapter} from '../APIFootballServiceAdapter';

import type {TeamCollection} from '../types';

export const QUERY_KEY = 'API_FOOTBALL_GET_TEAMS';

export function getTeams(): Promise<TeamCollection> {
  return APIFootballServiceAdapter.getTeams();
}

export function useGetTeams(options?: UseQueryOptions<TeamCollection>) {
  return useQuery<TeamCollection>({
    queryKey: [QUERY_KEY],
    queryFn: getTeams,
    ...options,
  });
}
