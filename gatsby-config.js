module.exports = {
  plugins: [
    {
      resolve: `@kentico/gatsby-source-kontent`,
        options: {
          deliveryClientConfig: {
            projectId: `0458c92c-437f-0002-ed15-5df91931f7eb` // Fill in your Project ID
          },
          languageCodenames: [
                  `default`
          ]
        }
    },
    `gatsby-plugin-styled-components`
  ]
}
