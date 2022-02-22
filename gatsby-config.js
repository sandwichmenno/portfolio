module.exports = {
    siteMetadata: {
        siteUrl: `https://www.mvoorst.nl`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-smoothscroll`,
        `gatsby-transformer-sharp`,
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                /**
                 * @property {boolean} [resetCSS=true]
                 * if false, this plugin will not use `<CSSReset />
                 */
                resetCSS: true,
                /**
                 * @property {boolean} [isUsingColorMode=true]
                 * if false, this plugin will not use <ColorModeProvider />
                 */
                isUsingColorMode: true,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Montserrat`,
                        variants: [`300`, `400`, `500`, `600`]
                    },
                ],
            },
        }
    ]
}
