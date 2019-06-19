import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'
import CommentItem from '../CommentItem';

afterEach(cleanup)

it('should show props at dom properly', () => {
  const component = render(<CommentItem user="john.doe@example.org" createdAt={new Date('2019-07-19')} message={"test message"}/>)
  expect(component.getByTestId('user')).toHaveTextContent('john.doe@example.org')
  expect(component.getByTestId('created-at')).toHaveTextContent('Fri Jul 19 2019')
  expect(component.getByTestId('message')).toHaveTextContent('test message')
})


it('should call onDeleteClick prop properly on click in delete comment button', () => {
  const clickSpy = jest.fn()
  const component = render(<CommentItem user="john.doe@example.org" createdAt={new Date('2019-07-19')} message={"test message"} onClickDelete={clickSpy}/>)
  fireEvent.click(component.getByTestId('delete-btn'))
  expect(clickSpy).toHaveBeenCalledTimes(1)
})

it('should render as snapshot', () => {
  const clickSpy = jest.fn()
  const component = render(<CommentItem user="john.doe@example.org" createdAt={new Date('2019-07-19')} message={"test message"} onClickDelete={clickSpy} />)
  expect(component.asFragment()).toMatchSnapshot()
})