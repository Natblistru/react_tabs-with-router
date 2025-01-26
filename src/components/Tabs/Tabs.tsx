import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = tabs => {
  console.log(tabs);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className="is-active">
            <a to="#/">Tab 1</a>
          </li>
          <li data-cy="Tab">
            <a to="#/">Tab 2</a>
          </li>
          <li data-cy="Tab">
            <a to="#/">Tab 3</a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {/* {activeTab.content} */}
      </div>
    </div>
  );
};
