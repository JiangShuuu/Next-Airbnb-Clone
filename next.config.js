/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	experimental: {
		appDir: true,
	},
	images: {
		domains: [
			'avatars.githubusercontent.com',
			'res.cloudinary.com',
			'lh3.googleusercontent.com',
		],
	},
}

module.exports = nextConfig
