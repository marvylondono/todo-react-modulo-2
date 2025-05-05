import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <Switch
      checkedChildren="🌙"
      unCheckedChildren="☀️"
      checked={isDarkMode}
      onChange={() => dispatch({ type: 'TOGGLE_THEME' })}
    />
  );
};

export default ThemeSwitch;
