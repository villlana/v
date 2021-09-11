<template>
  <div class="nav-right social-icons">
    <button class="btn-theme btn-theme-dark">
      <i @click="toggleTheme('dark')" class="material-icons-outlined"> dark_mode </i>
    </button>
    <button class="btn-theme btn-theme-primary">
      <i @click="toggleTheme('primary')" class="material-icons-outlined"> light_mode </i>
    </button>
    
    <a href="https://twitter.com/thevilllana" rel="noopener" target="_blank">
      <img
        class="light"
        src="~static/social/twitter_48px.png"
        width="24"
        height="24"
        alt="twitter"
      />
      <img
        class="dark"
        src="~static/social/twitter_w_48px.png"
        width="24"
        height="24"
        alt="twitter"
      />
    </a>

    <a href="https://discord.gg/jAAukGQQYA" rel="noopener" target="_blank">
      <img
        class="light"
        src="~static/social/discord_48px.png"
        width="24"
        height="24"
        alt="discord"
      />
      <img
        class="dark"
        src="~static/social/discord_w_48px.png"
        width="24"
        height="24"
        alt="discord"
      />
    </a>

    <a
      href="https://www.pixiv.net/en/users/53098578"
      rel="noopener"
      target="_blank"
    >
      <img
        class="light"
        src="~static/social/pixiv_48.png"
        width="24"
        height="24"
        alt="pixiv"
      />
      <img
        class="dark"
        src="~static/social/pixiv_w_48px.png"
        width="24"
        height="24"
        alt="pixiv"
      />
    </a>

    <a href="https://patreon.com/villlana" rel="noopener" target="_blank">
      <img
        class="patreon light"
        src="~static/social/patreon_color_100px.png"
        width="40"
        height="38"
        alt="patreon"
      />
      <img
        class="patreon dark"
        src="~static/social/patreon_w_100px.png"
        width="40"
        height="38"
        alt="patreon"
      />
    </a>
  </div>
</template>

<style>
.primary img.dark {
  display: none;
}
.dark img.light {
  display: none;
}
.social-icons a {
  text-decoration: none;
}

.primary .btn-theme-primary {
  display: none;
}
.dark .btn-theme-dark {
  display: none;
}
</style>

<script>
import { setTheme } from '~/plugins/variables'
export default {
  methods: {
    toggleTheme(theme) {
      setTheme(theme)
    }
  }
}
</script>