import { Link, useParams } from 'react-router-dom';

export const Tabs = () => {
  const { tabId } = useParams();

  const tabs = [
    {
      id: 'tab-1',
      title: 'Tab 1',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, minima soluta quasi
      accusantium mollitia hic facilis explicabo eveniet commodi. Et laudantium, mollitia fuga sed est
      autem cum animi consequatur, minus, odit aut porro blanditiis quia commodi unde consequuntur enim
      expedita. Aliquid natus corrupti ad similique quidem velit, maxime non voluptatem?`,
    },
    {
      id: 'tab-2',
      title: 'Tab 2',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, minima soluta quasi
        accusantium mollitia hic facilis explicabo eveniet commodi. Et laudantium, mollitia fuga
        sed est autem cum animi consequatur, minus, odit aut porro blanditiis quia commodi unde
        consequuntur enim expedita. Aliquid natus corrupti ad similique quidem velit,
        maxime non voluptatem?`,
    },
    {
      id: 'tab-3',
      title: 'Tab 3',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit qui molestias ipsa
        dolorum fugiat natus. Illum ex enim neque quidem corrupti cumque error quia, accusantium
        voluptates! Sit rerum id nam porro. Ullam asperiores atque reprehenderit. Explicabo harum
        excepturi dolores soluta quidem fugiat necessitatibus voluptates, nam fugit repellat sit!
        Nisi assumenda, deserunt repudiandae nesciunt vero rerum libero iste amet eaque.`,
    },
  ];

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`${tab.id}`}> {tab.id} </Link>
            </li>
          ))}
        </ul>
      </div>
      {selectedTab ? (
        <div>{selectedTab.content}</div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
