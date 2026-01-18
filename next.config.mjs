/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.youtube.com",
			},
			{
				protocol: "https",
				hostname: "i.ytimg.com",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Content-Security-Policy",
						value: [
							"default-src 'self'",
							"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.youtube-nocookie.com https://s.ytimg.com https://static.cloudflareinsights.com",
							"style-src 'self' 'unsafe-inline'",
							"img-src 'self' data: https: blob:",
							"font-src 'self' data:",
							"frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
							"connect-src 'self' https://www.youtube.com https://www.google-analytics.com https://cloudflareinsights.com",
							"media-src 'self' https://www.youtube.com https://videos.pasaproductions.com",
						].join("; "),
					},
				],
			},
		];
	},
};

export default nextConfig;
