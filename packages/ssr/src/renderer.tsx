import { ChunkExtractor } from '@loadable/server';
import { IStore } from 'cra-ts-styled-boilerplate-core';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';

export default (App: JSX.Element, store: IStore, staticProps?: any) => {
  const statsFile = path.resolve('./public/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile });
  const jsx = extractor.collectChunks(App);

  const content = renderToString(jsx);

  const helmet = Helmet.renderStatic();

  const scriptTags = extractor.getScriptTags();

  return `<!DOCTYPE html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
                      /</g,
                      '\\u003c',
                    )}
                    window.__SSR_DATA__ = ${JSON.stringify(staticProps)}
                </script>
                ${scriptTags}
            </body>
    </html>`;
};
