<template>
  <div>
    <nav class="d-flex w-100 justify-content-between navbar">
      <div class="nav-left logo">
        <img src="~static/logo_1.png" height="75" width="100" alt="logo" />
      </div>
      
      <SearchInput />
      <div class="nav-right social-icons">
        <img src="~static/social/twitter_48px.png" width="24" height="24" alt="twitter" />
        <img src="~static/social/discord_48px.png" width="24" height="24" alt="discord" />
        <img src="~static/social/patreon_48px.png" width="30" height="30" alt="patreon" />
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  .navbar {
    min-height: 96px;
    border-bottom: 1px solid #ebebeb;
  }

  .nav-left {
    margin-left: 15px;
  }

  .social-icons img {
    cursor: pointer;
    margin-right: 10px;
    filter: grayscale(1);
    transition: all 0.3s;
    &:hover {
      filter: grayscale(0);
    }
  }
</style>
