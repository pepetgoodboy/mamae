<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <main class="w-full pt-10">
    <!-- {/* Section Left */} -->
    <div class="xl:flex xl:px-10 xl:py-24">
      <div class="flex flex-col justify-center mt-10 xl:mt-1">
        <div class="px-8 gap-y-3">
          <h2 class="text-4xl md:text-5xl text-center font-outfit">
            Refreshed <span class="font-medium">Threads</span> , Relaxed
            <span class="font-medium">Minds</span>
          </h2>
          <h2 class="text-4xl md:text-5xl text-center font-outfit">
            Your Laundry, Our
            <span class="font-medium underline decoration-primary">
              Priority.
            </span>
          </h2>
        </div>
        <div class="mt-8 xl:mt-12 px-4 md:px-10 lg:px-14">
          <p class="text-center text-xl font-outfit text-f_secondary">
            Nikmati kenyamanan dan kepercayaan dengan layanan laundry kami yang
            handal. Pakaian bersih adalah janji kami untuk Anda!
          </p>
        </div>
      </div>
      <!-- {/* Section Right */} -->
      <div class="mt-10 xl:mt-1 flex justify-center xl:mr-8">
        <img
          src="/public/images/laundry1.svg"
          alt="Section Image"
          class="w-[550px] xl:w-[920px]"
        />
      </div>
    </div>
  </main>
</template>
