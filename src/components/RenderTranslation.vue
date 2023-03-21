<template>
    <span v-if="isTranslated">
        {{ translate() }}
    </span>
    <span v-else>
        <slot></slot>
    </span>
</template>
<script>
    import translations from "@/translations.json"
    import renderTranslation from "@/utils/renderTranslation"
    export default {
        props: {
            numeric: Boolean
        },
        computed: {
            isTranslated() {
                return this.$store.state.isTranslated
            }
        },
        methods: {
            renderTranslation,
            translate() {
                const content = this.$slots.default()[0].children.trim()
                if (this.numeric ) {
                    return renderTranslation(content, this.$store.state.isTranslated)
                }
                return translations[content.toLowerCase()] ?? content
                
            }
        }
    }
</script>