<template>
    <div class="auth-form">
            <h1>Sign Up</h1>
            <router-link :to="{ name: 'login'}"><h2>Already a Member?</h2></router-link>

        <form @submit.prevent="onSubmit(username, password)">
            <fieldset>
                <input type="text" placeholder="Name" v-model="user.name"/>
            </fieldset>

            <fieldset>
                 <input type="text" placeholder="Username" v-model="user.username"/>
            </fieldset>

            <fieldset>
                 <input type="email" placeholder="Email" v-model="user.email"/>
            </fieldset>

            <fieldset>
                 <input type="password" placeholder="Password" v-model="user.password"/>
            </fieldset>

            <fieldset>
                 <input type="text" placeholder="Date of Birth" v-model="user.dob"/>
            </fieldset>

            <fieldset>
                 <input type="number" placeholder="Phone Number" v-model="user.ph_number"/>
            </fieldset>

            <div class="b-h-w-g">
            <fieldset>
                 <input type="text" placeholder="Blood group" v-model="user.blood_grp"/>
            </fieldset>

            <fieldset>
                 <input type="text" placeholder="Height" v-model="user.height"/>
            </fieldset>

            <fieldset>
                 <input type="text" placeholder="Weight" v-model="user.weight"/>
            </fieldset>
            
            <fieldset>
                 <input type="text" placeholder="Gender" v-model="user.gender"/>
            </fieldset>
            </div>

            <fieldset>
                <input type="checkbox" class="checkbox">
            </fieldset>

            <input type="submit" name="login" id="submit" value="SIGNUP">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: null,
                username: null,
                email: null,
                password: null,
                dob: null,
                ph_number: null,
                blood_grp: null,
                height: null,
                weight: null,
                gender: null,
                user_role: null,
            }
        }
    }
}
</script>

<style scoped>
    .auth-form {
        width: 35%;
        margin: 0 auto;
        text-align: center;
    }

    .auth-form > h1 {
        font-family: 'Roboto', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .auth-form > a {
        color: #56893c;
        font-family: 'Raleway', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    form {
        padding-top: 30px;
    }

    .checkbox {
        height: 20px;
    }

    .b-h-w-g {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .b-h-w-g > fieldset {
        width: 24%;
    }
</style>