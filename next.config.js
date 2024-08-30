/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
            {
                source: '/faistineach',
                destination: 'https://buytickets.at/gliogar/1377503',
                permanent: false,
            },
        ]
    }
}


module.exports = nextConfig
