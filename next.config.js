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
        ]
    }
}


module.exports = nextConfig
