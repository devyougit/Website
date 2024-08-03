/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/index.html'
            }
        ]
    },
    
};

export default nextConfig;
