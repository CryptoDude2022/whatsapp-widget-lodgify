(function() {
    // ROBUST: Check if element already exists in DOM
    if (document.getElementById('lv-promo-banner')) {
        return; // Already exists, do nothing
    }

    // Count page views and show banner every 3 refreshes after close
    var viewCount = parseInt(localStorage.getItem('lv-banner-views') || '0');
    viewCount++;
    localStorage.setItem('lv-banner-views', viewCount.toString());

    var wasClosed = localStorage.getItem('lv-banner-closed') === 'true';
    if (wasClosed && viewCount % 3 !== 0) return;

    localStorage.removeItem('lv-banner-closed');

    // Only add style if not already present
    if (!document.getElementById('lv-banner-style')) {
        var style = document.createElement('style');
        style.id = 'lv-banner-style';
        style.textContent = '#lv-promo-banner{position:relative;width:100%;background:linear-gradient(135deg,#c0392b 0%,#e74c3c 50%,#ff6b6b 100%);color:#fff;padding:14px 16px;text-align:center;z-index:9998;box-shadow:0 4px 15px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;gap:10px;flex-wrap:wrap;animation:lvBannerSlideIn .5s ease-out;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;overflow:hidden;border-radius:0 0 20px 20px}@keyframes lvBannerSlideIn{from{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}#lv-promo-banner::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.15) 50%,transparent 100%);animation:lvShimmer 3s infinite;pointer-events:none;border-radius:0 0 20px 20px}@keyframes lvShimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.lv-banner-icon{font-size:20px;animation:lvBounce 2s infinite}@keyframes lvBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.lv-banner-text{font-size:15px;font-weight:600;letter-spacing:.3px;position:relative;z-index:1;color:#fff}.lv-banner-highlight{color:#fff000;font-weight:700}.lv-banner-cta{display:inline-flex;align-items:center;gap:6px;background:#fff;color:#c0392b;padding:10px 20px;border-radius:25px;text-decoration:none;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;transition:all .3s ease;position:relative;z-index:1;box-shadow:0 4px 15px rgba(0,0,0,.3)}.lv-banner-cta:hover{transform:scale(1.05);box-shadow:0 6px 20px rgba(0,0,0,.4);color:#c0392b;background:#fff000}.lv-banner-cta svg{width:16px;height:16px}.lv-banner-close{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.2);border:none;color:#fff;width:26px;height:26px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .3s ease;z-index:2;line-height:1}.lv-banner-close:hover{background:rgba(0,0,0,.4)}@media(max-width:768px){#lv-promo-banner{padding:12px 45px 12px 12px;flex-direction:column;gap:8px;border-radius:0 0 15px 15px}.lv-banner-text{font-size:13px;line-height:1.4}.lv-banner-cta{padding:8px 16px;font-size:12px}.lv-banner-icon{display:none}}';
        document.head.appendChild(style);
    }

    var div = document.createElement('div');
    div.id = 'lv-promo-banner';
    div.innerHTML = '<span class="lv-banner-icon"></span><span class="lv-banner-text"><span class="lv-banner-highlight">Book now</span> and save up to <span class="lv-banner-highlight">18%</span> in commissions!</span><a href="https://rent-in-venice.org/en/book-now" class="lv-banner-cta" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>Book Direct</a><button class="lv-banner-close" aria-label="Close banner"></button>';

    document.body.insertBefore(div, document.body.firstChild);

    // Add close handler
    div.querySelector('.lv-banner-close').addEventListener('click', function() {
        div.style.display = 'none';
        localStorage.setItem('lv-banner-closed', 'true');
    });
})();
