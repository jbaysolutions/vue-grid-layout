<template>
    <ParentLayout>
        <template #sidebar-top>
            <CarbonAds/>
        </template>
        <template #sidebar-bottom>
            <footer class="footer">
                A product by:
                <a href="https://www.jbaysolutions.com/" target="_blank" rel="noopener" class="footer-card">
                    <img :src="$withBase('/assets/img/logo-jbay.png')" alt="JBay Solutions"/>
                </a>
            </footer>
        </template>
    </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import CarbonAds from '../components/CarbonAds'

export default {
    name: 'Layout',

    components: {
        ParentLayout,
        CarbonAds,
    }
}
</script>

<style scoped>
.footer {
    box-sizing: border-box;
    padding: 1em 1em 1em 2em;
    margin-top: auto;
    width: 100%;
    font-size: .8em;
    color: #647d96;
}

.footer-card {
    display: block;
    max-width: 120px;
    width: 90%;
    margin-bottom: 1em;
    margin-top: 1em;
}

</style>
