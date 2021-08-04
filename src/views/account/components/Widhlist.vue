<template>
  <div>
    <div class="flex flex-wrap">
      <div class="flex_33"> </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import image6 from '/@/assets/images/product-6.jpeg';
  import image10 from '/@/assets/images/product-10.jpeg';
  import image32 from '/@/assets/images/product-32.jpeg';
  import image7 from '/@/assets/images/product-7.jpeg';
  import image11 from '/@/assets/images/product-11.jpeg';

  declare interface Widhlist {
    image?: unknown;
    name?: string;
    price?: string | number;
    countPrice?: string | number;
    tagText?: string;
    selectText?: string;
  }

  export default defineComponent({
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

      return {
        widhlist
      };
    }
  });
</script>

<style lang="scss" scoped>
  .flex_33 {
    flex: 0 0 33.33333333333333333%;
  }
</style>
