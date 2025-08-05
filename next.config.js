/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
            {
                source: '/bandcamp',
                destination: 'https://daily.bandcamp.com/scene-report/ta-gliogar-ag-tabhairt-ardan-do-weirdo-ceol-ar-fud-na-heireann',
                permanent: false,
            },
            {
                source: '/ultan',
                destination: 'https://billetto.ie/e/ultan-o-brien-seoladh-albaim-dancing-the-line-amharclann-chois-fharraige-tickets-1189846',
                permanent: false,
            },
            {
                source: '/bds',
                destination: 'https://tinyurl.com/smachtbhannai',
                permanent: false,
            },
            {
                source: '/ceol',
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLScIuIwh2QD4qcYhoj73J9u5IVHBKruZQb8kBqNrN4zZ5AXJrg/viewform?usp=dialog',
                permanent: false,
            },
        ]
    }
}


module.exports = nextConfig
