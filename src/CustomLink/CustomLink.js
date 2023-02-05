import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ borderBottom: match ? "4px solid #22c55e" : "none"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && ""}
      </div>
    );
  }

export default CustomLink;