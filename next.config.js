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
                destination: 'https://ie.powertik.com/events/aisling-lyons-becky-ni-eallaithe-muireann-ni-she-bi-liom-bi-seanscoil-sailearna-indreabhan',
                permanent: false,
            },
            {
                source: '/ticead',
                destination: 'https://ie.powertik.com/events/aisling-lyons-becky-ni-eallaithe-muireann-ni-she-bi-liom-bi-seanscoil-sailearna-indreabhan',
                permanent: false,
            },
            {
                source: '/biliombi',
                destination: 'https://ie.powertik.com/events/aisling-lyons-becky-ni-eallaithe-muireann-ni-she-bi-liom-bi-seanscoil-sailearna-indreabhan',
                permanent: false,
            },
            {
                source: '/bi',
                destination: 'https://ie.powertik.com/events/aisling-lyons-becky-ni-eallaithe-muireann-ni-she-bi-liom-bi-seanscoil-sailearna-indreabhan',
                permanent: false,
            },
            {
                source: '/traphaidin',
                destination: 'https://billetto.ie/e/tra-phaidin-cloch-s-clai-seanscoil-sailearna-26-mf-tickets-1983196',
                permanent: false,
            },
            {
                source: '/cloch',
                destination: 'https://billetto.ie/e/tra-phaidin-cloch-s-clai-seanscoil-sailearna-26-mf-tickets-1983196',
                permanent: false,
            },
            {
                source: '/clai',
                destination: 'https://billetto.ie/e/tra-phaidin-cloch-s-clai-seanscoil-sailearna-26-mf-tickets-1983196',
                permanent: false,
            },
        ]
    }
}


module.exports = nextConfig
