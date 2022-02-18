const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        purgecss({
            content: ['./**/*.html'],
            safelist: [
                'bg-yellow-400'
            ]
        }),
        require('autoprefixer'),
    ]
}