# Demo 編號與詢價摘要

此頁是膜力佳台灣靜態 MVP 的 Demo 編號功能說明頁。

目前線上首頁已具備：

- 商品卡
- 加入詢價清單
- 右側清單
- 數量加減
- 清空清單
- 本機 localStorage 保存

## Demo 編號規則

格式：

```text
DEMO-五位數字
```

範例：

```text
DEMO-58291
```

## 詢價摘要格式

```text
膜力佳 Demo 詢價摘要
Demo 編號：DEMO-58291

商品清單：
- iPhone 16 Pro ClearView AR 低反射膜 x 1
- iPad Air PaperTouch 可拆式類紙膜 x 2

備註：目前為前端測試資料，不會送出到後台。
```

## 下一步 Patch

等 GitHub connector 允許再次修改 products.js 時，將以下功能貼入：

1. 讀取 localStorage 的 `molijiaInquiryList`
2. 產生 `DEMO-xxxxx`
3. 顯示商品名稱、價格、數量與參考合計
4. 加上複製摘要按鈕

## 目前狀態

HTML 獨立頁因 inline script 被安全檢查擋住，因此先以 Markdown 頁面保存流程與格式。
