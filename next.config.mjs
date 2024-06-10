import withMDX from '@next/mdx';

const nextConfig = {
  // Add any other Next.js configuration here
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {/* MDX options here if any */}
        }
      ]
    });

    return config;
  }
};

export default withMDX()(nextConfig);