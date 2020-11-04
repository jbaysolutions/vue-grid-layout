<script>
export default {
    name: 'CarbonAds',

    watch: {
        '$route' (to, from) {
            if (
                to.path !== from.path
                // Only reload if the ad has been loaded
                // otherwise it's possible that the script is appended but
                // the ads are not loaded yet. This would result in duplicated ads.
                && this.$el.querySelector('#carbonads')
            ) {
                this.$el.innerHTML = ''
                this.load()
            }
        }
    },

    mounted () {
        this.load()
    },

    methods: {
        load () {
            const s = document.createElement('script')
            s.id = '_carbonads_js'
            s.src = `//cdn.carbonads.com/carbon.js?serve=CEBITKQJ&placement=jbaysolutionsgithubio`
            this.$el.appendChild(s)
        }
    },

    render (h) {
        return h('div', { class: 'carbon-ads' })
    }
}
</script>

<style lang="stylus">
.carbon-ads
    min-height 102px
    padding 1.5rem 1.5rem 0
    margin-bottom -0.5rem
    font-size 0.75rem
    a
        color #444
        font-weight normal
        display inline
    .carbon-img
        float left
        margin-right 1rem
        border 1px solid $borderColor
        img
            display block
    .carbon-poweredby
        color #999
        display block
        margin-top 0.5em

@media (max-width: $MQMobile)
    .carbon-ads
        .carbon-img img
            width 100px
            height 77px
</style>

<!--
<style lang="css">
#carbonads {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#carbonads {
    display: flex;
    max-width: 330px;
    background-color: hsl(0, 0%, 98%);
    box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, .1);
}

#carbonads a {
    color: inherit;
    text-decoration: none;
}

#carbonads a:hover {
    color: inherit;
}

#carbonads span {
    position: relative;
    display: block;
    overflow: hidden;
}

#carbonads .carbon-wrap {
    display: flex;
}

.carbon-img {
    display: block;
    margin: 0;
    line-height: 1;
}

.carbon-img img {
    display: block;
}

.carbon-text {
    font-size: 13px;
    padding: 10px;
    line-height: 1.5;
    text-align: left;
}

.carbon-poweredby {
    display: block;
    padding: 8px 10px;
    background: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .5px;
    font-weight: 600;
    font-size: 9px;
    line-height: 1;
}
</style>
-->
