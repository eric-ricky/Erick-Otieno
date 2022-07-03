/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  //...before
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  //...after
});

const nextConfig = {
  env: {
    FIREBASE_API_KEY: "AIzaSyBHVuuhgofrJ77DsRCnlmjD52YO2xKve7s",
    FIREBASE_AUTH_DOMAIN: "portfolio-911aa.firebaseapp.com",
    FIREBASE_PROJECT_ID: "portfolio-911aa",
    FIREBASE_STORAGE_BUCKET: "portfolio-911aa.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "76151901474",
    FIREBASE_APP_ID: "1:76151901474:web:48ed3440fac7b56edd297b",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
