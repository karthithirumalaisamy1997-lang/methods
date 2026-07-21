import { useEffect, useRef } from 'react';
import './app.css';
import { APP_HTML } from './appHtml.js';
import { APP_SCRIPT } from './appScript.js';

export default function App() {
  const containerRef = useRef(null);
  const scriptRunRef = useRef(false);

  useEffect(() => {
    // Only run the app's script once, after the markup has been mounted.
    if (scriptRunRef.current) return;
    scriptRunRef.current = true;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = APP_SCRIPT;
    document.body.appendChild(script);

    return () => {
      // No teardown: the app manages its own DOM/state after mount.
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="smv-insight-root"
      dangerouslySetInnerHTML={{ __html: APP_HTML }}
    />
  );
}
