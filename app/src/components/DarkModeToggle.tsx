import { Text, ToggleSwitch } from '@primer/react';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@/hooks/useIsSSR';

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const setThemePage = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      <Text id="toggle" className="sr-only">
        Light mode switch
      </Text>
      <ToggleSwitch
        checked={!isSSR && resolvedTheme === 'light'}
        aria-labelledby="light mode switch"
        onClick={() => setThemePage()}
        size="small"
        buttonLabelOn="☼"
        buttonLabelOff="☾"
      />
    </>
  );
};

export default DarkModeToggle;
