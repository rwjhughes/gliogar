/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
            {
                source: '/inisoirr',
                destination: 'https://buytickets.at/gliogar/1293982',
                permanent: false,
            },
            {
                source: '/indreabhan',
                destination: 'https://buytickets.at/gliogar/1293993',
                permanent: false,
            },
            {
                source: '/corrnamona',
                destination: 'https://buytickets.at/gliogar/1294006',
                permanent: false,
            },
        ]
    }
}


module.exports = nextConfig
