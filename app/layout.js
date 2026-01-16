import './globals.css'

export const metadata = {
  title: 'Intent-Based Violence Prediction System 1.0',
  description: 'AI-powered detection of Non-Violent, Pre-Violent, and Violent behavior in video',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}