import {
  httpGetJson,
  registerPlugin,
  ScullyConfig,
  setPluginConfig,
} from '@scullyio/scully';

import '@scullyio/scully-plugin-puppeteer';
/** this line goes into your scully.<app>.config.ts */
import 'prismjs/components/prism-java.js';
setPluginConfig('md', { enableSyntaxHighlighting: true });

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
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
  },
};
