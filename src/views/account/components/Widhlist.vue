<template>
  <div>
    <div class="grid grid-cols-3">
      <div
        v-for="item in widhlist"
        :key="item.name"
        class="cursor-pointer px-4 mb-8"
      >
        <div
          :style="{ backgroundImage: `url(${item.image})`, height: '262.31px' }"
          class="bg-no-repeat bg-cover bg-center relative group overflow-hidden"
        >
          <CloseOutlined
            class="
              absolute
              top-4
              right-6
              bg-white
              z-10
              text-black
              rounded-full
              w-9
              h-9
              flex
              items-center
              justify-center
              hover:bg-red-400 hover:text-white
            "
          />

          <div
            class="absolute left-0 top-4 bg-black text-white px-3 py-1 text-xs"
            v-if="item.tagText"
            >{{ item.tagText }}</div
          >

          <div
            class="
              absolute
              inset-x-0
              bottom-0
              py-2
              px-3
              flex
              items-center
              justify-center
              bg-black
              text-white
              translate-y-full
              invisible
              transform
              transition-all
              group-hover:visible group-hover:translate-y-0
            "
          >
            <span class="iconfont icon-eye1 mr-2"></span>
            <span>Quick View</span>
          </div>
        </div>

        <div class="p-6 text-center text-base">
          <div class="font-bold">{{ item.name }}</div>
          <div>
            <div v-if="item.countPrice">
              <span class="mr-2 line-through text-gray-400 font-bold">{{
                '$' + item.price
              }}</span>
              <span class="text-red-400 font-bold">{{
                '$' + item.countPrice
              }}</span>
            </div>
            <div v-else-if="item.price" class="text-gray-400 font-bold">{{
              '$' + item.price
            }}</div>
            <div v-else class="text-red-400 font-bold">{{
              item.selectText
            }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-right">
      <a-pagination v-model:current="current" :total="50" show-less-items />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, Ref, ref } from 'vue';
  import image6 from '/@/assets/images/product-6.jpeg';
  import image10 from '/@/assets/images/product-10.jpeg';
  import image32 from '/@/assets/images/product-32.jpg';
  import image7 from '/@/assets/images/product-7.jpeg';
  import image11 from '/@/assets/images/product-11.jpeg';
  import { CloseOutlined } from '@ant-design/icons-vue';

  declare interface Widhlist {
    image?: unknown;
    name?: string;
    price?: string | number;
    countPrice?: string | number;
    tagText?: string;
    selectText?: string;
  }

  export default defineComponent({
    components: {
      CloseOutlined
    },
    setup() {
      let widhlist: Widhlist[] = [
        {
          image: image6,
          name: 'Cotton floral print Dress',
          price: '40.00'
        },
        {
          image: image10,
          name: 'Suede cross body Bag',
          price: '85.00',
          countPrice: '49.00',
          tagText: 'SALE'
        },
        {
          image: image32,
          name: 'Cotton leaf print Shirt',
          price: '65.00'
        },
        {
          image: image7,
          name: 'Leather Sneakers',
          selectText: 'Select Options'
        },
        {
          image: image11,
          name: 'Another fine dress',
          price: '99.00'
        }
      ];

      let current: Ref<number> = ref(1);

      return {
        widhlist,
        current
      };
    }
  });
</script>

<style lang="scss" scoped></style>
