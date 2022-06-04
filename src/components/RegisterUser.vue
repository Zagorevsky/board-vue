<template>
  <div>
    <h4>Регистрация</h4>
    <form>
      <label for="name">Имя</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus>
      </div>
      <label for="email">E-Mail</label>
      <div>
        <input id="email" type="email" v-model="email" required>
      </div>
      <label for="password">Пароль</label>
      <div>
        <input id="password" type="password" v-model="password" required>
      </div>
      <label for="password-confirm">Повторить пароль</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>
      <div>
        <button type="submit" @click="handleSubmit">
          Регистрация
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["nextUrl"],
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()

      if (this.password === this.password_confirmation && this.password.length > 0) {
        let url = "//localhost:3000/register"
        this.$http.post(url, {
          name: this.name,
          email: this.email,
          password: this.password,
          is_admin: this.is_admin
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
                this.$router.push('/')
              }
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        this.password = ""
        this.passwordConfirm = ""

        return alert("Пароли не совпадают")
      }
    }
  }
}
</script>

<style scoped>
</style>
