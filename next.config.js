/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/ticead',
                destination: 'https://buytickets.at/gliogar/1193850',
                permanent: false,
            },
            {
                source: '/ticeid',
                destination: 'https://buytickets.at/gliogar/1193850',
                permanent: false,
            },]
    }
}

module.exports = nextConfig
