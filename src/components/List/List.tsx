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
            <a href={`tel:${item.phoneNumber}`}>{item.value}</a>
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
