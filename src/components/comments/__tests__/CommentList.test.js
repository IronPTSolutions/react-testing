import React from 'react'
import { render, cleanup, fireEvent, waitForElement, getByTestId } from '@testing-library/react'
import 'jest-dom/extend-expect'
import { jsxAttribute } from '@babel/types';

import CommentsService from '../../../services/CommentsService';
import CommentList from '../CommentList';

jest.mock('../../../services/CommentsService', () => ({
  list: jest.fn()
}))


it('should fetch comments from service properly', async () => {
  const comments = [
    {
      id: 'qwerty',
      name: 'user.test@example.org',
      message: 'test message',
      createdAt: new Date('2019-07-19')
    }
  ]
  CommentsService.list.mockImplementation(() => Promise.resolve(comments))
  const component = render(<CommentList />)
  
  await waitForElement(() => component.getByTestId('user'))
  expect(component.container.querySelectorAll('.card').length).toBe(1)
})