const description = 'Built-in validation, error handling, grouped & repeatable fields, form generation, and more — make complex form creation a breeze.'
const title = 'Vue Grid Layout - ️A grid layout system for Vue.js'

module.exports = ctx => ({
  base: "/vue-grid-layout/",
  title,
  description,
  head: [
    // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "https://vueformulate.com/assets/favicon/apple-touch-icon.png"}],
    // ['script', { src: 'https://polyfill.io/v3/polyfill.min.js?features=es2015%2CFunction.name' }]
  ],
  port: 8081,
  themeConfig: {
    /*sidebar: [
      '/guide',
      '/changelog'
    ],*/
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Changelog', link: '/changelog/' }
    ],
    searchPlaceholder: 'Search...',
    smoothScroll: true,
    // logo: '/assets/img/logo.png',
    repo: 'jbaysolutions/vue-grid-layout',
    docsRepo: 'website',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help improve this page!',
    /*algolia: {
      apiKey: 'XXX',
      indexName: 'vuegridlayout'
    }*/
  },
  plugins: [
    // ['live'],
    /*[
      '@vuepress/google-analytics',
      {
        'ga': 'UA-00000000-0' // UA-00000000-0
      }
    ],
    ['seo', {
      title: $page => `${$page.title} — Vue Grid Layout`,
      image: () => 'https://jbaysolutions.github.io/vue-grid-layout/assets/img/og.jpg',
      siteTitle: (_, $site) => $site.title,
      description: $page => $page.frontmatter.description || description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: () => 'article',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }]*/
  ],
  dest: 'public'
})
