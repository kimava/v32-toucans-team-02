import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const Selector = ({ title, setTitle, list, disabled, callback }) => {
  const [toggle, setToggle] = useState(false);

  const handleBtnClick = (e) => {
    setToggle(false);
    setTitle(e.currentTarget.textContent);
    callback(e.currentTarget.textContent);
  };

  return (
    <StyledDiv>
      <StyledBtn
        disabled={disabled}
        onClick={() => {
          setToggle(!toggle);
        }}
        onBlur={() => {
          setToggle(false);
        }}
      >
        {title}
        <FiChevronDown className='icon' />
      </StyledBtn>
      <StyledUl
        toggle={toggle}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      >
        {list.map((item) => (
          <li key={item} onClick={handleBtnClick}>
            <ListBtn>{item}</ListBtn>
          </li>
        ))}
      </StyledUl>
    </StyledDiv>
  );
};

export default Selector;

const StyledDiv = styled.div`
  position: relative;
`;

const StyledBtn = styled.button`
  margin-bottom: 0;
  padding: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 6rem;
  height: 2rem;
  font-size: 0.8rem;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  background-color: #fff;

  &:focus {
    border: 3px solid #fff59d;
    border-radius: 4px;
  }

  .icon {
    margin: 0.3rem 0 0 0.7rem;
  }
`;

const StyledUl = styled.ul`
  position: absolute;
  top: 2.3rem;
  list-style: none;
  z-index: 10;

  ${({ toggle }) => {
    return toggle ? `display:block` : `display: none`;
  }}
`;

const ListBtn = styled(StyledBtn)`
  &:hover {
    background-color: #eeeeee;
  }
`;
