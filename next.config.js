/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://www.eventbrite.ie/e/oiche-gliogar-tra-phaidin-the-brigideens-colm-seoighe-na-heasogai-tickets-733377310277?aff=oddtdtcreator',
                permanent: false,
            },
        ]
    }
}

module.exports = nextConfig
