<template>
  <div>
    <h4>Авторизация</h4>
    <form>
      <label for="email">E-Mail</label>
      <div>
        <input id="email" type="email" v-model="email" required autofocus>
      </div>
      <div>
        <label for="password">Пароль</label>
        <div>
          <input id="password" type="password" v-model="password" required>
        </div>
      </div>
      <button type="submit" @click="handleSubmit">
        Войти
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      if (this.password.length > 0) {
        this.$http.post('//localhost:3000/login', {
          email: this.email,
          password: this.password
        })
          .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('jwt', response.data.token)

            if (localStorage.getItem('jwt') != null) {
              this.$emit('loggedIn')
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl)
              }
              else {
                this.$router.push('dashboard')
              }
            }
          })
          .catch(function (error) {
            console.error(error.response);
          });
      }
    }
  }
}
</script>