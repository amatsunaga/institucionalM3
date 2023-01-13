import React from "react";
import { Link } from "react-router-dom";

interface ListProps {
  className: string;
  itemsList: { value: string; name: string; phoneNumber?: string }[];
}

const List = (props: ListProps) => {
  const { className, itemsList } = props;

  return (
    <ul className={className}>
      {itemsList.map((item, index) =>
        item.phoneNumber ? (
          <li key={index}>
            <p>{item.name}</p>
            <Link to={item.value}>{item.phoneNumber}</Link>
          </li>
        ) : (
          <li key={index}>
            <Link to={item.value}>{item.name}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export { List };
