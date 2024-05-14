const isProd = process.env.NODE_ENV === 'production'

export default {
  basePath: isProd ? '/Spellbook' : '',
  assetPrefix: isProd ? '/Spellbook/' : '',
  trailingSlash: true,
}






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;
