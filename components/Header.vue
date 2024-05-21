<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {
      showMenu: false,
      navbar: [
        {
          id: 1,
          name: "Home",
          link: "/",
        },
        {
          id: 2,
          name: "Services",
          link: "/services",
        },
        {
          id: 3,
          name: "About",
          link: "/about",
        },
        {
          id: 4,
          name: "Contact",
          link: "/contact",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
});
</script>

<template>
  <header class="fixed w-screen h-16 bg-white shadow-sm">
    <div class="flex items-center justify-between px-8 lg:px-24 py-4">
      <!-- {/* Logo */} -->
      <div class="flex gap-x-1 justify-center items-center">
        <img src="/public/images/logo1.png" alt="logo" width="38" height="38" />
        <h3 class="font-outfit font-medium text-xl">mamae</h3>
      </div>
      <!-- {/* Menu */} -->
      <div class="hidden lg:block">
        <div class="flex flex-row gap-x-16">
          <div v-for="item in navbar">
            <NuxtLink
              :key="item.id"
              :to="item.link"
              class="font-manrope font-medium text-f_secondary hover:text-primary text-sm"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- {/* Login Button */} -->
      <div class="hidden lg:block">
        <NuxtLink to="/login">
          <button
            class="bg-primary hover:bg-secondary text-white font-manrope font-semibold text-sm px-8 py-2 rounded-full"
          >
            Login
          </button>
        </NuxtLink>
      </div>
      <!-- {/* Toggle Menu */} -->
      <button class="lg:hidden" @click="toggleMenu">
        <Icon name="charm:menu-hamburger" class="text-f_primary text-2xl" />
      </button>
    </div>
    <div
      class="-my-14 backdrop-blur-xl lg:hidden"
      :class="{ hidden: !showMenu }"
    >
      <div
        class="flex float-end bg-white w-1/2 h-64 mx-4 my-2 rounded-md shadow-lg"
      >
        <button @click="toggleMenu" class="absolute top-0 right-0 mt-3 mr-8">
          <Icon name="lets-icons:close-round" class="text-f_primary text-2xl" />
        </button>
        <div class="flex flex-col px-8 gap-y-6">
          <div v-for="item in navbar">
            <NuxtLink
              :key="item.id"
              :to="item.link"
              @click="toggleMenu"
              class="font-manrope font-medium text-f_secondary hover:text-primary"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <button
            class="bg-primary hover:bg-secondary text-white font-manrope font-semibold text-sm px-8 py-2 rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
