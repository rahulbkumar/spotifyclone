/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	reactStrictMode: true,
	distDir: "dist",
};

module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
};

module.exports = nextConfig;
