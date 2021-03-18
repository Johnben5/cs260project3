<template>
    <div class="wrapper">
        <div class="contacts">
            <div v-for="contact in contacts" :key="contact.id">
                <div class="contact-wrapper">
                    <div class="contact-grid">
                        <div class="grid-image">
                            <img :src="contact.profile">
                        </div>
                        <h3 class="grid-name">{{contact.fullName}}</h3>
                        <p class="grid-phone">{{contact.phone}}</p>
                        <p class="grid-email">{{contact.email}}</p>
                    </div>
                    <button v-show="contact.favorite === 'false'" @click="addFavorite(contact)" class="auto">Add to Favorites</button>
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
    name: 'ContactList',
    props: {
        contacts: Array
    },
    methods: {
        addFavorite(contact) {
            for (let person of this.$root.$data.favorites) {
                if (person.id === contact.id) {
                    return;
                }
            }
            contact.favorite = "true";
            this.$root.$data.favorites.push(contact);
        }
    }
}
</script>

<style>
    
</style>