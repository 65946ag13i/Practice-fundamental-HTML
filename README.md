# 網頁啟動

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# 前言

因為前一個項目練習了 tailwind css 不熟悉原生 css 寫法額外寫了這個項目

這個項目主要練習原生 css 、 sass 及 windows method

但是認識這些功能前用了 AI 建立基本的範例，但功能不太好，自己有再調整

---

# 頁面說明

## [首頁](http://localhost:3000/)

1. 練習 React router
2. Flex box 、 Grid box 練習
3. 理解 aninate 和 transition 在按鈕上的應用
4. 理解 HTML 元素，如 table 、order List、detail、select ...等
5. windows method 的方法使用
6. IntersectionObserver API 功能理解

---

## [AI 範例](http://localhost:3000/AIExample)

1. 主要理解 CSS 在頁面的顯示
2. 了解 sass 以下功能

   1. css 的嵌套功能
   2. $建立參數
   3. sass Map

      ```css
      $theme-colors: (
        primary: $primary-color,
        secondary: $secondary-color,
        success: $success-color,
        danger: $danger-color,
        warning: $warning-color,
      );

      /* 基本用法 */
      @each $name, $color in $theme-colors {
        .text-# {$name} {
          color: $color;
        }
      }
      /*
      一些基本方法
      map-has-key : 查找擁有key
      map-keys    : 列出所有keys
      map-values  : 列出所有values
      map-merge   : 合併兩個map
      */
      ```

   4. @function

      ```css
      @function calculate-rem($size, $base: $font-size-base) {
        @return math.div($size, $base) * 1rem;
      }
      ```

   5. @if 條件判斷、 @for 迴圈套用

      ```css
      @if $spacing-large >15px {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      @for $i from 1 through 5 {
        .col-# {$i} {
          flex: 0 0 math.percentage(math.div($i, 5));
        }
      }

      @each $size in $sizes {
      }
      ```

   6. @mixin 、 @coneten 、 @include

      ```css
      @mixin example {
        @media (max-width: 123px) {
          @content;
        }
      }

      .box {
        width: 1px;
        @include example {
          /* 這裡的樣式會被插入到@conent */
          width: 100%;
        }
      }
      ```
