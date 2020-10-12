/**
 * App level enhancements. Read more here:
 * https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
// import pageComponents from '@internal/page-components'
import Autocomplete from './Autocomplete'
// import ArticleCard from './components/ArticleCard'
// import GithubButton from 'vue-github-button'
// import VTooltip from 'v-tooltip'

// import '../../node_modules/@braid/vue-formulate/themes/snow/snow.scss'

export default ({ Vue }) => {
	/*Vue.prototype.$gridlayout = {
		async load () {
			await import('vue-grid-layout');
			console.log("LOADED!")
		},
	};*/
  /*Vue.use(VueFormulate, {
    plugins: [ Autocomplete ]
  })*/

  // Vue.use(VTooltip)

  // for (const [name, component] of Object.entries(pageComponents)) {
  //   Vue.component(name, component)
  // }
  // Vue.component('github-button', GithubButton)
  // Vue.component('ArticleCard', ArticleCard)
}
