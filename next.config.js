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
                destination: 'https://www.eventbrite.ie/e/olan-monk-songs-for-nothing-prelude-gliogar-tickets-1814374154939',
                permanent: false,
            },
            {
                source: '/ticead',
                destination: 'https://www.eventbrite.ie/e/olan-monk-songs-for-nothing-prelude-gliogar-tickets-1814374154939',
                permanent: false,
            },
            {
                source: '/olan',
                destination: 'https://www.eventbrite.ie/e/olan-monk-songs-for-nothing-prelude-gliogar-tickets-1814374154939',
                permanent: false,
            },
        ]
    }
}


module.exports = nextConfig
