// Allow importing CSS files as side-effect imports in TypeScript
// This fixes errors like: "Cannot find module or type declarations for side-effect import of './globals.css'"

declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.module.css'
declare module '*.module.scss'
declare module '*.module.sass'

// Allow importing images and svgs if needed
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
