import React from "react";
import { VisibilityFilters, setVisibilityFilter } from "./data/actions";
import { useDispatch, useSelector } from "react-redux";

const Link = ({ filter, children }) => {
  const active = useSelector((state) => filter === state.visibilityFilter);
  const dispatch = useDispatch();
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        dispatch(setVisibilityFilter(filter));
      }}
    >
      {children}
    </a>
  );
};
const Footer = () => {
  return (
    <p>
      Show: <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
      {", "}
      <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
      {", "}
      <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
    </p>
  );
};

export default Footer;
