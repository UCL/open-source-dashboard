import { Text, ToggleSwitch } from '@primer/react';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const setThemePage = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <>
      <Text id="toggle" className="sr-only">
        Toggle dark mode
      </Text>
      <ToggleSwitch
        checked={resolvedTheme === 'dark'}
        aria-labelledby="toggle"
        onClick={() => setThemePage()}
      />
    </>
  );
};

export default DarkModeToggle;
