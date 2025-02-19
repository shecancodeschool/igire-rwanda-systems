export default function sitemap() {
    return [
        { 
            url: '/', 
            lastModified: new Date().toISOString(), 
            changefreq: 'monthly', 
            priority: 1.0
        },
        {
            url: '/blog',
            lastModified: new Date().toISOString(),
            changefreq: 'daily',
            priority: 0.9
        },
        {
            url: '/about', 
            lastModified: new Date().toISOString(), 
            changefreq: 'monthly', 
            priority: 0.9
        },
        {
            url: '/projects',
            lastModified: new Date().toISOString(),
            changefreq: 'monthly',
            priority: 0.8
        },
        {
            url: '/careers',
            lastModified: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.8
        },
        {
            url: '/contact',
            lastModified: new Date().toISOString(),
            changefreq: 'daily',
            priority: 0.8
        }
    ]
}
