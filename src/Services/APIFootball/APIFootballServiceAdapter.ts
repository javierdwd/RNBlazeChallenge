import type {APIFootballServicePort, Team} from './types';

const TeamsCollection: Team[] = require('./teams.json');

export const APIFootballServiceAdapter: APIFootballServicePort = {
  getTeams() {
    return new Promise(resolve => {
      setTimeout(async () => {
        resolve(TeamsCollection);
      }, 2000);
    });
  },
};

export default APIFootballServiceAdapter;
