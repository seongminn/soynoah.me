'use client';

import { useTheme } from 'next-themes';
import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';

export default function Giscus(props: HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === 'dark' ? 'noborder_dark' : 'noborder_light';

  // biome-ignore lint/correctness/useExhaustiveDependencies: prevent re-load giscus
  useEffect(() => {
    const iframe = ref.current;

    if (!iframe) return;

    const giscusAttributes = {
      src: 'https://giscus.app/client.js',
      'data-repo': 'seongminn/soynoah.me',
      'data-repo-id': 'R_kgDOK8xLvQ',
      'data-category': 'Announcements',
      'data-category-id': 'DIC_kwDOK8xLvc4CcZnK',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': theme,
      'data-lang': 'ko',
      crossorigin: 'anonymous',
      async: 'true',
    };

    const giscusScript = document.createElement('script');

    Object.entries(giscusAttributes).forEach(([key, value]) =>
      giscusScript.setAttribute(key, value),
    );

    iframe.appendChild(giscusScript);

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  }, [theme, mounted]);

  return <section {...props} ref={ref} />;
}
