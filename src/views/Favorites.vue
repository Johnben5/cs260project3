<template>
    <div class="wrapper">
        <p class="no-favorites" v-show="favorites.length === 0">You do not have any contacts in your favorites list</p>
        <div class="favorites">
            <div v-for="contact in favorites" :key="contact.id">
                <div class="contact-wrapper">
                    <div class="contact-grid">
                        <div class="grid-image">
                            <img :src="contact.profile">
                        </div>
                        <h3 class="grid-name">{{contact.fullName}}</h3>
                        <p class="grid-phone">{{contact.phone}}</p>
                        <p class="grid-email">{{contact.email}}</p>
                    </div>
                    <button @click="removeFavorite(contact)" class="auto">Remove from Favorites</button>
                    <router-link :key="contact.id" :to="'/moreinfo/' + contact.id">
                        <button class="auto">More Info</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Favorites',
    computed: {
        favorites() {
            return this.$root.$data.favorites;
        }
    },
    methods: {
        removeFavorite(contact) {
            var contactIndex = 0;
            contact.favorite = "true";
            for (let person of this.$root.$data.favorites) {
                if (person.id === contact.id) {
                    this.$root.$data.favorites.splice(contactIndex, 1);
                    contact.favorite = "false";
                    break;
                }
                contactIndex++;
            }
            
        }
    }
}
</script>