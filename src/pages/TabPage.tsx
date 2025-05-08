import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { tabs } from '../consts';

export const TabPage = () => {
  const { tabId: activeTabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={activeTabId} />
    </>
  );
};
