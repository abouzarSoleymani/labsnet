import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'minio-tech.pido.co.ir',
            }
        ],
        domains: ['https://minio-tech.pido.co.ir/'],
    },
};

export default withNextIntl(nextConfig);