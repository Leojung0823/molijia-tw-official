const deviceCategories = [
  { icon:"📱", title:"iPhone", text:"AR 低反射、防窺、高清鋼化、鏡頭貼。適合日常通勤、戶外導航與高頻社群使用。", link:"查看手機系列" },
  { icon:"✍️", title:"iPad", text:"AR 高清、類紙、可拆式類紙。適合學生筆記、繪圖、追劇與簡報。", link:"查看 iPad 系列" },
  { icon:"💻", title:"MacBook", text:"抗反光、防窺、螢幕保護。適合商務、辦公、咖啡廳與遠端工作。", link:"查看 MacBook 系列" },
  { icon:"🧩", title:"Custom", text:"公司機、教育平板、展示設備與特殊尺寸保護貼，支援專案報價。", link:"企業客製洽詢" }
];

const products = [
  { name:"iPhone ClearView AR 高清鋼化膜", category:"iPhone", badges:["hot","new"], summary:"主打低反射、高透光與順滑觸控，保留螢幕裸機清晰感。", features:["AR 低反射","高透光","抗指紋","9H"], price:"商城規劃中" },
  { name:"iPhone Privacy Shield 防窺保護貼", category:"iPhone", badges:["hot"], summary:"左右視角遮蔽，適合捷運、辦公、商務訊息與個人隱私保護。", features:["防窺","高清","抗刮","通勤"], price:"詢價中" },
  { name:"iPad PaperTouch 可拆式類紙膜", category:"iPad", badges:["hot","new"], summary:"寫字時裝上，看影片時拆下，兼顧 Apple Pencil 手感與螢幕畫質。", features:["類紙手感","可拆式","Apple Pencil","收納片"], price:"台灣定價待定" },
  { name:"iPad ClearView AR 高清保護膜", category:"iPad", badges:["new"], summary:"降低窗邊與燈具反射，適合閱讀、追劇、簡報與長時間使用。", features:["AR","高清","低反射","閱讀"], price:"台灣定價待定" },
  { name:"MacBook Anti-Glare 螢幕膜", category:"MacBook", badges:["business"], summary:"降低辦公室燈光與戶外反光，提升長時間工作的閱讀舒適度。", features:["抗反光","辦公","MacBook","B2B"], price:"企業詢價" },
  { name:"MacBook Privacy 商務防窺膜", category:"MacBook", badges:["business","hot"], summary:"適合主管、業務與公司機採購，保護工作資料與客戶資訊。", features:["防窺","可拆規劃","商務","隱私"], price:"企業詢價" },
  { name:"Camera Lens 透明鏡頭保護貼", category:"Lens", badges:["new"], summary:"與手機膜組合銷售，提高客單價並補足手機整體防護。", features:["鏡頭防刮","高透","組合包","易貼"], price:"商城規劃中" },
  { name:"Business Custom 客製尺寸方案", category:"B2B", badges:["business"], summary:"支援教育、展示、工控、醫療與企業設備大量採購需求。", features:["客製尺寸","大量採購","專案報價","台灣客服"], price:"專案報價" }
];

function renderDeviceGrid(){
  const grid = document.getElementById("deviceGrid");
  if(!grid) return;
  grid.innerHTML = deviceCategories.map(item => `
    <article class="device-card">
      <div>
        <div class="device-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
      <a href="#products">${item.link} →</a>
    </article>
  `).join("");
}

function productCard(product){
  const badges = product.badges.map(b => `<span class="badge">${b}</span>`).join("");
  const features = product.features.map(f => `<span class="feature">${f}</span>`).join("");
  return `
    <article class="product-card" data-category="${product.category}" data-badges="${product.badges.join(" ")}">
      <div class="badge-row">${badges}</div>
      <h3>${product.name}</h3>
      <p>${product.summary}</p>
      <div class="feature-row">${features}</div>
      <div class="price-row"><span class="price">${product.price}</span><span class="status">規劃中</span></div>
      <button class="add-btn" type="button">加入詢價清單</button>
    </article>`;
}

function renderProducts(filter="all"){
  const grid = document.getElementById("productGrid");
  if(!grid) return;
  const filtered = filter === "all" ? products : products.filter(product => product.badges.includes(filter));
  grid.innerHTML = filtered.map(productCard).join("");
}

function setupTabs(){
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
      tab.classList.add("active");
      renderProducts(tab.dataset.filter);
    });
  });
}

renderDeviceGrid();
renderProducts();
setupTabs();
