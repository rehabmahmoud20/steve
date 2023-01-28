import React from 'react';
import { Link as LinkScroll } from "react-scroll";

const List = ({elem, showMenu}) => {
  return (
      <li>
          <LinkScroll to={elem.to} spy={true} onClick={showMenu} offset={-60}>
              {elem.text}
          </LinkScroll>
      </li>
  )
}

export default List;