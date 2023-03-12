import * as dotenv from 'dotenv';

dotenv.config();

const configs = {
  GH_REPO_NAME: process.env.GH_REPO_NAME ?? '',
  GH_REPO_OWNER: process.env.GH_REPO_OWNER ?? '',
  GH_ACCESS_TOKEN: process.env.GH_ACCESS_TOKEN ?? '',
};

export default configs;
