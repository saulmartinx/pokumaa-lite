import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { initGA4, initMetaPixel } from './lib/analytics.ts';

// initialize analytics
initGA4();
initMetaPixel();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
