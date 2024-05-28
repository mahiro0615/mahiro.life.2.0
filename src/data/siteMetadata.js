const siteMetadata = {
    title: 'mahiro.life',
  description: 'A description of your site',
  author: 'Your Name',
 
comments: {
    
    provider: 'giscus', 
    giscusConfig: {
   
      repo: 'mahiro0615/mahiro.life.2.0',
      repositoryId: "R_kgDOMBsy3g",
      category: 'General',
      categoryId: "DIC_kwDOMBsy3s4CfqXd",
      mapping: 'pathname', 
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: "noborder_light",
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
}
module.exports = siteMetadata