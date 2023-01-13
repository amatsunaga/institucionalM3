import React from "react";
import { Link } from "react-router-dom";

interface ListProps {
  className: string;
  itemsList: { value: string; name: string }[];
}

const List = (props: ListProps) => {
  const { className, itemsList } = props;

  return (
    <ul className={className}>
      {itemsList.map((item, index) => (
        <li key={index}>
          <Link to={item.value}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export { List };
