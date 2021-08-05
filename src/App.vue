<template>
  <a-back-top />
  <router-view />
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { notification } from 'ant-design-vue';
  import 'ant-design-vue/lib/notification/style/index.css';

  export default defineComponent({
    name: 'App',
    setup() {
      // 欢迎弹框
      let openWelcomeNotify = (): void => {
        let week = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ];
        notification['success']({
          message: 'Welcome',
          description: `Welcome to Shopper, Today Is ${
            week[new Date().getDay()]
          }`
        });
      };

      onMounted(() => {
        openWelcomeNotify();
      });
    }
  });
</script>
