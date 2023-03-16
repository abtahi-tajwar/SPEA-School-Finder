<template>
    <div v-if="isTranslated && arabic && arabic !== ''">
        {{ renderArabic(arabic) }}
    </div>
    <div v-else>
        {{ english }} 
    </div>
</template>
<script>
    import renderTranslation from "@/utils/renderTranslation"
    export default {
        props: {
            english: String, 
            arabic: String, 
            isNumeric: Boolean
        },
        computed: {
            isTranslated() {
                return this.$store.state.isTranslated
            }
        },
        methods: {
            renderArabic(text) {
                if (this.isNumeric) {
                    return renderTranslation(text)
                }
                return text
            }
        }
    }
</script>