import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { Tabs, tabs } from './components/Tabs';

export const Root= () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path='tabs' element={<Tabs />}> 
            <Route index element={<>Please select a tab</>} />
            {tabs.map(tab => {
              const { id, content } = tab;

              return (
                <Route key={id} path={id} element={<>{content}</>} />
              );
            })}
            <Route path="*" element={<Navigate to="/tabs" replace />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

