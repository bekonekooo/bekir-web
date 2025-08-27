/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statik yayınlayacaksan:
  output: 'export',                 // npm run build → out/ üretir
  images: {
    unoptimized: true,              // static export için şart
    domains: ['images.unsplash.com'] // dev’de unconfigured host hatasını keser
  },
};

export default nextConfig;
// export default nextConfig;

// const nextConfig = {
//   output: 'export',
//   images: { unoptimized: true },
// };

// /** @type {import('next').NextConfig} */
// module.exports = {
//   output: 'export',          // out/ üretir
//   images: { unoptimized: true }, // export modunda next/image için şart
// };
