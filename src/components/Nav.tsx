import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,.25);
    > ul {
      display: flex;
      > li {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4px 0;
          width: 33.333%;
          text-align: center;
          .icon{
              width: 24px;
              height: 24px;
          }
      }
    }
`;

function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="label"></Icon>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Icon name="money"></Icon>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Icon name="statistics"></Icon>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    );
}

export default Nav;