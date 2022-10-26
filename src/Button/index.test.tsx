import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index'
describe('Button', () => {
  test('renders Button', ()=> {
    render(<Button>click me</Button>)
    const linkElement = screen.getByText(/click me/i)
    expect(linkElement).toBeInTheDocument()
  })
  
  test('redner primary Button', () => {
    const { container } = render(<Button type="primary">click me</Button>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument()
  })

  test('should support click', ()=> {
    // 创建一个click事件
    const onClick = jest.fn()
    render(<Button onClick={onClick}>click me</Button>)
    // 获取dom元素
    const linkElement = screen.getByText(/click me/i)
    // fireEvent 触发一次click事件
    fireEvent.click(linkElement)
    // 执行一次
    expect(onClick).toBeCalled()
  })

  test('should support onBlur', () => {
    const onBlur = jest.fn()
    const onClick = jest.fn()
    render(<Button onBlur={onBlur} onClick={onClick}>click me2 </Button>)
    const linkElement = screen.getByText(/click me/i)
    fireEvent.click(linkElement)
    fireEvent.blur(linkElement)
    fireEvent.click(linkElement)
    expect(onClick).toBeCalledTimes(2)
    expect(onBlur).toBeCalledTimes(1)

  })
})
