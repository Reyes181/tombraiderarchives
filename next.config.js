const prod = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: !prod ? false : true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
    }
};

module.exports = withPWA(nextConfig)
