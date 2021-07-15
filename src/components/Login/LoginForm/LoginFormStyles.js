import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BtnRegister = styled(Link)`
  font-size: 12px;
  font-style: italic;
  cursor: pointer;

  &:hover { font-weight: bolder; }
`;