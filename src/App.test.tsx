import React from 'react';
import { render } from '@testing-library/react';

// Simple test to verify the test environment works
test('test environment is working', () => {
  const testElement = <div>Test</div>;
  const { container } = render(testElement);
  expect(container).toBeInTheDocument();
});
