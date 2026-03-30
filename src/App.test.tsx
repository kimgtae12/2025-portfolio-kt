import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio mobile headline', () => {
  render(<App />);
  expect(screen.getByText(/실무 구조와 구현 디테일을 함께 챙기는 프론트엔드 개발자/i)).toBeInTheDocument();
});
