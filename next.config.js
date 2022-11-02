/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // loader: 'custom',
    domains: ['images.ctfassets.net']
  },
  experimental: { appDir: true },
  async headers() {
    return [
      {
        source: '/posts/:path',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=900',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
}
