/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cuar',
        destination: 'https://buytickets.at/gliogar/1193850',
        permanent: false,
      },
      {
        source: '/brighde',
        destination: 'https://buytickets.at/gliogar/1209899',
        permanent: false,
      },
      {
        source: '/bds',
        destination: 'https://tinyurl.com/smachtbhannai',
        permanent: false,
      },
    ]
  }
};

export default nextConfig;
