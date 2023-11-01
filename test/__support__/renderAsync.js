import { render } from '@testing-library/react';

export default async function renderAsync(asyncComponent) {
  const jsx = await asyncComponent.type(asyncComponent.props);
  render(jsx);
}
