# 祥合運動器材-首頁切版練習

> 職前練習

---

## 注意事項

- 專案使用 HTML、JavaScript、CSS (SCSS) 進行開發，並附有 SCSS 共用設定檔 `_setting.scss`。
- 熟悉 SCSS 功能，如 : 變數 (Variables)、Mixin。
- HTML 結構，SEO 標籤語意化。
- CSS 駝峰式 (camelCase)命名方式。
- SCSS 不使用單字裁斷的巢狀結構。

## 使用技術

- HTML
- CSS (SCSS)
- JavaScript
- jQuery
- Slick.js (輪播插件)

## 困難與解決

1. `_setting.scss` **SCSS 共用設定檔理解**。
   - 還是不太懂 `@mixin wrap()`的用法。
2. **banner slick 輪播**
   - 綁 slick 輪播後點擊 **滑鼠下滑** 按鈕，無法滾動至下一區塊。
     - ✅ 不要把 **滑鼠下滑** 按鈕放在輪播項目中，於輪播區外層，固定底部位置解決。
3. **MIT 專業橡膠球製造工廠**
   - ❌ 技術資料`hover`效果的 **圓點虛線** 無法做到還原設計稿的虛線 **間距** 。
   - ✅ slick 輪播：`.slick-dots {li {button {font-size: 0; }}}` 隱藏點點的數字。
   - ❗ 應該先綁**slick 輪播**再寫項目的 CSS，寫完再綁很多設定都被擋掉。
   - 手機板改輪播：
     - ❌ 原本使用 JS 偵測螢幕大小，添加/移除`slick`
     - ✅ 改用初始就綁`slick`，顯示全部 5 筆資料，再根據 RWD 修改顯示資料數&顯示`dots`。
4. 服務項目
   - 項目資料中的文字背景矩形，`hover`效果出現陰影
     - ❌ 使用`clip-path`繪製矩形，`box-shadow`無效。
     - ✅ 改用 `transform: skew(-10deg);` 繪製矩形，並修改絕對位置。
