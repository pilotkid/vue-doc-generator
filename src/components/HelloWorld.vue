<template>
  <v-container>
    <h1 :color="color">{{msg}}</h1>
    <h2 :color="color">{{subheading}}</h2>
    <v-btn @click="clickEvent">Click me</v-btn>
    <v-spacer></v-spacer>
    <v-btn :color="color2">I am also a button!</v-btn>
  </v-container>
</template>

<script>
/**
 * This is the default vue component that is shown
 * @displayName Hello World Component
 */
export default {
  name: "HelloWorld",
  props: {
    /**
     * This is the h1 tag header
     */
    msg: {
      default: "Hello World"
    },
    /**
     * This is the secondary header
     */
    subheading: {
      default: "I am a sub heading"
    },
    /**
     * This is the color we want our text to show up as
     */
    color: {
      default: "#000"
    },
    /**
     * This is the color of the second button, and it is really great
     */
    color2: {
      default: "primary"
    }
  },
  methods: {
    clickEvent() {
      /**
       * Success event.
       *
       * @event success
       */
      this.$emit("BtnClicked");
    }
  }
};
</script>

<style>
</style>