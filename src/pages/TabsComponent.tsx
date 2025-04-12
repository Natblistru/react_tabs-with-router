import { useParams, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsComponent = () => {
  const { tabId } = useParams();
  const activeTabIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <Tabs defaultIndex={activeTabIndex === -1 ? 0 : activeTabIndex}>
      <TabList>
        {tabs.map(tab => (
          <Tab key={tab.id}>
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </Tab>
        ))}
      </TabList>

      {tabs.map(tab => (
        <TabPanel key={tab.id}>
          {tabId === tab.id ? tab.content : 'Please select a tab'}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabsComponent;
