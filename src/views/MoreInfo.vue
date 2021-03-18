<template>
    <div>
        <div class="contact-info">
            <h4>{{contact.fullName}}</h4>
            <div class="info-wrapper">
                <div class="image">
                    <img class="more-info-img" :src="contact.profile">
                </div>
                <div class="detailed-info">
                    <h2>Contact Info</h2>
                    <div class="detail-wrapper">
                        <p>Phone: {{contact.phone}}</p>
                        <p>Email: {{contact.email}}</p>
                        <p>Address: {{contact.street}}, {{contact.city}}</p>
                        <p>In Favorites: {{contact.favorite}}</p>
                    </div>

                    <h2>Personal</h2>
                    <div class="detail-wrapper">
                        <p>Job Description: {{contact.job}}</p>
                        <p>Company: {{contact.company}}</p>
                        <p>University: {{contact.university}}</p>
                        <p>First Language: {{contact.language}}</p>
                        <p>Brithday: {{contact.birthday}}</p>
                    </div>

                    <h2>Other</h2>
                    <div class="detail-wrapper">
                        <p>Dream Car: {{contact.carYear}}, {{contact.carModel}}</p>
                        <p>Favorite Movie: {{contact.movie}}</p>
                        <p>Favorite Animal: {{contact.animal}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script>
export default {
    name: 'MoreInfo',
    data() {
        return {
        }
    },
    created() {
        this.contact = this.$root.$data.contacts.find(contact => contact.id === parseInt(this.$route.params.id));
    },
    methods: {
    }
}
</script>

<style>
    h2 {
        text-align: center;
        font-size: 20px;
        padding-top: 20px;
        border-top: solid 2px white;
        font-size: 25px;
    }

    h4 {
        font-size: 30px;
        text-align: center;
        padding: 30px;
    }

    .image {
        display: flex;
        justify-content: center;
    }

    img {
        width: 100px;
        margin: 10px;
        padding-bottom: 10px;
    }

    .detail-wrapper {
        padding: 0 50px;
    }

    /* Mobile Styles */
@media only screen and (max-width: 720px) {
}

/* Desktop and Tablet Styles */
@media only screen and (min-width: 721px) {
    .info-wrapper {
        display: flex;
        align-items: center;
    }

    h2 {
        border-top: none;
    }

    h4 {
        border-bottom: solid 2px white;
    }

    .image {
        width: 50%;
    }

    .more-info-img {
        width: 300px;
    }
}
</style>