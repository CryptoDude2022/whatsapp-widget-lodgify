# WhatsApp Widget - Lovely Venice

Modern, mobile-friendly WhatsApp chat widget for Lodgify integration.

## Features

- 💬 **WhatsApp Integration** - Direct chat link with pre-filled message
- 📱 **Mobile Optimized** - Doesn't block mobile menus or navigation
- 🎨 **Modern Design** - Gradient backgrounds, smooth animations, hover effects
- 🔔 **Pulse Animation** - Eye-catching ring animation
- 💡 **Tooltip** - "Chat with us!" tooltip on hover
- ⚡ **Lightweight** - No dependencies, pure HTML/CSS/JS
- 🎯 **Easy Integration** - Multiple integration options

## File Structure

```
whatsapp-widget-lodgify/
├── index.html          # WhatsApp Widget (standalone preview)
├── widget-embed.html   # WhatsApp Widget (embed code for Lodgify)
├── widget-loader.js    # WhatsApp Widget (external script loader)
├── vercel.json         # Vercel configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Quick Start

### Option 1: Embed Code (Recommended for Lodgify)

1. Copy the contents of `widget-embed.html`
2. Paste in Lodgify → Website → Footer Code

### Option 2: External Script

Add this script tag to your website's footer:

```html
<script src="https://YOUR-DOMAIN.vercel.app/widget-loader.js"></script>
```

### Option 3: Standalone Preview

Open `index.html` in a browser to preview the widget.

## Configuration

### Change WhatsApp Number

Edit the WhatsApp link in the files:

```html
href="https://wa.me/YOUR_PHONE_NUMBER?text=YOUR_MESSAGE"
```

Current number: `393469537567`
Current message: `Hello Lovely Venice Apartments I would like some information`

### Customize Colors

Main colors in CSS:
- Primary: `#25D366` (WhatsApp green)
- Secondary: `#128C7E` (dark green)
- Badge: `#FF6B6B` → `#EE5A24` (orange gradient)

## Deployment

### Deploy to Vercel

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/whatsapp-widget-lodgify.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Deploy to GitHub Pages

1. Go to Repository Settings → Pages
2. Source: Deploy from branch `main`
3. Save

## URLs After Deploy

After deploying to Vercel:

- **Preview**: `https://whatsapp-widget-lodgify.vercel.app/`
- **Loader Script**: `https://whatsapp-widget-lodgify.vercel.app/widget-loader.js`
- **Embed Code**: `https://whatsapp-widget-lodgify.vercel.app/widget-embed.html`

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## License

MIT - Free to use and modify.

---

Created for Lovely Venice Apartments 🏠
