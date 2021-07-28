<template>
  <div>
    <Discount-Bar />
    <div class="mt-4 flex top-image-wrapper">
      <div
        class="flex-1 flex justify-center items-center relative cursor-pointer"
      >
        <div class="text-4xl font-bold text-white z-10">Women</div>
        <div
          class="
            absolute
            bottom-8
            bg-white
            py-4
            z-10
            image-btn
            text-sm
            font-semibold
          "
        >
          <span>Shop Women</span>
          <span class="iconfont icon-cc-arrow-right"></span>
        </div>
      </div>
      <div
        class="flex-1 flex justify-center items-center relative cursor-pointer"
      >
        <div class="text-4xl font-bold text-white z-10">Men</div>
        <div
          class="
            absolute
            bottom-8
            bg-white
            py-4
            z-10
            image-btn
            text-sm
            font-semibold
          "
        >
          <span>Shop Men</span>
          <span class="iconfont icon-cc-arrow-right"></span>
        </div>
      </div>
      <div
        class="flex-1 flex justify-center items-center relative cursor-pointer"
      >
        <div class="text-4xl font-bold text-white z-10">Kids</div>
        <div
          class="
            absolute
            bottom-8
            bg-white
            py-4
            z-10
            image-btn
            text-sm
            font-semibold
          "
        >
          <span>Shop Kids</span>
          <span class="iconfont icon-cc-arrow-right"></span>
        </div>
      </div>
    </div>

    <div class="py-6 top-tag flex border-b border-gray-200">
      <div class="flex-1 flex justify-start">
        <div>
          <span
            class="iconfont icon-car relative text-2xl text-red-400 mr-4"
          ></span>
        </div>
        <div>
          <div class="uppercase text-xs font-bold mb-2">FREE SHIPPING</div>
          <div class="text-sm text-gray-500">From all orders over $100</div>
        </div>
      </div>

      <div class="flex-1 flex justify-start">
        <div>
          <span
            class="iconfont icon-repeat relative text-base text-red-400 mr-4"
          ></span>
        </div>
        <div>
          <div class="uppercase text-xs font-bold mb-2">FREE RETURNS</div>
          <div class="text-sm text-gray-500">Return money within 30 days</div>
        </div>
      </div>

      <div class="flex-1 flex justify-start">
        <div>
          <span
            class="iconfont icon-lock relative text-xl text-red-400 mr-4"
          ></span>
        </div>
        <div>
          <div class="uppercase text-xs font-bold mb-2">SECURE SHOPPING</div>
          <div class="text-sm text-gray-500">You're in safe hands</div>
        </div>
      </div>

      <div class="flex-1 flex justify-start">
        <div>
          <span
            class="iconfont icon-tag relative text-xl text-red-400 mr-4"
          ></span>
        </div>
        <div>
          <div class="uppercase text-xs font-bold mb-2">OVER 10,000 STYLES</div>
          <div class="text-sm text-gray-500">We have everything you need</div>
        </div>
      </div>
    </div>

    <div class="pt-12 new-collection">
      <div class="flex items-center justify-center flex-col">
        <div class="mb-3 text-gray-400">NEW COLLECTION</div>
        <h2 class="mb-4 text-3xl font-bold">Best Picks 2019</h2>
        <p class="mb-10 text-gray-500">
          Appear, dry there darkness they're seas, dry waters thing fly midst.
          Beast, above fly brought Very green.
        </p>
      </div>

      <div class="collection-image-wrapper">
        <div class="flex">
          <div
            class="
              mx-4
              cursor-pointer
              flex flex-col
              justify-center
              items-center
              text-white
              hover-arrow
            "
          >
            <div class="text-2xl font-bold mb-2">Bags Collection</div>
            <div>
              <span>Shop Now</span>
              <span class="iconfont icon-cc-arrow-right relative"></span>
            </div>
          </div>
          <div
            class="
              mx-4
              cursor-pointer
              flex flex-col
              justify-center
              text-gray-700
              hover-arrow-1
              relative
            "
          >
            <div class="absolute left-10">
              <div class="text-2xl font-bold mb-2">Printed men’s Shirts</div>
              <div>
                <span> Shop Now </span>
                <span class="iconfont icon-cc-arrow-right relative"></span>
              </div>
            </div>

            <div
              class="
                absolute
                top-5
                right-5
                text-white
                flex flex-col
                justify-center
                items-center
                bg-red-400
              "
              style="border-radius: 50%; width: 96px; height: 96px"
            >
              <div class="text-xs mb-2">Save</div>
              <div class="mr-0 pr-0 text-2xl font-bold">30%</div>
            </div>
          </div>
        </div>

        <div class="flex mt-7">
          <div
            class="
              mx-4
              cursor-pointer
              flex flex-col
              justify-center
              text-gray-700
              hover-arrow-1
              relative
            "
          >
            <div class="absolute left-10">
              <div class="text-2xl font-bold mb-2">Basic women’s Dresses</div>
              <div>
                <span> Shop Now </span>
                <span class="iconfont icon-cc-arrow-right relative"></span>
              </div>
            </div>
          </div>
          <div
            class="
              mx-4
              cursor-pointer
              flex flex-col
              justify-center
              items-center
              text-white
              hover-arrow
            "
          >
            <div class="text-2xl font-bold mb-2">Sweatshirts</div>
            <div>
              <span> Shop Now </span>
              <span class="iconfont icon-cc-arrow-right relative"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-24 top-month-sellers mx-auto my-0">
      <div class="mb-4 text-center text-3xl font-semibold"
        >Top month Sellers</div
      >

      <div>
        <ul class="flex justify-center items-center text-base mb-10">
          <li
            class="px-4 py-2 cursor-pointer"
            :class="selectTab == 0 ? 'text-red-400 select-tab' : ''"
            @click="setSelectTab(0)"
            >Women</li
          >
          <li
            class="px-4 py-2 cursor-pointer"
            :class="selectTab == 1 ? 'text-red-400 select-tab' : ''"
            @click="setSelectTab(1)"
            >Men</li
          >
          <li
            class="px-4 py-2 cursor-pointer"
            :class="selectTab == 2 ? 'text-red-400 select-tab' : ''"
            @click="setSelectTab(2)"
            >Kids</li
          >
        </ul>

        <div class="flex goods-show-detail">
          <div
            v-for="item in topMonthSellersImages"
            :key="item.id"
            class="px-4"
          >
            <div
              class="top-image w-full h-auto cursor-pointer relative hover-show"
              @mouseenter="imageChange(item, $event)"
              @mouseleave="imageReverse(item, $event)"
            >
              <img
                :src="item.image2"
                :alt="item.goodsName"
                class="transition-all"
              />

              <div
                class="
                  card-actions
                  p-5
                  absolute
                  inset-x-0
                  bottom-0
                  justify-center
                  items-center
                  hidden
                "
              >
                <span
                  class="
                    iconfont
                    icon-eye
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    mr-2
                    flex
                    justify-center
                    items-center
                    hover:bg-red-400 hover:text-white
                    transition-all
                  "
                ></span>
                <span
                  class="
                    iconfont
                    icon-shopcar
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    mr-2
                    flex
                    justify-center
                    items-center
                    hover:bg-red-400 hover:text-white
                    transition-all
                  "
                ></span>
                <span
                  class="
                    iconfont
                    icon-heart
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    flex
                    justify-center
                    items-center
                    hover:bg-red-400 hover:text-white
                    transition-all
                  "
                ></span>
              </div>
            </div>

            <div class="bottom-detail py-6">
              <div class="text-sm text-gray-500">{{ item.goodsType }}</div>
              <div class="text-base font-semibold">{{ item.goodsName }}</div>
              <div class="text-gray-500 flex items-center">
                <span :class="item.countPrice ? 'line-through' : ''">{{
                  '$' + item.price
                }}</span>
                <span
                  v-if="item.countPrice"
                  class="ml-2 text-base text-red-500 font-semibold"
                  >{{ '$' + item.countPrice }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-7 text-center discover-me">
        <a href="javascript:;" class="relative">Discover more</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, Ref, ref } from 'vue';
  import DiscountBar from '/@/components/Discount-Bar.vue';
  import image120 from '/@/assets/images/product-120.jpeg';
  import image5 from '/@/assets/images/product-5.jpeg';
  import image121 from '/@/assets/images/product-121.jpeg';
  import image6 from '/@/assets/images/product-6.jpeg';
  import image122 from '/@/assets/images/product-122.jpeg';
  import image7 from '/@/assets/images/product-7.jpeg';
  import image8 from '/@/assets/images/product-8.jpeg';
  import image9 from '/@/assets/images/product-9.jpeg';
  import image123 from '/@/assets/images/product-123.jpeg';
  import image10 from '/@/assets/images/product-10.jpeg';
  import image124 from '/@/assets/images/product-124.jpeg';
  import image11 from '/@/assets/images/product-11.jpeg';
  import image12 from '/@/assets/images/product-12.jpeg';

  declare interface TopMonthSellersImages {
    image1?: string;
    image2?: string;
    goodsType?: string;
    goodsName?: string;
    price?: string | number;
    countPrice?: string | number;
  }

  export default defineComponent({
    name: 'HomeIndex',
    components: {
      DiscountBar
    },
    setup() {
      let selectTab: Ref<number> = ref(0);

      let setSelectTab = (value: number) => {
        selectTab.value = value;
      };

      // top month sellers
      let topMonthSellersImages: TopMonthSellersImages[] = reactive([
        {
          id: 0,
          image1: image120,
          image2: image5,
          goodsType: 'Shoes',
          goodsName: 'Leather mid-heel Sandals',
          price: '129.00'
        },
        {
          id: 1,
          image1: image121,
          image2: image6,
          goodsType: 'Dresses',
          goodsName: 'Cotton floral print Dress',
          price: '40.00'
        },
        {
          id: 2,
          image1: image122,
          image2: image7,
          goodsType: 'Shoes',
          goodsName: 'Leather Sneakers',
          price: '85.00',
          countPrice: '85.00'
        },
        {
          id: 3,
          image1: image8,
          image2: image8,
          goodsType: 'Tops',
          goodsName: 'Cropped cotton Top',
          price: '29.00'
        },
        {
          id: 4,
          image1: image9,
          image2: image9,
          goodsType: 'Dresses',
          goodsName: 'Floral print midi Dress',
          price: '50.00'
        },
        {
          id: 5,
          image1: image123,
          image2: image10,
          goodsType: 'Bags',
          goodsName: 'Suede cross body Bag',
          price: '79.00',
          countPrice: '49'
        },
        {
          id: 6,
          image1: image124,
          image2: image11,
          goodsType: 'Skirts',
          goodsName: 'Printed A-line Skirt',
          price: '79.00'
        },
        {
          id: 7,
          image1: image12,
          image2: image12,
          goodsType: 'Shoes',
          goodsName: 'Heel strappy Sandals',
          price: '90.00'
        }
      ]);

      // 图片变换
      let imageChange = (val: TopMonthSellersImages, e: any) => {
        if (val.image1) {
          e.target.children[0].src = val.image1;
        }
      };

      // 图片重置
      let imageReverse = (val: TopMonthSellersImages, e: any) => {
        if (val.image1) {
          e.target.children[0].src = val.image2;
        }
      };

      return {
        selectTab,
        setSelectTab,
        topMonthSellersImages,
        imageChange,
        imageReverse
      };
    }
  });
</script>

<style scoped lang="scss">
  .top-image-wrapper {
    > div {
      height: 470px;
      background-repeat: no-repeat;
      background-size: cover;
      .image-btn {
        padding-left: 20px;
        padding-right: 20px;
        transition-property: all;
        transition-duration: 0.3s;
        > span {
          &:first-child {
            transition-property: all;
            transition-duration: 0.3s;
            margin-right: 10px;
          }
        }
      }
      &:hover {
        .image-btn {
          padding-right: 15px;
          > span {
            &:first-child {
              margin-right: 15px;
            }
          }
        }
        &::after {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0);
        transition-property: all;
        transition-duration: 0.3s;
      }
      &:first-child {
        background-image: url('../../assets/images/cover-1.jpg');
      }

      &:nth-child(2) {
        background-image: url('../../assets/images/cover-2.jpg');
      }

      &:nth-child(3) {
        background-image: url('../../assets/images/cover-3.jpg');
      }
    }
  }

  .top-tag {
    width: var(--breakpoint-xl);
    margin: 0 auto;
    > div:first-child {
      > div {
        &:first-child {
          > span {
            top: -0.3em;
          }
        }
      }
    }
  }

  .new-collection {
    width: var(--breakpoint-xl);
    margin: 0 auto;
    > div {
      &:first-child {
        width: 570px;
        text-align: center;
        margin: 0 auto;
      }
    }
  }

  .collection-image-wrapper {
    > div {
      &:first-child {
        > div {
          background-repeat: no-repeat;
          background-size: cover;
          &:first-child {
            flex: 1;
            background-image: url('../../assets/images/product-1.jpg');
          }
          &:last-child {
            flex: 2;
            background-image: url('../../assets/images/product-2.jpg');
          }
        }
      }

      &:last-child {
        > div {
          background-repeat: no-repeat;
          background-size: cover;
          &:first-child {
            flex: 2;
            background-image: url('../../assets/images/product-3.jpg');
          }
          &:last-child {
            flex: 1;
            background-image: url('../../assets/images/product-4.jpg');
          }
        }
      }
      > div {
        height: 400px;
      }
    }
  }

  .hover-arrow {
    transition-property: all;
    transition-duration: 0.3s;
    > div {
      &:last-child {
        padding-left: 10px;
        padding-right: 10px;
        transition-property: all;
        transition-duration: 0.3s;
        > span {
          &:first-child {
            margin-right: 10px;
            transition-property: all;
            transition-duration: 0.3s;
          }
        }
      }
    }
    &:hover {
      background-position: -10px 0;
      > div {
        &:last-child {
          padding-right: 5px;
          > span {
            &:first-child {
              margin-right: 15px;
            }
          }
        }
      }
    }
  }

  .hover-arrow-1 {
    transition-property: all;
    transition-duration: 0.3s;
    > div:first-child {
      > div {
        &:last-child {
          padding-right: 10px;
          transition-property: all;
          transition-duration: 0.3s;
          > span {
            &:first-child {
              margin-right: 10px;
              transition-property: all;
              transition-duration: 0.3s;
            }
          }
        }
      }
    }
    &:hover {
      background-position: -10px 0;
      > div:first-child {
        > div {
          &:last-child {
            padding-right: 5px;
            > span {
              &:first-child {
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
  }

  .top-month-sellers {
    width: var(--breakpoint-xl);
    .select-tab {
      position: relative;
      &::after {
        position: absolute;
        content: '';
        left: 10px;
        right: 10px;
        top: 100%;
        height: 2px;
        background-color: rgba(248, 113, 113, var(--tw-text-opacity));
      }
    }
  }

  .goods-show-detail {
    flex-direction: row;
    flex-wrap: wrap;
    > div {
      flex: 0 0 25%;
    }
    .hover-show {
      &:hover {
        .card-actions {
          display: flex;
        }
      }
    }
  }

  .discover-me {
    > a {
      &:hover {
        &::after {
          left: calc(100% + 20px);
        }
      }
      &::after {
        position: absolute;
        content: '';
        background-color: black;
        left: -20px;
        right: -20px;
        top: 100%;
        height: 1px;
        transition-property: all;
        transition-duration: 0.3s;
      }
    }
  }
</style>
