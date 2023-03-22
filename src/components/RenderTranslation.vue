<template>
    <span :class="arabicTextClass" v-if="isTranslated">
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
        data () {
            return {
                arabicTextClass: ''
            }
        },
        methods: {
            renderTranslation,
            translate() {
                const content = this.$slots.default()[0].children.trim()
                if (this.numeric ) {
                    this.arabicTextClass = 'arabic-text';
                    return renderTranslation(content, this.$store.state.isTranslated)
                }
                if (translations[content.toLowerCase()]) this.arabicTextClass = 'arabic-text';
                return translations[content.toLowerCase()] ?? content
                
            }
        }
    }
</script>