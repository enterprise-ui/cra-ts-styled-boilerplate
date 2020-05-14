import React from 'react';

import { render } from '@testing-library/react';

import { Layout } from './Layout';

test('Rendering with default values.', () => {
  const { container } = render(
    <Layout>
      <p>...</p>
    </Layout>,
  );
  expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
});

test('Rendering with reverse set.', () => {
  const { container } = render(
    <Layout reverse>
      <p>...</p>
    </Layout>,
  );
  expect(container.firstChild).toHaveStyleRule('flex-direction', 'column-reverse');
});

test('Rendering with row set.', () => {
  const { container } = render(
    <Layout row>
      <p>...</p>
    </Layout>,
  );
  expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
});

test('Rendering with row and reverse set.', () => {
  const { container } = render(
    <Layout row reverse>
      <p>...</p>
    </Layout>,
  );
  expect(container.firstChild).toHaveStyleRule('flex-direction', 'row-reverse');
});
