# 51st Birthday Celebration Website

A beautiful, responsive birthday website created to celebrate a special 51st birthday. Features warm colors, interactive elements, and heartfelt content.

## Features

- **Hero Section**: Eye-catching title with animated confetti and floating balloons
- **Photo Gallery**: Interactive gallery with lightbox functionality for family photos
- **Personal Messages**: Dedicated section for heartfelt messages from family members
- **Interactive Memories**: Hidden content that reveals special memories and appreciation points
- **Mobile Responsive**: Optimized for all device sizes with accessibility features
- **Warm Design**: Beautiful color palette with oranges, yellows, and reds

## Customization Guide

### 1. Personalizing the Content

**Hero Section (App.tsx - HeroSection component):**
- Change "Dad" to the appropriate name in line 41
- Modify the subtitle message in lines 44-46
- Update the "Your Family" text in line 55

**Messages Section (App.tsx - MessagesSection component):**
- Replace "Sarah" and "Michael" with actual children's names (lines 196, 214)
- Update the initial letters in the avatar circles (lines 193, 211)
- Customize the message content in the blockquote sections (lines 200-203, 218-221)

**Interactive Memories (App.tsx - InteractiveMemories component):**
- Edit the memories array (lines 240-246) with personalized content
- Modify the final celebration message (lines 269-274)

### 2. Adding Photos

**Photo Gallery (App.tsx - PhotoGallery component):**

Replace the Pexels placeholder URLs in the photos array (lines 123-148) with actual family photos:

```javascript
const photos = [
  {
    url: '/path/to/your/photo1.jpg', // Replace with actual photo paths
    caption: 'Your custom caption here'
  },
  // Add more photos as needed
];
```

**To add photos:**
1. Create a `public/images` folder in your project
2. Add your photos to this folder
3. Update the URLs to point to your photos: `'/images/your-photo.jpg'`
4. Update captions to match your photos

### 3. Color Customization

The website uses a warm color palette defined in Tailwind classes:
- Primary: `orange-500` to `orange-800`
- Secondary: `red-500` to `red-800`  
- Accent: `yellow-400` to `yellow-500`

To change colors, replace these Tailwind classes throughout App.tsx with your preferred color scheme.

### 4. Adding More Sections

To add additional sections:
1. Create new component functions following the existing pattern
2. Add them to the main App component's return statement
3. Follow the established styling patterns for consistency

## Technical Setup

### Requirements
- Node.js 16+ 
- Modern web browser
- Internet connection for external fonts and initial setup

### Installation
1. Clone or download the project
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:5173` in your browser

### Deployment
- **Development**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Accessibility Features

- High contrast support
- Keyboard navigation
- Screen reader friendly
- Focus indicators
- Semantic HTML structure
- Responsive text sizing

## File Structure

```
src/
├── App.tsx          # Main component with all sections
├── index.css        # Custom styles and animations
├── main.tsx         # React app entry point
└── vite-env.d.ts    # TypeScript declarations

public/
└── images/          # (Create this folder for your photos)
```

## Customization Tips

1. **Easy Text Changes**: Search for text strings in App.tsx and replace them
2. **Photo Management**: Keep photos under 1MB for better performance
3. **Mobile Testing**: Test on actual devices, not just browser dev tools
4. **Content Length**: Keep messages concise for better mobile experience
5. **Backup**: Save your customizations before making major changes

## Support

For technical issues:
1. Check browser console for error messages
2. Ensure all image paths are correct
3. Verify Node.js and npm versions
4. Try `npm install` again if dependencies fail

## Performance Tips

- Optimize images before adding them (recommend 800px width max)
- Test loading speed on mobile connections
- Use WebP format for photos if possible
- Keep total page size under 2MB for best performance

Enjoy creating a memorable birthday celebration! 🎉