<template>
  <div class="nav-wrapper">
    <nav class="d-flex w-100 navbar">
      <div class="nav-left logo">
        <NuxtLink to="/">
          <img
            class="primary"
            src="~static/logo_black.png"
            height="75"
            width="100"
            alt="logo"
          />
          <img
            class="dark"
            src="~static/logo_white.png"
            height="75"
            width="100"
            alt="logo"
          />
        </NuxtLink>
      </div>

      <SearchInput class="show-desk" />

      <NavRight class="show-desk" />

      <NavRight class="show-mobile" />

      <SearchInput class="show-mobile" />
    </nav>
  </div>
</template>

<style lang="scss">
.nav-wrapper {
  background: var(--navbar-background);
}
.navbar {
  min-height: 96px;
  border-bottom: 1px solid var(--navbar-border);
}

.primary img.dark {
  display: none;
}
.dark img.primary {
  display: none;
}

.show-desk,
.show-mobile {
  display: none;
}
.show-desk {
  @media (min-width: 751px) {
    display: inline-block;
  }
}
.show-mobile {
  @media (max-width: 750px) {
    display: inline-block;
  }
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
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

.social-icons.show-desk {
  margin-top: -5px;
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
.social-icons a::after {
  @media (min-width: 751px) {
    content: '';
    width: 1px;
    height: 40px;
    position: absolute;
    background: var(--social-icons-border);
    top: 28px;
    margin-left: -9px;
  }
}

.btn-theme::after {
  @media (min-width: 751px) {
    content: '';
    width: 1px;
    height: 40px;
    position: absolute;
    background: var(--social-icons-border);
    top: -8px;
    margin-left: 9px;
  }
}

.primary .social-icons a::after {
  @media (min-width: 751px) {
    margin-left: -11px;
  }
}
.social-icons a:last-child:after {
  display: none;
}
</style>
