<template>
  <div class="border-t border-gray-200">
    <nav class="py-5 px-4">
      <div class="container mx-auto">
        <ul class="flex items-center text-sm text-gray-500">
          <li class="mr-3 cursor-pointer">Home</li>
          <li class="mr-3 flex items-center">
            <RightOutlined class="align-middle text-xs" />
          </li>
          <li>My Account</li>
        </ul>
      </div>
    </nav>

    <div class="pt-8 pb-24 px-0">
      <div class="text-3xl mb-16 font-bold text-center px-4">My Account</div>
      <div class="mx-auto flex container px-4">
        <div class="flex-1">
          <ul class="left-nav-box" style="width: 253px">
            <li
              v-for="item in navList"
              :key="item.name"
              :class="activeTab == item.name ? 'text-black' : 'text-gray-400'"
              @click="setActiveTab(item.name)"
              class="
                py-5
                border-b border-gray-200
                text-center
                flex
                items-center
                justify-between
                text-base
                cursor-pointer
                hover:text-black
              "
            >
              <span>{{ item.name }}</span>
              <span><RightOutlined /></span>
            </li>
          </ul>
        </div>

        <div class="flex_760">
          <component :is="activeComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { RightOutlined } from '@ant-design/icons-vue';
  import { computed, defineComponent, reactive, Ref, ref } from 'vue';
  import Orders from './components/Orders.vue';
  import Widhlist from './components/Widhlist.vue';
  import personalInfo from './components/personalInfo.vue';
  import Addresses from './components/Addresses.vue';
  import paymentMethods from './components/paymentMethods.vue';
  export default defineComponent({
    components: {
      RightOutlined,
      Orders,
      Widhlist,
      personalInfo,
      Addresses,
      paymentMethods
    },
    setup() {
      let navList = reactive([
        {
          name: 'Orders',
          component: 'Orders'
        },
        {
          name: 'Widhlist',
          component: 'Widhlist'
        },
        {
          name: 'Personal Info',
          component: 'personalInfo'
        },
        {
          name: 'Addresses',
          component: 'Addresses'
        },
        {
          name: 'Payment Methods',
          component: 'paymentMethods'
        },
        {
          name: 'Logout',
          component: 'Logout'
        }
      ]);

      let activeTab: Ref<string> = ref('Widhlist');
      let setActiveTab = (val: string) => {
        activeTab.value = val;
      };

      let activeComponent = computed(() => {
        return navList.filter((item) => item.name == activeTab.value).shift()
          ?.component;
      });

      return {
        navList,
        activeTab,
        setActiveTab,
        activeComponent
      };
    }
  });
</script>

<style lang="scss" scoped>
  .flex_760 {
    flex: 0 0 760px;
  }
  .left-nav-box {
    > li {
      &:first-child {
        border-top: 1px solid #e5e7eb;
      }
    }
  }
</style>
