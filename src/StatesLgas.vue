<template>
    <div>
        <select v-model="state" id="state">
            <option>Select State</option>
            <option v-for="item in states">{{ item.state.name }}</option>
        </select>
        <select v-model="lga" id="lga">
            <option>Select LGA</option>
            <option v-for="lga in lgas">{{ lga.name }}</option>
        </select>
    </div>
</template>

<script>
    import states from './data.json'

    export default {

        data() {
            return {
                states: states,
                lgas: [],
                state: 'Select State',
                lga: 'Select LGA'
            }
        },

        watch: {
            // Store the Lgas base on the state selected.
            state: function(e) {
                if(e) {
                    this.$emit('state', e) // Communicates the selected state to the parent component.

                    return this.states.filter(item => {
                        if(item.state.name === e) {
                            this.lgas = item.state.locals
                        }
                    })
                }
            },

            lga: function(e) {
                if(e) {
                    this.$emit('lga', e) // Communicates the selected LGA to the parent component.

                }
            }
        }

    }
</script>