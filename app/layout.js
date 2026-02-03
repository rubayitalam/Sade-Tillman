import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata = {
    title: 'Sade S. Tillman | Technical Recruiter & Career Catalyst',
    description: 'Connecting top-tier tech talent with leading companies. Specializing in technical placements, career coaching, and specialized search solutions. Over 10 years of experience in talent recruitment.',
    keywords: 'technical recruiter, career coaching, talent acquisition, software engineer recruitment, TS/SCI clearance, career development, resume writing, interview preparation',
    authors: [{ name: 'Sade S. Tillman' }],
    openGraph: {
        title: 'Sade S. Tillman | Technical Recruiter & Career Catalyst',
        description: 'Your Next-Generation Career Catalyst - Connecting Top-Tier Tech Talent with Leading Companies',
        type: 'website',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
