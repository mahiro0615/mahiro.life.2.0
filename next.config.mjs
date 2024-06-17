import withMDX from '@next/mdx';

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // Any other MDX options here
  }
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  // Add any other Next.js configurations here
};

export default {
  ...nextConfig,
  ...mdxConfig
};