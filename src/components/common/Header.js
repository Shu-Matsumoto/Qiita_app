import {css} from '@emotion/react';
import { Box, Title } from '../atoms';
import { NavLink } from 'react-router-dom';
import * as NaviIcon from '../../assets/icon/navi';

const Header = () => {

  const ROUTES = [
  {path: '/', icon: {inActive: NaviIcon.HomeIcon, active: NaviIcon.HomeIconActive}},
  {
    path: 'column',
    icon: {inActive: NaviIcon.ColumnIcon, active: NaviIcon.ColumnIconActive},
  },
  ];

  return (
    <header css={header}>
      <Box css={container}>
        <Title css={logo} size="md">
          Qiita App
        </Title>
				{/* 追加 */}
        <Box css={navi}>
          {ROUTES.map((route, index) => (
            <NavLink to={route.path} key={index}>
              {({isActive}) => (
                <Box css={[naviItem, isActive && border]} col>
                  <img
                    src={isActive ? route.icon.active : route.icon.inActive}
                    css={naviIcon}
                    alt=""
                  />
                </Box>
              )}
            </NavLink>
          ))}
        </Box>
      </Box>
    </header>
  );
};

export default Header;

const header = css`
  width: 100vw;
  background-color: #55c500;
  position: fixed;
  left: 0;
  z-index: 9999;
`;

const container = css`
  align-items: flex-end;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0;
`;

const logo = css`
  color: #fff;
`;

const navi = css`
  column-gap: 40px;
  flex: 1;
  justify-content: center;
`;

const naviItem = css`
  justify-content: center;
  width: 40px;
`;

const naviIcon = css`
  margin-bottom: 4px;
`;

const border = css`
  :after {
    background-color: #fff;
    border-radius: 1.5px;
    content: '';
    display: block;
    height: 3px;
    width: 100%;
  }
`;