<script setup>

</script>

<template>
  <div class="test"><p>Login</p></div>
</template>

<style lang="scss" scoped>
@import '~/styles/variables.scss';

.test {
  margin-top: 20px;
  width: 240px;
  height: 60px;
  background-image: linear-gradient(98deg, #c48eff 0%, #9155fd 94%);
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
}
p {
  font-size: $font-size;
  color: hsla(0, 0%, 100%, .76);
}
</style>
