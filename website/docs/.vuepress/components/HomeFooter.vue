<template>
    <footer class="footer">
        A product by:
        <a href="https://www.jbaysolutions.com/" target="_blank" rel="noopener" class="footer-card">
            <img src="assets/img/logo-jbay.png" />
        </a>
    </footer>
</template>

<script>
export default {
    name: "HomeFooter"
}
</script>

<style scoped>
.footer {
    border-top: 1px solid #eaecef;
    margin-top: 1em;
}

.footer-card {
    display: block;
    /*max-width: 100px;*/
    width: 90%;
    padding: 1em 1.5em;
    border-radius: 5px;
    margin-bottom: 1em;
    margin-top: 0.5em;
    margin-left: auto;
    margin-right: auto;
}
</style>
