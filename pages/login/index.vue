<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center px-8"
  >
    <div
      class="max-w-screen-xl sm:m-4 bg-white shadow rounded-lg md:rounded-2xl flex justify-center flex-1"
    >
      <!-- {/* Left Section */} -->
      <div class="lg:w-1/2 xl:w-5/12 p-10 md:p-14">
        <div class="flex gap-x-2">
          <!-- {/* Logo */} -->
          <img
            src="/public/images/logo1.png"
            width="38"
            height="38"
            alt="logo"
          />
          <span class="text-3xl font-medium font-outfit text-f_secondary">
            mamae
          </span>
        </div>
        <div class="mt-6 flex flex-col items-center">
          <div class="w-full flex-1 mt-8">
            <div class="flex justify-center items-center">
              <!-- {error &&
              <p class="text-red-500 mb-5 text sm">{error}</p>
              } -->
            </div>
            <form onSubmit="{handleSubmit}" class="mx-auto max-w-xs">
              <input
                type="email"
                placeholder="Email"
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                type="password"
                placeholder="Password"
                class="w-full mt-4 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <button
                type="submit"
                class="mt-10 tracking-wide font-semibold bg-primary text-white-500 w-full py-4 rounded-lg hover:bg-h_primary transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span class="ml-2 text-white font-bold"> Login </span>
              </button>
            </form>
            <div class="my-6 -mt-[1px] border-b text-center">
              <div
                class="px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Or
              </div>
            </div>

            <div class="flex flex-col -mt-1 items-center mx-auto max-w-xs">
              <button
                type="button"
                class="text-white tracking-wide font-semibold bg-primary text-white-500 w-full py-4 rounded-lg hover:bg-h_primary transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <Icon
                  name="flat-color-icons:google"
                  size="24"
                  class="px-1 py-1 rounded-full bg-white"
                />
                <span class="ml-2">Sign In with Google</span>
              </button>
            </div>
            <p class="mt-6 text-xs text-gray-600 text-center">
              Don't have an account? Sign up
              <NuxtLink href="/register" class="text-[#23bebe]">
                here
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
      <!-- {/* Right Section */} -->
      <div
        class="flex-1 bg-secondary text-center hidden lg:flex rounded-r-lg md:rounded-r-2xl"
      >
        <div
          class="m-12 xl:m-16 w-full bg-auth-background bg-contain bg-center bg-no-repeat"
        ></div>
      </div>
    </div>
  </div>
</template>
