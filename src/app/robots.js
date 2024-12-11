export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/dashboard'
            },
        ],
        sitemap: 'https://www.igirerwanda.org/sitemap.xml'
    }
}