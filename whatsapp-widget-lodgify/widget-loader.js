(function() {
    // ROBUST: Check if element already exists in DOM
    if (document.getElementById('lv-widget-container')) {
        return; // Already exists, do nothing
    }

    // Only add style if not already present
    if (!document.getElementById('lv-widget-style')) {
        var style = document.createElement('style');
        style.id = 'lv-widget-style';
        style.textContent = '#lv-widget-container{position:fixed;bottom:20px;right:20px;z-index:9997;pointer-events:none}#lv-whatsapp-widget{position:relative;width:60px;height:60px;background:linear-gradient(135deg,#25D366 0%,#128C7E 100%);border-radius:50%;display:flex;justify-content:center;align-items:center;text-decoration:none;box-shadow:0 4px 15px rgba(37,211,102,.4),0 8px 30px rgba(0,0,0,.15);transition:all .3s cubic-bezier(.4,0,.2,1);pointer-events:auto;overflow:visible}#lv-whatsapp-widget:hover{transform:scale(1.1);box-shadow:0 6px 20px rgba(37,211,102,.5),0 12px 40px rgba(0,0,0,.2)}#lv-whatsapp-widget:active{transform:scale(.95)}#lv-whatsapp-widget svg{width:32px;height:32px;position:relative;z-index:5;filter:drop-shadow(0 2px 4px rgba(0,0,0,.1))}.lv-ring{position:absolute;width:100%;height:100%;border-radius:50%;border:3px solid rgba(37,211,102,.6);animation:lvPulse 2s ease-out infinite;pointer-events:none}.lv-ring.delay{animation-delay:1s}@keyframes lvPulse{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.8);opacity:0}}#lv-whatsapp-badge{position:absolute;top:-8px;right:-8px;background:linear-gradient(135deg,#FF6B6B,#EE5A24);color:#fff;font-size:10px;padding:4px 8px;border-radius:12px;font-weight:700;box-shadow:0 3px 10px rgba(238,90,36,.4);letter-spacing:.3px;text-transform:uppercase;animation:lvBadgePulse 2s infinite;pointer-events:none;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}@keyframes lvBadgePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}@media(max-width:768px){#lv-widget-container{bottom:16px;right:16px}#lv-whatsapp-widget{width:56px;height:56px}#lv-whatsapp-widget svg{width:30px;height:30px}#lv-whatsapp-badge{font-size:9px;padding:3px 6px;top:-6px;right:-6px}}@media(max-width:375px){#lv-widget-container{bottom:12px;right:12px}#lv-whatsapp-widget{width:52px;height:52px}#lv-whatsapp-widget svg{width:28px;height:28px}}';
        document.head.appendChild(style);
    }

    var div = document.createElement('div');
    div.id = 'lv-widget-container';
    div.innerHTML = '<a href="https://wa.me/393469537567?text=Hello%20Lovely%20Venice%20Apartments%20I%20would%20like%20some%20information" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" id="lv-whatsapp-widget"><span class="lv-ring"></span><span class="lv-ring delay"></span><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="white" d="M16 0C7.16 0 0 7.16 0 16c0 2.82.73 5.57 2.12 8L0 32l8.22-2.14C10.57 31.27 13.27 32 16 32c8.84 0 16-7.16 16-16S24.84 0 16 0zm0 29.3a13.23 13.23 0 0 1-6.73-1.85l-.48-.28-4.9 1.28 1.31-4.78-.31-.5a13.3 13.3 0 1 1 11.11 6.85zm7.13-9.46c-.39-.19-2.3-1.13-2.66-1.26-.36-.13-.62-.19-.88.19-.26.39-1.01 1.26-1.24 1.51-.23.26-.45.29-.84.1-.39-.19-1.65-.61-3.14-1.95-1.16-1.04-1.94-2.33-2.17-2.72-.23-.39-.02-.6.17-.79.17-.17.39-.45.58-.68.19-.23.26-.39.39-.65.13-.26.06-.48-.03-.68-.1-.19-.88-2.12-1.2-2.9-.31-.75-.63-.65-.88-.66l-.74-.02c-.26 0-.68.1-1.04.48-.36.39-1.36 1.33-1.36 3.25 0 1.92 1.4 3.77 1.59 4.03.19.26 2.74 4.2 6.65 5.89.93.4 1.65.64 2.22.82.94.3 1.8.26 2.48.16.76-.11 2.3-.94 2.63-1.85.32-.91.32-1.69.23-1.85-.09-.15-.35-.25-.74-.45z"/></svg><span id="lv-whatsapp-badge">Chat</span></a>';

    document.body.appendChild(div);
})();
