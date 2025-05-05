import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { ConfigProvider, theme } from 'antd';
import store from './store';
import TodoList from './components/TodoList';
import ThemeSwitch from './components/ThemeSwitch';
import './App.css';

const ThemeWrapper = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorBgContainer: isDarkMode ? '#1F1F1F' : '#FFFFFF',
        },
      }}
    >
      <div
        className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      >
        <header className="app-header">
          <div className="header-content">
            <h1>Práctica 2 - React</h1>
            <div className="author-name">Marvy Lucelly Londoño López</div>
          </div>
          <ThemeSwitch />
        </header>
        <TodoList />
      </div>
    </ConfigProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper />
    </Provider>
  );
}

export default App;
