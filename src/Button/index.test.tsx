import React from "react";
import { render, screen } from '@testing-library/react';
import Button from './index'
test('renders Button', ()=> {
  render(<Button>click me</Button>)
  const linkElement = screen.getByText(/click me/i)
  expect(linkElement).toBeInTheDocument()
})

test('redner primary Button', () => {
  render(<Button type="primary">click me</Button>)
  const linkElement = screen.getByText(/click me/i)
  expect(linkElement).toBeInTheDocument()
})