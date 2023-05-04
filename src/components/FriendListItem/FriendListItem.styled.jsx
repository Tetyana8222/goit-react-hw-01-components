import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8px;
  padding: 0;
  align-items: center;
  list-style: none;
  width: 300px;
  background-color: #e3e0dd;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
export const Status = styled.span`
  background-color: ${props => (props.isOnline ? `green` : `red`)};
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 15px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-left: 10px;
  font-weight: 400;
`;
