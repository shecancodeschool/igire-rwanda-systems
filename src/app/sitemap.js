export default function sitemap() {
    return [
        { 
            url: 'https://www.igirerwanda.org', 
            lastModified: new Date().toISOString(), 
            changeFrequency: 'monthly', 
            priority: 1
        },
        {
            url: 'https://www.igirerwanda.org/blog',
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 0.9
        },
        {
            url: 'https://www.igirerwanda.org/about', 
            lastModified: new Date().toISOString(), 
            changeFrequency: 'monthly', 
            priority: 0.9
        },
        {
            url: 'https://www.igirerwanda.org/projects',
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://www.igirerwanda.org/careers',
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.igirerwanda.org/contact',
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 0.8
        }
    ]
}
