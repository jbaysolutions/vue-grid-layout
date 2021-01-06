const description = 'A draggable and resizable grid layout, as a Vue component.'
const title = 'Vue Grid Layout - ️A grid layout system for Vue.js'

module.exports = {
	base: "/vue-grid-layout/",
	locales: {
		'/': {
		  lang: 'en-US',
		  title: 'Vue Grid Layout - ️A grid layout system for Vue.js',
		  description: 'A draggable and resizable grid layout, as a Vue component.'
		},
		'/zh/': {
		  lang: 'zh-CN',
		  title: 'Vue Grid Layout -️ 适用Vue.js的栅格布局系统',
		  description: '可拖动和可调整大小栅格布局的Vue组件。'
		}
	  },
	head: [
		['link', { rel: 'icon', href: `/favicon.ico` }],
		['link', { rel: "apple-touch-icon", sizes: "180x180", href: "https://jbaysolutions.github.io/vue-grid-layout/assets/favicon/apple-touch-icon.png"}],
		// ['script', { src: 'https://cdn.jsdelivr.net/npm/vue-grid-layout@2.3.9/dist/vue-grid-layout.umd.min.js' }]
	],
	port: 8081,
	theme: '@vuepress/vue',
	themeConfig: {
		smoothScroll: true,
		logo: '/assets/img/logo.png',
		repo: 'jbaysolutions/vue-grid-layout',
		docsDir: 'website/docs',
		editLinks: true,
		algolia: {
		  apiKey: '2f143d1edd24605564065dd02bf0a22b',
		  indexName: 'vue_grid_layout'
		},
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Select language',
				sidebar: {
					'/guide/': [
						{
							title: "Guide",
							collapsable: false,
							children: [
								'',
								'usage',
								'properties',
								'events',
								'styling',
							]
						},
						{
							title: "Examples",
							collapsable: false,
							children: [
								'01-basic',
								'02-events',
								'03-multiple-grids',
								'04-allow-ignore',
								'05-mirrored',
								'06-responsive',
								'07-prevent-collision',
								'08-responsive-predefined-layouts',
								'09-dynamic-add-remove',
								'10-drag-from-outside',
							]
						}
					]
				},
				nav: [
					{text: 'Home', link: '/'},
					{text: 'Guide', link: '/guide/'},
					{text: 'Changelog', link: '/changelog/'}
				],
				searchPlaceholder: 'Search...',
				editLinkText: 'Help improve this page!',
				lastUpdated: 'Last Updated'
			},
			'/zh/': {
				selectText: '选择语言',
				label: '简体中文',
				ariaLabel: '选择语言',
				sidebar: {
					'/zh/guide/': [
						{
							title: "首页",
							collapsable: false,
							children: [
								'',
								'usage',
								'properties',
								'events',
								'styling',
							]
						},
						{
							title: "例子",
							collapsable: false,
							children: [
								'01-basic',
								'02-events',
								'03-multiple-grids',
								'04-allow-ignore',
								'05-mirrored',
								'06-responsive',
								'07-prevent-collision',
								'08-responsive-predefined-layouts',
								'09-dynamic-add-remove',
								'10-drag-from-outside',
							]
						}
					]
				},
				nav: [
					{text: '首页', link: '/zh/'},
					{text: '指南', link: '/zh/guide/'},
					{text: '更新日志', link: '/zh/changelog/'}
				],
				searchPlaceholder: '搜索...',
				editLinkText: '帮助改善此页面！',
				lastUpdated: '最后更新时间'
			}
		}
	},
	plugins: [
		'@vuepress/back-to-top',
		['@vuepress/google-analytics', {
			ga: 'UA-37288388-24' // UA-00000000-0
		}],
		['seo', {
			title: $page => `${$page.title} — Vue Grid Layout`,
			// image: () => 'https://jbaysolutions.github.io/vue-grid-layout/assets/img/og.jpg',
			siteTitle: (_, $site) => $site.title,
			description: $page => $page.frontmatter.description || description,
			author: (_, $site) => $site.themeConfig.author,
			tags: $page => $page.frontmatter.tags,
			twitterCard: _ => 'summary_large_image',
			type: () => 'article',
			url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
			publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
			modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
		}],
		['vuepress-plugin-serve', {
			port: 8080,
			staticOptions: {
				dotfiles: 'allow',
			},
			/*beforeServer(app, server) {
				app.get('/path/to/my/custom', function(req, res) {
					res.json({ custom: 'response' })
				})
			},*/
		}],
	],
	dest: 'public',
}
