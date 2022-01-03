import React from "react";

const Navbar = (props) => {
  const { totalCount } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">
          Navbar <span className="badge bg-secondary"> {totalCount} </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
