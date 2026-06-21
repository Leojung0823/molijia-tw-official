# 膜力佳台灣官方網站

這是 `molijia-tw-official` 的第一版官方網站，已從原本的一頁式 MVP 升級為更接近國際保護貼商城的官網架構。

## 這次更新重點

參考 LUSA DESIGN 官網常見的商城結構，轉成台灣分公司可用的官方網站版本：

- 頂部促銷列：預留滿額免運、第二件優惠與商城活動訊息
- Header / Mega Menu：依設備選購、功能系列、熱銷商品、技術比較、教學影片與客服
- Shop By Device：iPhone、iPad、MacBook、Watch、Camera Lens
- Functional Series：AR 低反射、防窺隱私、類紙書寫、高清鋼化
- New Arrivals / Hot Sales：用 `products.js` 動態渲染商品卡
- 技術比較：AR / Anti-Glare vs Standard Film
- 品牌故事：定位為「台灣官方入口＋未來商城」
- Learn Videos：貼膜教學、四層結構、防窺展示、AR 高透光展示
- Trust Row：台灣客服、安全付款、售後保固、滿額免運
- Footer：Support / Company / Resource / Business

## 檔案架構

```text
.
├── index.html
├── styles.css
├── products.js
├── .nojekyll
├── README.md
└── docs/
    ├── index.html
    ├── styles.css
    ├── products.js
    └── .nojekyll
```

`docs/index.html` 已做成可獨立發佈的版本。若 GitHub Pages 設定為 `main / docs`，網站會讀取這份內容。

## 建議 GitHub Pages 設定

```text
Settings → Pages
Source: Deploy from a branch
Branch: main
Folder: /docs
```

發佈網址：

```text
https://leojung0823.github.io/molijia-tw-official/
```

## 後續商城開發建議

Phase 1：官方網站與產品教育  
Phase 2：加入價格、購物車、結帳、物流、發票與訂單查詢  
Phase 3：加入會員、企業採購、經銷商報價與客製尺寸詢價  
