import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('../assets/icons/money.svg');
require('../assets/icons/label.svg');
require('../assets/icons/statistics.svg');

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
                    <svg className="icon">
                        <use xlinkHref="#label"/>
                    </svg>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money"/>
                    </svg>

                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#statistics"/>
                    </svg>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    );
}

export default Nav;