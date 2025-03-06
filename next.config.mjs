/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
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
};

export default nextConfig;
