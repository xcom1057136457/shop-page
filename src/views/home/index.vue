<template>
  <div>
    <Discount-Bar />
    <div class="flex mt-4 top-image-wrapper">
      <div
        class="relative flex items-center justify-center flex-1 cursor-pointer"
      >
        <div class="z-10 text-4xl font-bold text-white">Women</div>
        <div
          class="
            absolute
            z-10
            py-4
            text-sm
            font-semibold
            bg-white
            bottom-8
            image-btn
          "
        >
          <span>Shop Women</span>
          <span class="iconfont icon-cc-arrow-right"></span>
        </div>
      </div>
      <div
        class="relative flex items-center justify-center flex-1 cursor-pointer"
      >
        <div class="z-10 text-4xl font-bold text-white">Men</div>
        <div
          class="
            absolute
            z-10
            py-4
            text-sm
            font-semibold
            bg-white
            bottom-8
            image-btn
          "
        >
          <span>Shop Men</span>
          <span class="iconfont icon-cc-arrow-right"></span>
        </div>
      </div>
      <div
        class="relative flex items-center justify-center flex-1 cursor-pointer"
      >
        <div class="z-10 text-4xl font-bold text-white">Kids</div>
        <div
          class="
            absolute
            z-10
            py-4
            text-sm
            font-semibold
            bg-white
            bottom-8
            image-btn
          "
        >
          <span>Shop Kids</span>
          <span class="iconfont icon-cc-arrow-right"></span>
        </div>
      </div>
    </div>

    <div
      class="flex py-6 border-b border-gray-200 top-tag container mx-auto my-0"
    >
      <div class="flex justify-start flex-1">
        <div>
          <span
            class="relative mr-4 text-2xl text-red-400 iconfont icon-car"
          ></span>
        </div>
        <div>
          <div class="mb-2 text-xs font-bold uppercase">FREE SHIPPING</div>
          <div class="text-sm text-gray-500">From all orders over $100</div>
        </div>
      </div>

      <div class="flex justify-start flex-1">
        <div>
          <span
            class="relative mr-4 text-base text-red-400 iconfont icon-repeat"
          ></span>
        </div>
        <div>
          <div class="mb-2 text-xs font-bold uppercase">FREE RETURNS</div>
          <div class="text-sm text-gray-500">Return money within 30 days</div>
        </div>
      </div>

      <div class="flex justify-start flex-1">
        <div>
          <span
            class="relative mr-4 text-xl text-red-400 iconfont icon-lock"
          ></span>
        </div>
        <div>
          <div class="mb-2 text-xs font-bold uppercase">SECURE SHOPPING</div>
          <div class="text-sm text-gray-500">You're in safe hands</div>
        </div>
      </div>

      <div class="flex justify-start flex-1">
        <div>
          <span
            class="relative mr-4 text-xl text-red-400 iconfont icon-tag"
          ></span>
        </div>
        <div>
          <div class="mb-2 text-xs font-bold uppercase">OVER 10,000 STYLES</div>
          <div class="text-sm text-gray-500">We have everything you need</div>
        </div>
      </div>
    </div>

    <div class="pt-12 new-collection container mx-auto my-0">
      <div class="flex flex-col items-center justify-center">
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
              flex flex-col
              items-center
              justify-center
              mx-4
              text-white
              cursor-pointer
              hover-arrow
            "
          >
            <div class="mb-2 text-2xl font-bold">Bags Collection</div>
            <div>
              <span>Shop Now</span>
              <span class="relative iconfont icon-cc-arrow-right"></span>
            </div>
          </div>
          <div
            class="
              relative
              flex flex-col
              justify-center
              mx-4
              text-gray-700
              cursor-pointer
              hover-arrow-1
            "
          >
            <div class="absolute left-10">
              <div class="mb-2 text-2xl font-bold">Printed men’s Shirts</div>
              <div>
                <span> Shop Now </span>
                <span class="relative iconfont icon-cc-arrow-right"></span>
              </div>
            </div>

            <div
              class="
                absolute
                flex flex-col
                items-center
                justify-center
                text-white
                bg-red-400
                top-5
                right-5
              "
              style="border-radius: 50%; width: 96px; height: 96px"
            >
              <div class="mb-2 text-xs">Save</div>
              <div class="pr-0 mr-0 text-2xl font-bold">30%</div>
            </div>
          </div>
        </div>

        <div class="flex mt-7">
          <div
            class="
              relative
              flex flex-col
              justify-center
              mx-4
              text-gray-700
              cursor-pointer
              hover-arrow-1
            "
          >
            <div class="absolute left-10">
              <div class="mb-2 text-2xl font-bold">Basic women’s Dresses</div>
              <div>
                <span> Shop Now </span>
                <span class="relative iconfont icon-cc-arrow-right"></span>
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-col
              items-center
              justify-center
              mx-4
              text-white
              cursor-pointer
              hover-arrow
            "
          >
            <div class="mb-2 text-2xl font-bold">Sweatshirts</div>
            <div>
              <span> Shop Now </span>
              <span class="relative iconfont icon-cc-arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-24 mx-auto my-0 top-month-sellers container">
      <div class="mb-4 text-3xl font-semibold text-center"
        >Top month Sellers</div
      >

      <div>
        <ul class="flex items-center justify-center mb-10 text-base">
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
              class="relative w-full h-auto cursor-pointer top-image hover-show"
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
                  absolute
                  inset-x-0
                  bottom-0
                  items-center
                  justify-center
                  hidden
                  p-5
                  card-actions
                "
              >
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    mr-2
                    transition-all
                    bg-white
                    rounded-full
                    iconfont
                    icon-eye
                    hover:bg-red-400 hover:text-white
                  "
                ></span>
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    mr-2
                    transition-all
                    bg-white
                    rounded-full
                    iconfont
                    icon-shopcar
                    hover:bg-red-400 hover:text-white
                  "
                ></span>
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    transition-all
                    bg-white
                    rounded-full
                    iconfont
                    icon-heart
                    hover:bg-red-400 hover:text-white
                  "
                ></span>
              </div>
            </div>

            <div class="py-6 bottom-detail">
              <div class="text-sm text-gray-500">{{ item.goodsType }}</div>
              <div class="text-base font-semibold">{{ item.goodsName }}</div>
              <div class="flex items-center text-gray-500">
                <span :class="item.countPrice ? 'line-through' : ''">{{
                  '$' + item.price
                }}</span>
                <span
                  v-if="item.countPrice"
                  class="ml-2 text-base font-semibold text-red-500"
                  >{{ '$' + item.countPrice }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-7 discover-me">
        <a
          href="javascript:;"
          class="relative text-base text-black hover:text-black"
          >Discover more</a
        >
      </div>
    </div>

    <div class="py-24 summer-collection">
      <div class="flex mx-auto my-0 container">
        <div class="flex-1"></div>
        <div class="flex-1">
          <h3 class="mb-8 text-3xl font-bold">
            Get -50% from
            <br />
            Summer Collection
          </h3>
          <div class="flex items-start mb-12">
            <div>
              <div class="mb-2 text-5xl text-red-500">0-205</div>
              <div class="text-xs font-bold text-center text-gray-600 uppercase"
                >DAYS</div
              >
            </div>

            <div class="px-4 text-5xl text-red-500">:</div>

            <div>
              <div class="mb-2 text-5xl text-red-500">0-24</div>
              <div class="text-xs font-bold text-center text-gray-600 uppercase"
                >HOURS</div
              >
            </div>

            <div class="px-4 text-5xl text-red-500">:</div>

            <div>
              <div class="mb-2 text-5xl text-red-500">0-48</div>
              <div class="text-xs font-bold text-center text-gray-600 uppercase"
                >MINUTES</div
              >
            </div>

            <div class="px-4 text-5xl text-red-500">:</div>

            <div>
              <div class="mb-2 text-5xl text-red-500">0-23</div>
              <div class="text-xs font-bold text-center text-gray-600 uppercase"
                >SECONDS</div
              >
            </div>
          </div>
          <div
            class="
              inline-block
              py-3
              text-white
              transition-all
              bg-black
              cursor-pointer
              summer-button
            "
          >
            <span class="transition-all">Shop Now</span>
            <span class="ml-3 iconfont icon-cc-arrow-right"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="py-24">
      <div class="mb-4 text-sm font-bold text-center text-gray-500 uppercase"
        >WHAT BUYERS SAY</div
      >
      <div class="mb-16 text-4xl font-bold text-center text-black"
        >Latest buyers Reviews</div
      >
      <swiper
        :slidesPerView="'auto'"
        :centeredSlides="true"
        :pagination="{
          clickable: true
        }"
        :spaceBetween="30"
        class="mx-auto my-0 mySwiper container"
      >
        <swiper-slide v-for="item in latestBuyers" :key="item.id">
          <div style="height: 400px">
            <div class="p-6 border border-gray-200">
              <div class="flex mb-6 top-detail">
                <div
                  class="mr-4 overflow-hidden left-image"
                  style="width: 69px; height: 69px"
                >
                  <img :src="item.image" alt="" class="w-full h-full" />
                </div>

                <div class="flex flex-col justify-between ml-4 right-detail">
                  <div class="text-sm text-gray-400">
                    {{ item.productType }}</div
                  >
                  <div class="text-base font-bold">{{ item.productName }}</div>
                  <div>
                    <a-rate :value="item.rate" disabled />
                  </div>
                </div>
              </div>

              <div class="mb-6 text-gray-400">{{ item.productDesc }}</div>

              <div class="text-sm text-gray-400">{{ item.date }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="py-24" style="background-color: #f5f5f5">
      <div class="mb-3 text-4xl font-bold text-center">@shopper</div>
      <div class="text-xl text-center text-gray-400 mb-9"
        >Appear, dry there darkness they're seas, dry waters.</div
      >
      <div class="flex items-center mx-auto my-0 image-wrapper container">
        <a
          v-for="item in bottomDetail"
          :key="item.id"
          href="javascript:;"
          class="relative mx-1"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <div
            class="
              absolute
              inset-x-0 inset-y-0
              items-center
              justify-center
              hidden
              text-white
            "
          >
            <div class="flex items-center mr-4">
              <HeartOutlined />
              <span class="ml-2">{{ item.like }}</span>
            </div>

            <div class="flex items-center">
              <MessageOutlined />
              <span class="ml-2">{{ item.comments }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, Ref, ref, UnwrapRef } from 'vue';
  import { HeartOutlined, MessageOutlined } from '@ant-design/icons-vue';
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
  import image124 from '/@/assets/images/product-124.jpeg';
  import image11 from '/@/assets/images/product-11.jpeg';
  import image12 from '/@/assets/images/product-12.jpeg';
  import image10 from '/@/assets/images/product-10.jpeg';
  import image13 from '/@/assets/images/product-13.jpg';
  import image14 from '/@/assets/images/product-14.jpg';
  import image15 from '/@/assets/images/product-15.jpg';
  import image16 from '/@/assets/images/product-16.jpg';
  import image17 from '/@/assets/images/product-17.jpg';
  import image18 from '/@/assets/images/product-18.jpg';
  import image19 from '/@/assets/images/product-19.jpg';
  import image20 from '/@/assets/images/product-20.jpg';
  import image21 from '/@/assets/images/product-21.jpg';

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper.scss';
  import 'swiper/components/pagination/pagination.min.css';
  import SwiperCore, { Pagination } from 'swiper/core';

  SwiperCore.use([Pagination]);

  declare interface TopMonthSellersImages {
    id?: any;
    image1?: string;
    image2?: string;
    goodsType?: string;
    goodsName?: string;
    price?: string | number;
    countPrice?: string | number;
  }

  declare interface LatestBuyers {
    readonly id: any;
    image?: any;
    productType?: string;
    productName?: string;
    productDesc?: string;
    date?: string | Date;
    rate?: string | number;
  }

  declare interface BottomDetail {
    id: number | string;
    image: unknown;
    like: string | number;
    comments: string | number;
  }

  export default defineComponent({
    name: 'HomeIndex',
    components: {
      DiscountBar,
      Swiper,
      SwiperSlide,
      MessageOutlined,
      HeartOutlined
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

      // latest数据
      let latestBuyers: LatestBuyers[] = [
        {
          id: 0,
          image: image13,
          productType: 'Shoes',
          productName: 'Low top Sneakers',
          rate: 3,
          productDesc:
            " From creepeth said moved given divide make multiply of him shall itself also above second doesn't unto created saying land herb sea midst night wherein.",
          date: 'Logan Edwards, 01 Jun 2019'
        },
        {
          id: 1,
          image: image14,
          productType: 'Dresses',
          productName: 'Cotton print Dress',
          rate: 5,
          productDesc:
            ' God every fill great replenish darkness unto. Very open. Likeness their that light. Given under image to. Subdue of shall cattle day fish form saw spirit and given stars, us you whales may, land, saw fill unto.',
          date: 'Jane Jefferson,29 May 2019'
        },
        {
          id: 2,
          image: image15,
          productType: 'T-shirts',
          productName: 'Oversized print T-shirt',
          rate: 4,
          productDesc:
            'Fill his waters wherein signs likeness waters. Second light gathered appear sixth fourth, seasons behold creeping female.',
          date: 'Darrell Baker,18 May 2019'
        },
        {
          id: 3,
          image: image10,
          productType: 'Bags & Accessories',
          productName: 'Suede cross body Bag',
          rate: 4,
          productDesc:
            'God every fill great replenish darkness unto. Very open. Likeness their that light. Given under image to. Subdue of shall cattle day fish form saw spirit and given stars.',
          date: 'Pavel Doe,29 May 2019'
        }
      ];

      // 底部数据
      let bottomDetail: UnwrapRef<BottomDetail[]> = reactive([
        {
          id: 0,
          image: image16,
          like: 248,
          comments: 7
        },
        {
          id: 1,
          image: image17,
          like: 248,
          comments: 7
        },
        {
          id: 2,
          image: image18,
          like: 248,
          comments: 7
        },
        {
          id: 3,
          image: image19,
          like: 248,
          comments: 7
        },
        {
          id: 4,
          image: image20,
          like: 248,
          comments: 7
        },
        {
          id: 5,
          image: image21,
          like: 248,
          comments: 7
        }
      ]);

      return {
        selectTab,
        setSelectTab,
        topMonthSellersImages,
        imageChange,
        imageReverse,
        latestBuyers,
        bottomDetail,
        MessageOutlined,
        HeartOutlined
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
      > div {
        > span {
          animation-name: iconMove;
          &:nth-child(1) {
            animation-duration: 0.2s;
          }

          &:nth-child(2) {
            animation-duration: 0.4s;
          }

          &:nth-child(3) {
            animation-duration: 0.6s;
          }
        }
      }
      &:hover {
        .card-actions {
          display: flex;
        }
      }
    }
  }

  @keyframes iconMove {
    from {
      transform: translateY(100%);
    }

    to {
      transform: translateY(0);
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

  .summer-collection {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url('../../assets/images/cover-4.jpg');

    .summer-button {
      padding-left: 28px;
      padding-right: 28px;
      > span {
        &:first-child {
          margin-right: 5px;
        }
      }
      &:hover {
        & {
          padding-right: 23px;
          > span {
            &:first-child {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  .swiper-slide {
    font-size: 16px;
    background: #fff;
    width: 33.333333%;
  }

  ::v-deep .swiper-pagination-bullet-active {
    background-color: $primary !important;
  }

  .image-wrapper {
    > a {
      flex: 1;
      height: 178px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      &:hover {
        > div {
          display: flex;
        }
      }
      > div {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
</style>
