import { Text, ToggleSwitch, useTheme as primerUseTheme } from '@primer/react';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { setColorMode } = primerUseTheme();

  const setThemePage = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
      setColorMode('day');
    } else {
      setTheme('dark');
      setColorMode('night');
    }
  };
  return (
    <>
      <Text id="toggle" className="font-bold text-xs">
        Toggle Mode
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
