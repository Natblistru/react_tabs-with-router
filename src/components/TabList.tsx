import tabs from '../api/tabs';
import TabItem from './TabItem';

const TabList = () => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabItem key={tab.id} tab={tab} />
        ))}
      </ul>
    </div>
  );
};

export default TabList;
