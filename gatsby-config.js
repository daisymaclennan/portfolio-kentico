/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `@kentico/gatsby-source-kontent`,
        options: {
          deliveryClientConfig: {
            projectId: `0458c92c-437f-0002-ed15-5df91931f7eb` // Fill in your Project ID
          },
          // Please note that with the Sample Project generated above, `en-US` is the default language for the project and this config. For a blank project, this needs to be `default`.
          languageCodenames: [
                  `default`
          ]
        }
      }
  ]
}
