import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import SearchBar from '../SeachBar';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  let onSearch;
  beforeEach(() => {
    onSearch = jest.fn();
  });

  it('calls onSearch when enter is pressed', () => {
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('원하는 책을 검색하세요');

    userEvent.type(input, '반지의 제왕{enter}');

    expect(onSearch).toHaveBeenCalledWith('반지의 제왕');
  });
});
