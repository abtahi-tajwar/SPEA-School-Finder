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
                if (this.$el) {
                    if (this.numeric ) {
                        return renderTranslation(this.$el.innerHTML.trim(), this.$store.state.isTranslated)
                    }
                    return translations[this.$el.innerHTML.trim().toLowerCase()] ?? this.$el.innerHTML
                }
            }
        }
    }
</script>