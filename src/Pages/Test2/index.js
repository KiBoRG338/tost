import React from "react";
import { TEST1, TEST3 } from "Config/routs";

import { Link } from "react-router-dom";

function RouteConfigExample() {
  return (
    
        <ul>
          <li>
            <Link to={TEST1}>test1</Link>
          </li>
          <li>
            <Link to={TEST3}>test3</Link>
          </li>
        </ul>
  );
}

export default RouteConfigExample;  
