# MUI System Playground

A playground project for experimenting with MUI System - a collection of CSS utilities for rapidly laying out custom designs.

## What's Installed

- **React** (v19.2.0) - The UI library
- **@mui/system** (v7.3.3) - MUI's CSS utilities system
- **@emotion/react & @emotion/styled** - The styling engine (Emotion is MUI's default)
- **Vite** - Fast build tool and dev server

## Getting Started

The development server should already be running! Check your terminal for the local URL (usually `http://localhost:5173`).

If you need to start it again:
```bash
npm run dev
```

## Project Structure

```
mui-playground/
├── index.html          # Entry HTML file
├── src/
│   ├── main.jsx       # React app entry point
│   └── App.jsx        # Main app component with MUI System examples
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies and scripts
```

## Key Features Demonstrated

The `App.jsx` file includes examples of:

- **Responsive Design** - Using the `sx` prop with responsive values
- **Layout Utilities** - Grid, flexbox, spacing, etc.
- **Hover Effects** - Interactive styling with pseudo-selectors
- **Theme Colors** - Using MUI's color system
- **Typography** - Responsive font sizes and styling
- **Component Variants** - Different button styles

## The `sx` Prop

The `sx` prop is the heart of MUI System. It lets you write CSS directly in your JSX with additional superpowers:

```jsx
<Box
  sx={{
    p: 4,                    // padding: 32px (4 * 8px theme spacing)
    bgcolor: 'primary.main', // Use theme colors
    fontSize: { xs: '1rem', md: '2rem' }, // Responsive values
    '&:hover': {             // Pseudo-selectors
      bgcolor: 'primary.dark'
    }
  }}
>
  Content
</Box>
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Next Steps

1. Open the app in your browser
2. Explore the examples in `src/App.jsx`
3. Try modifying the `sx` props to see changes in real-time
4. Check out the [MUI System documentation](https://mui.com/system/getting-started/) for more features

## Resources

- [MUI System Docs](https://mui.com/system/getting-started/)
- [The sx Prop](https://mui.com/system/getting-started/the-sx-prop/)
- [Emotion Documentation](https://emotion.sh/docs/introduction)

