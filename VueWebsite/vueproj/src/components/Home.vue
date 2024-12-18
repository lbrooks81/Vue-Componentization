<template>
  <Banner></Banner>
  <Students></Students>
  <Classes></Classes>
  <Dancing></Dancing>
  <Hours></Hours>
  <About></About>
  <Testimonial></Testimonial>
  <Contact></Contact>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Students from "@/components/Students.vue";
import Classes from "@/components/Classes.vue";
import Dancing from "@/components/Dancing.vue";
import Testimonial from "@/components/Testimonial.vue";
import Contact from "@/components/Contact.vue";
import Hours from "@/components/Hours.vue"
import About from "@/components/About.vue";

export default {
  name: "Home",
  components: {About, Hours, Contact, Testimonial, Dancing, Classes, Students, Banner}
}
</script>



<style scoped>

</style>