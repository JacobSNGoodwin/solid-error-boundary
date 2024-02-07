// @refresh reload
import {
  createAsync,
  RouteDefinition,
  cache,
} from '@solidjs/router';
import { ErrorBoundary } from 'solid-js/web';

const getData = cache(async () => {
  const shouldThrow = true;

  const data = 'Bill';

  if (shouldThrow) {
    throw new Error('ya failed');
  }
  return data;
}, 'some-data');

export const route = {
  load: async () => {
    getData();
  },
} satisfies RouteDefinition;

const Home = () => {
  const data = createAsync(getData);

  return (
    <ErrorBoundary fallback={<div>Ya failed</div>}>
      <h1>Ya name: {data()}</h1>
    </ErrorBoundary>
  );
};

export default Home;
