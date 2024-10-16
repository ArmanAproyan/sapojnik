/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Включить строгий режим React
    swcMinify: true, // Использовать SWC для минимизации
    images: {
      // Если вы используете изображения из внешних источников, добавьте их здесь
      domains: ['example.com'], // Замените на ваши домены
    },
    env: {
      // Если у вас есть переменные окружения, можете указать их здесь
      API_URL: process.env.API_URL, // Пример переменной окружения
    },
};

export default nextConfig;
