<template>
  <div class="layout-wraper">
    <div class="px-1 py-1 top-nav">
      <div class="flex justify-between top-nav-inner container mx-auto my-0">
        <div class="flex items-center top-nav-left-wrapper">
          <div class="h-full mr-2">
            <span class="text-xl iconfont icon-car"></span>
          </div>

          <div class="flex items-center h-full mr-10 text-xs uppercase">
            Free shipping worldwide
          </div>

          <div
            class="
              relative
              flex
              items-center
              h-full
              cursor-pointer
              float-parent
            "
          >
            <svg class="mr-2 text-xl icon" aria-hidden="true">
              <use xlink:href="#icon-meiguo" />
            </svg>
            <span class="mr-3 text-xs font-semibold">United States</span>
            <span class="mr-3 text-xs iconfont icon-xiangxiafanye"></span>

            <div class="absolute inset-x-0 z-10 flot-info top-full">
              <div class="flex items-center py-2 pl-3">
                <svg class="mr-2 text-xl icon" aria-hidden="true">
                  <use xlink:href="#icon-meiguo" />
                </svg>
                <span class="text-xs">United States</span>
              </div>

              <div class="flex items-center py-2 pl-3">
                <svg class="mr-2 text-xl icon" aria-hidden="true">
                  <use xlink:href="#icon-canada" />
                </svg>
                <span class="text-xs">Canada</span>
              </div>

              <div class="flex items-center py-2 pl-3">
                <svg class="mr-2 text-xl icon" aria-hidden="true">
                  <use xlink:href="#icon-germany" />
                </svg>
                <span class="text-xs">Germany</span>
              </div>
            </div>
          </div>

          <div
            class="
              relative
              flex
              items-center
              h-full
              pl-4
              cursor-pointer
              float-parent
            "
          >
            <span class="mr-3 text-xs font-semibold">USD</span>
            <span class="mr-3 text-xs iconfont icon-xiangxiafanye"></span>

            <div class="absolute inset-x-0 z-10 flot-info top-full">
              <div class="flex items-center justify-center py-2 text-xs"
                >USD</div
              >
              <div class="flex items-center justify-center py-2 text-xs"
                >EUR</div
              >
            </div>
          </div>

          <div
            class="
              relative
              flex
              items-center
              h-full
              pl-4
              cursor-pointer
              float-parent
            "
          >
            <span class="mr-3 text-xs font-semibold">English</span>
            <span class="mr-3 text-xs iconfont icon-xiangxiafanye"></span>

            <div class="absolute inset-x-0 z-10 flot-info top-full hidden">
              <div class="flex items-center justify-center py-2 text-xs"
                >English</div
              >
              <div class="flex items-center justify-center py-2 text-xs"
                >French</div
              >
              <div class="flex items-center justify-center py-2 text-xs"
                >German</div
              >
            </div>
          </div>
        </div>

        <div class="flex top-nav-right-wrapper">
          <div class="flex items-center h-full mr-12 text-xs">
            <span class="font-semibold cursor-pointer mr-7">Shiping</span>
            <span class="font-semibold cursor-pointer mr-7">FAQ</span>
            <span class="font-semibold cursor-pointer">Contact</span>
          </div>

          <div class="flex items-center h-full text-base text-gray-400">
            <span
              class="mr-2 text-2xl cursor-pointer iconfont icon-weibiaoti502"
            ></span>
            <span class="mr-3 cursor-pointer iconfont icon-twitter"></span>
            <span class="mr-3 cursor-pointer iconfont icon-ins"></span>
            <span class="cursor-pointer iconfont icon-wechat"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div
        class="
          items-center
          justify-between
          center-nav
          container
          mx-auto
          my-0
          flex
        "
      >
        <div
          class="
            text-2xl
            font-bold
            cursor-pointer
            animate__animated animate__bounce
          "
          @click="$router.push('/')"
          >Shopper.</div
        >
        <div class="flex items-center h-full">
          <ul class="flex items-center justify-center h-full">
            <li class="relative px-4 py-2 nav-float">
              <span class="font-semibold cursor-pointer hover:text-red-500"
                >Home</span
              >
              <div
                class="
                  absolute
                  z-20
                  hidden
                  p-4
                  text-sm
                  font-normal
                  bg-white
                  border border-gray-200
                  nav-float-item
                  top-full
                  -left-6
                  -right-20
                "
              >
                <div class="py-2 pl-2 cursor-pointer">Default</div>
                <div class="py-2 pl-2 cursor-pointer">Classic</div>
                <div class="py-2 pl-2 cursor-pointer">Fashion</div>
                <div class="py-2 pl-2 cursor-pointer">Boxed</div>
                <div class="py-2 pl-2 cursor-pointer">Simple</div>
                <div class="py-2 pl-2 cursor-pointer">Asymmetric</div>
                <div class="py-2 pl-2 cursor-pointer">Sidenav</div>
                <div class="py-2 pl-2 cursor-pointer">Landing</div>
              </div>
            </li>
            <li class="flex items-center h-full px-4 py-6 nav-float">
              <span class="font-semibold cursor-pointer h over:text-red-500"
                >Catalog</span
              >
              <div
                class="
                  absolute
                  inset-x-0
                  z-20
                  hidden
                  overflow-hidden
                  bg-white
                  border border-gray-200
                  full-float
                  top-full
                  nav-float-item
                "
              >
                <div>
                  <div
                    class="
                      relative
                      flex
                      items-center
                      text-sm
                      border-bottom-full
                    "
                  >
                    <div class="center-float-wrapper container mx-auto my-0">
                      <span
                        class="inline-block py-4 mr-3 uppercase cursor-pointer"
                        @click="setActiveTab(0)"
                        :class="activetab === 0 ? 'text-red-400 selectTab' : ''"
                        >WOMEN</span
                      >
                      <span
                        class="inline-block py-4 mx-3 uppercase cursor-pointer"
                        @click="setActiveTab(1)"
                        :class="activetab === 1 ? 'text-red-400 selectTab' : ''"
                        >man</span
                      >
                      <span
                        class="inline-block py-4 mx-3 uppercase cursor-pointer"
                        @click="setActiveTab(2)"
                        :class="activetab === 2 ? 'text-red-400 selectTab' : ''"
                        >kids</span
                      >
                    </div>
                  </div>

                  <div class="py-5 center-nav container mx-auto my-0 flex">
                    <div class="flex justify-between left-detail-wrapper pr-9">
                      <div>
                        <div class="mb-5 text-base font-semibold">Clothing</div>
                        <ul class="text-sm">
                          <li class="mb-2 cursor-pointer">All Clothing</li>
                          <li class="mb-2 cursor-pointer">Blouses & Shirts</li>
                          <li class="mb-2 cursor-pointer">Coats & Jackets</li>
                          <li class="mb-2 cursor-pointer">Dresses</li>
                          <li class="mb-2 cursor-pointer">Hoodies & Sweats</li>
                          <li class="mb-2 cursor-pointer">Denim</li>
                          <li class="mb-2 cursor-pointer">Jeans</li>
                          <li class="mb-2 cursor-pointer"
                            >Jumpers & Cardigans</li
                          >
                          <li class="cursor-pointer">Leggings</li>
                        </ul>
                      </div>

                      <div>
                        <div class="mb-5 text-base font-semibold"
                          >Shoes & Boots</div
                        >
                        <ul class="text-sm">
                          <li class="mb-2 cursor-pointer">All Shoes & Boots</li>
                          <li class="mb-2 cursor-pointer">Blouses & Shirts</li>
                          <li class="mb-2 cursor-pointer">Branded Shoes</li>
                          <li class="mb-2 cursor-pointer">Boots</li>
                          <li class="mb-2 cursor-pointer">Heels</li>
                          <li class="mb-2 cursor-pointer">Trainers</li>
                          <li class="mb-2 cursor-pointer">Sandals</li>
                          <li class="mb-2 cursor-pointer">Shoes</li>
                          <li class="cursor-pointer">Wide Fit Shoes</li>
                        </ul>
                      </div>

                      <div>
                        <div class="mb-5 text-base font-semibold"
                          >Bags & Accessories</div
                        >
                        <ul class="text-sm">
                          <li class="mb-2 cursor-pointer"
                            >All Bags & Accessories</li
                          >
                          <li class="mb-2 cursor-pointer">Accessories</li>
                          <li class="mb-2 cursor-pointer">Bags & Purses</li>
                          <li class="mb-2 cursor-pointer">Luggage</li>
                          <li class="mb-2 cursor-pointer">Belts</li>
                          <li class="mb-2 cursor-pointer">Hats</li>
                          <li class="mb-2 cursor-pointer">Hair Accessories</li>
                          <li class="mb-2 cursor-pointer">Jewellery</li>
                          <li class="cursor-pointer">Travel Accessories</li>
                        </ul>
                      </div>

                      <div>
                        <div class="mb-5 text-base font-semibold"
                          >Collections</div
                        >
                        <ul class="text-sm">
                          <li class="mb-2 cursor-pointer">All Collections</li>
                          <li class="mb-2 cursor-pointer">Occasionwear</li>
                          <li class="mb-2 cursor-pointer">Going Out</li>
                          <li class="mb-2 cursor-pointer">Workwear</li>
                          <li class="mb-2 cursor-pointer">Holiday Shop</li>
                          <li class="mb-2 cursor-pointer">Jean Fit Guide</li>
                        </ul>
                      </div>
                    </div>
                    <div class="relative right-image-wrapper px-9">
                      <div
                        class="
                          relative
                          flex
                          items-center
                          justify-center
                          w-full
                          h-full
                          overflow-hidden
                          rounded
                          cursor-pointer
                          image-box
                          bg-no-repeat bg-cover
                        "
                      >
                        <div class="z-10 py-4 text-sm bg-white">
                          <span>Shop Sweaters</span>
                          <span class="iconfont icon-cc-arrow-right"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative px-4 py-6 nav-float">
              <span class="font-semibold cursor-pointer hover:text-red-500"
                >Shop</span
              >

              <div
                class="
                  absolute
                  z-20
                  hidden
                  text-sm
                  font-normal
                  bg-white
                  border border-gray-200
                  nav-float-item
                  top-full
                  -left-60
                "
                style="min-width: 650px"
              >
                <div class="flex p-4">
                  <div class="flex-1">
                    <div class="mb-4">
                      <div class="mb-4 font-semibold">Shop</div>
                      <ul>
                        <li class="py-2 cursor-pointer">Default</li>
                        <li class="py-2 cursor-pointer">Topbar</li>
                        <li class="py-2 cursor-pointer">Collapse</li>
                        <li class="py-2 cursor-pointer">Simple</li>
                        <li class="py-2 cursor-pointer">Masonry</li>
                      </ul>
                    </div>

                    <div>
                      <div class="mb-4 font-semibold">Product</div>
                      <ul>
                        <li class="py-2 cursor-pointer">Default</li>
                        <li class="py-2 cursor-pointer">Images Left</li>
                        <li class="py-2 cursor-pointer">Image Grid</li>
                        <li class="py-2 cursor-pointer">Image Slider</li>
                        <li class="py-2 cursor-pointer">Images Stacked</li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="mb-4">
                      <div class="mb-4 font-semibold">Support</div>
                      <ul>
                        <li class="py-2 cursor-pointer">Shopping Cart</li>
                        <li class="py-2 cursor-pointer">Checkout</li>
                        <li class="py-2 cursor-pointer">Order Completed</li>
                        <li class="py-2 cursor-pointer">Shipping & Returns</li>
                      </ul>
                    </div>

                    <div>
                      <div class="mb-4 font-semibold">Account</div>
                      <ul>
                        <li class="py-2 cursor-pointer">Order</li>
                        <li class="py-2 cursor-pointer">Orders</li>
                        <li class="py-2 cursor-pointer">Wishlist</li>
                        <li class="py-2 cursor-pointer">Personal Info</li>
                        <li class="py-2 cursor-pointer">Addresses</li>
                        <li class="py-2 cursor-pointer">Addresses: New</li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex-1">
                    <ul class="mb-4">
                      <li class="pb-2 cursor-pointer">Payment</li>
                      <li class="py-2 cursor-pointer">Payment: New</li>
                      <li class="py-2 cursor-pointer">Payment: Choose</li>
                      <li class="py-2 cursor-pointer">Auth</li>
                    </ul>

                    <div>
                      <div class="mb-4 font-semibold">Modals</div>
                      <ul>
                        <li class="py-2 cursor-pointer"
                          >Newsletter: Horizontal</li
                        >
                        <li class="py-2 cursor-pointer">
                          Newsletter: Vertical
                        </li>
                        <li class="py-2 cursor-pointer"> Product </li>
                        <li class="py-2 cursor-pointer"> Search </li>
                        <li class="py-2 cursor-pointer"> Shopping Cart </li>
                        <li class="py-2 cursor-pointer"> Size Chart </li>
                        <li class="py-2 cursor-pointer"> Wait List </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative px-4 py-2 nav-float">
              <span class="font-semibold cursor-pointer hover:text-red-500"
                >Pages</span
              >

              <div
                class="
                  absolute
                  z-20
                  hidden
                  p-4
                  text-sm
                  font-normal
                  bg-white
                  border border-gray-200
                  nav-float-item
                  top-full
                  -left-6
                  -right-20
                "
              >
                <div class="py-2 pl-2 cursor-pointer">About</div>
                <div class="py-2 pl-2 cursor-pointer">Contact Us</div>
                <div class="py-2 pl-2 cursor-pointer">Store Locator</div>
                <div class="py-2 pl-2 cursor-pointer">FAQ</div>
                <div class="py-2 pl-2 cursor-pointer">Coming Soon</div>
                <div class="py-2 pl-2 cursor-pointer">404</div>
              </div>
            </li>
            <li class="relative px-4 py-2 nav-float">
              <span class="font-semibold cursor-pointer hover:text-red-500"
                >Blog</span
              >

              <div
                class="
                  absolute
                  z-10
                  hidden
                  p-4
                  text-sm
                  font-normal
                  bg-white
                  border border-gray-200
                  nav-float-item
                  top-full
                  -left-6
                  -right-20
                "
              >
                <div class="py-2 pl-2 cursor-pointer">Blog</div>
                <div class="py-2 pl-2 cursor-pointer">Blog Post</div>
              </div>
            </li>
            <li class="px-4 font-semibold cursor-pointer hover:text-red-500"
              >Docs</li
            >
          </ul>
        </div>
        <div class="text-sm">
          <span
            class="px-4 cursor-pointer iconfont icon-search hover:text-red-500"
          ></span>
          <span
            @click="$router.push({ name: 'Account' })"
            class="
              px-4
              text-xl
              cursor-pointer
              iconfont
              icon-caidan08
              hover:text-red-500
            "
          ></span>
          <span
            @click="$router.push({ name: 'Account' })"
            class="
              px-4
              text-xl
              cursor-pointer
              iconfont
              icon-heart
              hover:text-red-500
            "
          ></span>
          <span
            @click="changeVisible"
            class="
              relative
              pl-4
              text-xl
              cursor-pointer
              hover:text-red-500
              iconfont
              icon-shopcar
            "
          >
            <span
              class="
                absolute
                inline-flex
                w-2
                h-2
                bg-red-400
                rounded-full
                opacity-75
                animate-ping
              "
            ></span>
            <span
              class="absolute inline-flex w-2 h-2 bg-red-500 rounded-full"
            ></span>
          </span>
        </div>
      </div>
    </div>

    <a-drawer
      :title="`Your Cart (${shopCar.length})`"
      placement="right"
      :closable="true"
      v-model:visible="visible"
      :drawerStyle="{ display: 'flex', flexDirection: 'column' }"
      :bodyStyle="{ flex: 1, padding: 0 }"
      :headerStyle="{
        padding: '24px 32px',
        textAlign: 'center',
        fontSize: '18px'
      }"
      width="470"
    >
      <div class="drawer-container flex flex-col">
        <div class="top-goods flex-1 overflow-auto">
          <div
            v-for="item in shopCar"
            :key="item.id"
            class="p-8 border-b border-solid border-gray-200 flex items-center"
          >
            <div
              class="left-image-box cursor-pointer mr-7"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>
            <div class="right-detail flex-1">
              <div class="text-base font-bold mb-1">{{ item.name }}</div>
              <div class="text-base text-gray-500 mb-6">{{
                '$' + item.price
              }}</div>
              <div class="flex items-center justify-between">
                <div>
                  <a-select
                    v-model:value="item.total"
                    :style="{ width: '59px' }"
                  >
                    <a-select-option
                      v-for="selectItem in 3"
                      :key="selectItem"
                      :value="selectItem"
                      >{{ selectItem }}</a-select-option
                    >
                  </a-select>
                </div>
                <a
                  href="javascript:;"
                  class="flex items-center text-sm text-gray-400"
                >
                  <CloseOutlined />
                  <span class="ml-2">Remove</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-price">
          <div
            class="
              flex
              py-6
              px-8
              items-center
              justify-between
              text-base
              bg-gray-100
            "
          >
            <div>Subtotal</div>
            <div>{{ '$' + totalCount }}</div>
          </div>

          <div class="p-8">
            <div
              class="
                py-3
                px-7
                bg-gray-900
                text-white text-base text-center
                cursor-pointer
              "
              >Continue to Checkout</div
            >

            <div
              class="
                py-3
                px-7
                bg-gray-white
                text-gray-900 text-base text-center
                border border-gray-900
                mt-2
                cursor-pointer
              "
              >View Cart</div
            >
          </div>
        </div>
      </div>
    </a-drawer>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <footer
      class="foot-wrapper bg-no-repeat bg-cover"
      style="background-color: #1f1f1f"
    >
      <div class="py-24 border-b" style="border-color: #303030">
        <div class="container text-white">
          <div class="mb-8 text-2xl text-center"
            >Want style Ideas and Treats?</div
          >
          <div class="mb-20 text-base text-center">
            <form action="javascript:;">
              <input
                type="text"
                placeholder="Enter Email *"
                class="py-4 px-8 text-white mr-3"
                required
                style="
                  background-color: #303030;
                  border-color: #303030;
                  min-width: 382px;
                "
              />
              <button
                class="py-4 px-8 text-whit"
                style="background-color: #525252; border-color: #525252"
                type="submit"
                >Subscribe</button
              >
            </form>
          </div>
          <div class="flex items-start">
            <div class="flex-1">
              <div class="text-3xl select-none">Shopper.</div>
              <div>
                <span
                  class="
                    mr-2
                    text-2xl
                    cursor-pointer
                    iconfont
                    icon-weibiaoti502
                    text-ba
                  "
                ></span>
                <span
                  class="mr-3 cursor-pointer iconfont icon-twitter text-ba"
                ></span>
                <span
                  class="mr-3 cursor-pointer iconfont icon-ins text-ba"
                ></span>
                <span
                  class="cursor-pointer iconfont icon-wechat text-ba"
                ></span>
              </div>
            </div>

            <div
              class="flex-1"
              v-for="(item, index) in footDetail"
              :key="index"
            >
              <ul>
                <li
                  v-for="(actItem, actIndex) in item"
                  :key="actItem"
                  :class="
                    actIndex == 0
                      ? 'text-sm mb-4 font-bold'
                      : 'text-base text-ba cursor-pointer'
                  "
                  >{{ actItem }}</li
                >
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="py-6">
        <div
          class="container flex justify-between items-center"
          style="color: #767676"
        >
          <div class="text-sm">
            © 2019 All rights reserved. Designed by Unvab.
          </div>
          <div class="flex items-center">
            <img src="../assets/svg/mastercard.svg" alt="" class="mr-2" />
            <img src="../assets/svg/visa.svg" alt="" class="mr-2" />
            <img src="../assets/svg/amex.svg" alt="" class="mr-2" />
            <img src="../assets/svg/paypal.svg" alt="" class="mr-2" />
            <img src="../assets/svg/maestro.svg" alt="" class="mr-2" />
            <img src="../assets/svg/klarna.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import {
    computed,
    defineComponent,
    reactive,
    Ref,
    ref,
    UnwrapRef
  } from 'vue';
  import { ShopCar } from '/@/types/home.interface';
  import image6 from '/@/assets/images/product-6.jpg';
  import image10 from '/@/assets/images/product-10.jpg';
  import { CloseOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    name: 'Layout',
    components: {
      CloseOutlined
    },
    setup() {
      let activetab: Ref<number> = ref(0);
      let setActiveTab = (value: number) => {
        activetab.value = value;
      };

      let visible: Ref<boolean> = ref(false);

      let changeVisible = () => {
        visible.value = !visible.value;
      };

      let shopCar: UnwrapRef<ShopCar[]> = reactive([
        {
          id: 0,
          image: image6,
          name: 'Cotton floral print Dress',
          price: '40.00',
          total: 1
        },
        {
          id: 1,
          image: image10,
          name: 'Suede cross body Bag',
          price: '49.00',
          total: 1
        }
      ]);

      let totalCount = computed(() => {
        let priceArr = shopCar.map((item: ShopCar) => item.price);
        let sum = priceArr.reduce((total: number, value: unknown) => {
          return (total += Number(value));
        }, 0);

        return parseFloat(sum as unknown as string).toFixed(2);
      });

      let footDetail: any[] = reactive([
        ['Support', 'Contact Us', 'FAQs', 'Size Guide', 'Shipping & Returns'],
        [
          'Shop',
          "Men's Shopping",
          "Women's Shopping",
          "Kids' Shopping",
          'Discounts'
        ],
        [
          'Company',
          'Our Story',
          'Careers',
          'Terms & Conditions',
          'Privacy & Cookie policy'
        ],
        ['Contact', '1-202-555-0105', '1-202-555-0106', 'help@shopper.com']
      ]);

      return {
        activetab,
        setActiveTab,
        visible,
        changeVisible,
        shopCar,
        totalCount,
        footDetail
      };
    }
  });
</script>

<style scoped lang="scss">
  ol,
  ul,
  dl {
    margin-bottom: 0;
  }
  .top-nav {
    width: 100%;
    background-color: #f5f5f5;
  }

  .float-parent {
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 8px;
      bottom: 8px;
      width: 1px;
      background-color: #dedede;
    }
  }

  .float-parent:hover {
    .flot-info {
      display: block;
    }
  }

  .flot-info {
    background-color: #fff;
    border: 1px solid #dedede;
    display: none;
    animation-name: float-move;
    animation-duration: 0.3s;
    > div {
      border-bottom: 1px solid #dedede;
      &:last-child {
        border-bottom: 0;
      }
      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  @keyframes float-move {
    from {
      transform: translateY(10px);
    }

    to {
      transform: translateY(0px);
    }
  }

  .center-nav {
    .left-detail-wrapper {
      flex: 1;
    }
    .right-image-wrapper {
      flex: 0 0 33%;
    }
  }

  .nav-float {
    .nav-float-item {
      animation-name: float-move;
      animation-duration: 0.3s;
    }
    &:hover {
      .nav-float-item {
        display: block;
      }
    }
  }

  .border-bottom-full {
    &::after {
      position: absolute;
      left: 0;
      right: 0;
      content: '';
      height: 1px;
      background-color: #dedede;
      top: 100%;
    }
  }

  .selectTab {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      top: 100%;
      left: 0;
      right: 0;
      height: 2px;
      z-index: 1;
      background-color: rgba(248, 113, 113, var(--tw-text-opacity));
    }
  }

  .image-box {
    background-image: url('../assets/images/product-110.jpg');
    > div {
      padding-left: 20px;
      padding-right: 20px;
      transition-property: all;
      transition-duration: 0.3s;
      > span {
        &:first-child {
          transition-property: all;
          transition-duration: 0.3s;
          margin-right: 5px;
        }
      }
    }
    &:hover {
      > div {
        padding-right: 15px;
        > span {
          &:first-child {
            margin-right: 10px;
          }
        }
      }
      &::after {
        background-color: rgba(0, 0, 0, 0);
      }
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.1);
      transition-property: all;
      transition-duration: 0.1s;
    }
  }

  .top-goods {
    > div {
      > .left-image-box {
        width: 114px;
        height: 135px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }

  .drawer-container {
    height: calc(100vh - 71px);
  }

  .foot-wrapper {
    background-image: url('../assets/svg/patters.svg');
  }

  .text-ba {
    color: #bababa !important;
  }
</style>
