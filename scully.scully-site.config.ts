import { httpGetJson, registerPlugin, ScullyConfig } from '@scullyio/scully';

import '@scullyio/scully-plugin-puppeteer';

function githubProjectsPlugin() {
  return httpGetJson('https://api.github.com/users/nelsongutidev/repos', {
    headers: { 'User-Agent': 'request' },
  }).then((repos: any) => {
    return repos.map((repo: any) => ({ route: `/project/${repo.name}` }));
  });
}

registerPlugin('router', 'githubProjectsPlugin', githubProjectsPlugin);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-site',
  distFolder: './dist/scully-site', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/project/:name': {
      type: 'githubProjectsPlugin',
    },
  },
};
