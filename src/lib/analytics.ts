import { GA4_ID, META_PIXEL_ID } from "@/config";

export function initGA4() {
  if (!GA4_ID) return;
  if (!document.getElementById("ga4")) {
    const s = document.createElement("script");
    s.id = "ga4";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(s);
    const inline = document.createElement("script");
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date()); gtag('config', '${GA4_ID}');
    `;
    document.head.appendChild(inline);
  }
}

export function initMetaPixel() {
  if (!META_PIXEL_ID) return;
  if (!window.fbq) {
    !(function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;
    n.push=n; n.loaded=!0; n.version='2.0'; n.queue=[]; t=b.createElement(e);
    t.async=!0; t.src=v; s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
}
