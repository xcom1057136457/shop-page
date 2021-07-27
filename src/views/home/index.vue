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
        <h2 class="mb-4 text-4xl font-bold">Best Picks 2019</h2>
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
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import DiscountBar from '/@/components/Discount-Bar.vue';

  export default defineComponent({
    name: 'HomeIndex',
    components: {
      DiscountBar
    },
    setup() {
      return {};
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
</style>
