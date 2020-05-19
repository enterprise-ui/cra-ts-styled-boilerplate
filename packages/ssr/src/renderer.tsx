import { ChunkExtractor } from '@loadable/server';
import { IStaticProps, IStore } from 'cra-ts-styled-boilerplate-core';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';

export default (
  App: JSX.Element,
  store: IStore,
  publicPath: string,
  staticProps?: IStaticProps,
) => {
  const statsFile = path.resolve(path.join(publicPath, 'loadable-stats.json'));
  let extractor = null;

  try {
    extractor = new ChunkExtractor({ statsFile });
  } catch (err) {
    console.log(err);
  }

  const sheet = new ServerStyleSheet();

  const Appx = extractor?.collectChunks(App) || App;

  try {
    const content = renderToString(sheet.collectStyles(Appx));

    const styleTags = sheet.getStyleTags();

    const helmet = Helmet.renderStatic();

    const scriptTags = extractor?.getScriptTags() || '';

    return `<!DOCTYPE html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                ${styleTags}
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
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }
};
