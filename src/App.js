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
            <h1>Bootcamp Frontend UTE - 2025. 🚀</h1>
            <div className="author-name">
              Creado por Gerson Javier Castellanos Niño
            </div>
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
