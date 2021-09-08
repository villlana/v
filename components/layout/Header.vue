<template>
  <div>
    <nav class="d-flex w-100 navbar">
      <div class="nav-left logo">
        <NuxtLink
          to="/">
          <img src="~static/logo_black.png" height="75" width="100" alt="logo" />
        </NuxtLink>
      </div>

      <SearchInput />

      <div class="nav-right social-icons">
        <a href="https://twitter.com/thevilllana" target="_blank">
          <img
            src="~static/social/twitter_48px.png"
            width="24"
            height="24"
            alt="twitter"
          />
        </a>

        <a href="https://discord.gg/jAAukGQQYA" target="_blank">
          <img
            src="~static/social/discord_48px.png"
            width="24"
            height="24"
            alt="discord"
          />
        </a>

        <a href="https://www.pixiv.net/en/users/53098578" target="_blank">
          <img
            src="~static/social/pixiv_48.png"
            width="24"
            height="24"
            alt="pixiv"
          />
        </a>

        <a href="https://patreon.com/villlana" target="_blank">
          <img
            class="patreon"
            src="~static/social/patreon_color_100px.png"
            width="40"
            height="38"
            alt="patreon"
          />
        </a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.navbar {
  min-height: 96px;
  border-bottom: 1px solid #ebebeb;
}

.nav-left {
  margin-left: 15px;
  @media (max-width: 750px) {
    width: 100%;
    text-align: center;
  }
}
.nav-right {
  @media (max-width: 750px) {
    width: 100%;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

.social-icons img {
  cursor: pointer;
  margin-right: 20px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.65;
  }
  &.patreon {
    position: relative;
    top: 8px;
  }
}
.social-icons ::after {
  @media (min-width: 751px) {
    content: "";
    width: 1px;
    height: 40px;
    position: absolute;
    background: #f2f2f2;
    top: 28px;
    margin-left: -6px;
  }
}
</style>
