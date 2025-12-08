# WhatsApp Widget + Promo Banner - Lovely Venice

Modern, mobile-friendly WhatsApp chat widget and promotional banner for Lodgify integration.

## Features

- **Mobile Optimized** - Doesn't block mobile menus or navigation
- **Modern Design** - Gradient backgrounds, smooth animations, hover effects
- **Promo Banner** - Eye-catching "Book Direct & Save 18%" banner
- **WhatsApp Integration** - Direct chat link with pre-filled message
- **Smart Banner** - Remembers if user closed it (localStorage)
- **Responsive** - Works on all screen sizes
- **Separate Files** - Banner and Widget can be positioned independently

## File Structure

```
whatsapp-widget-lodgify/
 index.html          # WhatsApp Widget (standalone)
 banner.html         # Promo Banner (standalone)
 widget-embed.html   # WhatsApp Widget (embed for Lodgify)
 banner-embed.html   # Promo Banner (embed for Lodgify)
 vercel.json         # Vercel config
 .gitignore          # Git ignore rules
 README.md           # Documentation
```

## Quick Start

### For Lodgify Integration

1. **Banner**: Copy contents of `banner-embed.html`  Paste in Lodgify Header
2. **Widget**: Copy contents of `widget-embed.html`  Paste in Lodgify Footer

### For Standalone Use

Open `index.html` or `banner.html` in browser, or deploy to any static host.

## Configuration

### Change WhatsApp Number

Edit in `index.html` or `widget-embed.html`:

```html
href="https://wa.me/YOUR_PHONE_NUMBER?text=YOUR_MESSAGE"
```

### Change Banner Link

Current: `https://rent-in-venice.org/en/book-now`

Edit in `banner.html` or `banner-embed.html`:

```html
<a href="YOUR_BOOKING_LINK" class="banner-cta">
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy

### GitHub Pages

1. Repository Settings  Pages
2. Source: main branch
3. Save

## URLs After Deploy

- **Widget**: `https://your-domain.vercel.app/index.html`
- **Banner**: `https://your-domain.vercel.app/banner.html`

## License

MIT - Free to use and modify.

---
Created for Lovely Venice Apartments
