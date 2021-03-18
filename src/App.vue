<template>
    <div id="app">
        <div class="header">
            <h1>Contacts App</h1>
            <div class="links">
                <router-link to="/">
                    <div class="link">
                        <h3>All Contacts</h3>
                    </div>
                </router-link>
                <router-link to="/favorites">
                    <div class="link">
                        <h3>Favorites</h3>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="content">
            <router-view />
        </div>
        <div class="footer">
            <a href="https://github.com/Johnben5/cs260project3">Link to Github</a>
        </div>
    </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  background-color: #333333;
}

.header, .footer {
    text-align: center;
    background-color: #262626;
}

.footer {
    padding: 10px;
}

.links {
    display: flex;
    justify-content: center;
}

h1 {
    padding-top: 35px;
    font-size: 50px;
}

.link {
    padding: 15px;
}

p, a {
    color: white;
}

.no-favorites {
        text-align: center;
        margin: 20%;
    }

/* Contact Lists */
.contacts, .favorites {
    text-align: center;
}

.contact-wrapper {
    border-top: solid 2px white;
    padding: 25px 0 30px 0;
}

h3 {
    margin: 10px;
}

button {
    margin: 5px;
}

/* Mobile Styles */
@media only screen and (max-width: 720px) {
}

/* Desktop and Tablet Styles */
@media only screen and (min-width: 721px) {

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 5px;
    }

    .grid-image, .grid-name, .grid-phone, .grid-email {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    .no-favorites {
        font-size: 30px;
    }
}
</style>
