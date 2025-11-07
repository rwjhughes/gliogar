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
                source: '/bds',
                destination: 'https://tinyurl.com/smachtbhannai',
                permanent: false,
            },
            {
                source: '/ticeid',
                destination: 'gliogar.eventbrite.ie',
                permanent: false,
            },
            {
                source: '/ticead',
                destination: 'gliogar.eventbrite.ie',
                permanent: false,
            },
        ]
    }
}


module.exports = nextConfig
