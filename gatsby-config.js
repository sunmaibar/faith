module.exports = {
  siteMetadata: {
    title: `國際賢妻良母`,
    description: `國際賢妻良母主賣德國原裝進口商品
絕無山寨仿冒品，只賣在台現貨
提前售完才需預購。
✔每週美國outlet連線，Michael Kors,Coach,Tory burch等精品,
空運期(含清關)約2~3週，如有特殊急件再私詢團主訂購。
✔不定期挖掘日,韓,歐美,澳洲等世界各國商品(連摩洛哥也有過咧～！)
強烈建議將本社團設計優先通知，
避免沒搶到好物，槌心肝脾肺就不好了。.`,
    author: `@Faith`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cutegirlicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
