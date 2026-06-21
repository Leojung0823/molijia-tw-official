const products = [
  {
    name: "手機 AR 低反射鋼化膜",
    category: "Phone",
    summary: "降低戶外與室內燈光反射，保留螢幕清晰度，適合日常高頻使用。",
    tags: ["AR低反射", "高清", "抗指紋", "防刮"],
    status: "Phase 1 展示｜Phase 2 開放下單"
  },
  {
    name: "手機防窺鋼化膜",
    category: "Phone",
    summary: "左右視角防窺，適合通勤、商務、社群訊息與工作資料保護。",
    tags: ["防窺", "隱私", "通勤", "商務"],
    status: "Phase 1 展示｜Phase 2 開放下單"
  },
  {
    name: "iPad AR 高清低反射膜",
    category: "Tablet",
    summary: "追劇、閱讀、簡報都適合，降低反光但不強調紙感顆粒。",
    tags: ["iPad", "AR", "追劇", "閱讀"],
    status: "Phase 1 展示｜Phase 2 開放下單"
  },
  {
    name: "可拆卸類紙膜",
    category: "Tablet",
    summary: "寫字時裝上，看影片時拆下，適合 Apple Pencil 筆記與繪圖族。",
    tags: ["類紙膜", "可拆式", "Apple Pencil", "筆記"],
    status: "Phase 1 展示｜Phase 2 開放下單"
  },
  {
    name: "框貼類紙膜",
    category: "Tablet",
    summary: "穩固不易移位，適合大量書寫、上課筆記與固定使用情境。",
    tags: ["框貼", "書寫感", "不易翹邊", "學生"],
    status: "Phase 1 展示｜Phase 2 開放下單"
  },
  {
    name: "MacBook AR 螢幕膜",
    category: "Laptop",
    summary: "降低辦公室燈光與咖啡廳反光，保護筆電螢幕表面。",
    tags: ["MacBook", "筆電", "低反射", "辦公"],
    status: "Phase 1 展示｜Phase 2 開放下單"
  }
];

const productList = document.querySelector('#product-list');
productList.innerHTML = products.map(product => `
  <article class="product-card">
    <p class="eyebrow">${product.category}</p>
    <h3>${product.name}</h3>
    <p>${product.summary}</p>
    <div class="tag-row">${product.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
    <div class="status">${product.status}</div>
  </article>
`).join('');
