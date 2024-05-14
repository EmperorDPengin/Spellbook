/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/Spellbook' : '',
  assetPrefix: isProd ? '/Spellbook/' : '',
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
