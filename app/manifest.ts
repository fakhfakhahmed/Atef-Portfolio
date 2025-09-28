import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Agimi Atef - Mechanical Designer Portfolio',
    short_name: 'Agimi Atef Portfolio',
    description: 'Professional mechanical designer specializing in CAD design, manufacturing processes, and engineering solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
