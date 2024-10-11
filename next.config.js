/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
            {
                source: '/bandcamp',
                destination: 'https://daily.bandcamp.com/scene-report/ta-gliogar-ag-tabhairt-ardan-do-weirdo-ceol-ar-fud-na-heireann',
                permanent: false,
            },
        ]
    }
}


module.exports = nextConfig
