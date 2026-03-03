import { useLocalStorage } from 'usehooks-ts';

import { Flash, IconButton, Text } from '@primer/react';
import { TabNav } from '@primer/react/deprecated';
import Image from 'next/image';

import { useIsSSR } from '@/hooks/useIsSSR';
import { XIcon } from '@primer/octicons-react';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { basePath } from '../../generated/basePath';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [showBanner, setShowBanner] = useLocalStorage('show-banner', false);
  const isSSR = useIsSSR();
  const orgName = 'University College London Open Source Dashboard';

  return (
    <main className="px-18 py-18 h-full flex flex-col">
      <div className="flex flex-row items-center gap-6">
        <Image
          className="block h-8 w-auto"
          src={`${basePath}/images/ucl-dark-light-mode-adaptive.svg`}
          height={50}
          width={150}
          alt="UCL logo"
        />
        <Text as="h1" className="font-semibold text-xl">
          {orgName}
        </Text>
      </div>
      {!isSSR && showBanner && (
        <div className="mt-6">
          <Flash
            variant="default"
            className="flex justify-between items-center"
          >
            <Text>
              Open Source Health Metrics for{' '}
              <Text className="font-semibold">{orgName}</Text>. Visit the
              Documentation page to learn more about how these metrics are
              calculated.
            </Text>
            <div>
              <IconButton
                onClick={() => setShowBanner(false)}
                variant="invisible"
                icon={XIcon}
                aria-label="Dismiss"
              />
            </div>
          </Flash>
        </div>
      )}
      <TabNav aria-label="Main" className="mt-8">
        <TabNav.Link
          href={`${basePath}/`}
          selected={
            !router.pathname.includes('documentation') &&
            !router.pathname.includes('ucl-arc')
          }
        >
          @UCL Repositories
        </TabNav.Link>
        <TabNav.Link
          href={`${basePath}/ucl-arc`}
          selected={router.pathname.includes('ucl-arc')}
        >
          @UCL-ARC Repositories
        </TabNav.Link>
        <TabNav.Link
          href={`${basePath}/documentation`}
          selected={router.pathname.includes('documentation')}
        >
          Documentation
        </TabNav.Link>
      </TabNav>
      <div className="flex-1 mt-2">{children}</div>
    </main>
  );
};
