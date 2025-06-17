module.exports = {
    content: [
        './layout/**/*.liquid',
        './templates/**/*.liquid',
        './sections/**/*.liquid',
        './snippets/**/*.liquid',
        './assets/**/*.js'
    ],
    theme: {
        extend: {
            fontFamily: {
                bellmt: ['"Bell MT"', 'serif'],
            },
        },
    },
    plugins: [],
}