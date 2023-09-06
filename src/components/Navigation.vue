<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="HomeB">
        <img src="../assets/icon.png" alt=""/>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name : 'Home'}">Home</router-link></li>
        <li><router-link class="link" :to="{ name : 'About'}">About</router-link></li>
        <li><router-link class="link" :to="{ name : 'Portfolio'}">Portfolio</router-link></li>
        <li><router-link class="link" :to="{ name : 'Contact'}">Contact</router-link></li>
      </ul>
      <div class="icon">
        <i class="fa-solid fa-bars" @click="toggleMobileNav" v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{ name : 'Home'}">Home</router-link></li>
          <li><router-link class="link" :to="{ name : 'About'}">About</router-link></li>
          <li><router-link class="link" :to="{ name : 'Portfolio'}">Portfolio</router-link></li>
          <li><router-link class="link" :to="{ name : 'Contact'}">Contact</router-link></li>
        </ul>
      </transition>
    </nav>  
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: null,
      mobile: false,
      mobileNav: false,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.CheckScreen);
    this.CheckScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }, 
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      console.log("I was clicked!")
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    CheckScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 720) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgba(255, 255, 255, 0);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color: #fffcf2;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    margin-top: -6rem;
    margin-bottom: -12rem;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #fffcf2;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 25px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      &:hover{
      color: #48acf0;
      border-color: #48acf0;
      }
    }



    .HomeB {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        transition: .5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
    }

    .icon i {
      cursor: pointer;
      font-size: 24px;
      transition: .8s ease all;
    }

    .icon-active {
      transform: rotate(180deg);
    }
    
    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fffcf2;
      top: 0;
      left: 0;
    }

    .dropdown-nav li {
      margin-left: 0;
    }

    .dropdown-nav .link {
      color: rgb(0, 0, 0);
    }

    .mobile-nav-enter-active,
    .mobile-nav-enter-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .HomeB {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}
</style>
