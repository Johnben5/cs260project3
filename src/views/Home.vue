<template>
    <div>
        <div class="wrapper">
            <div class="search">
                <form class="pure-form" >
                    <i class="fas fa-search"></i><input v-model="searchText" placeholder="search"/>
                </form>
            </div>
        </div>
        <ContactList :contacts="contacts" />
    </div>
</template>

<script>
import ContactList from "../components/ContactList.vue"
export default {
    name: 'Home',
    components: {
    ContactList
    },
    data() {
        return {
            searchText: '',
        }
    },
    computed: {
        contacts() {
            return this.$root.$data.contacts.filter(contact => contact.fullName.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
        }
    },
    contacts() {
        return this.$root.$data.contacts;
    },
}
</script>

<style scoped>

    .search {
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 50%;
        margin: 30px auto;
    }

    input {
        display: table-cell;
        font-size: 20px;
        border: none !important;
        box-shadow: none !important;
        width: 100%;
        height: 40px;
    }
</style>