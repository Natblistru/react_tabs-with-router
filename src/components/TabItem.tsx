import { Link, useParams } from "react-router-dom";
import { Tab } from "../types/Tab";
import { useContext } from "react";
import { TabsContext } from "../store/TabsContext";
import classNames from "classnames";

export const TabItem = ({ tab }: { tab: Tab }) => {
  const { id, title } = tab;
  const { tabId } = useParams();
  const selectedTab = tab.id === tabId;

  return (
    <li data-cy="Tab" className={classNames
      ({
        'is-active': selectedTab,
      })
    }>
      <Link to={`../${id}`}>{title}</Link>
    </li>
  );
}