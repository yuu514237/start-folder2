function makeCoffee() {
  console.log("☕ スタッフ：先にコーヒーを準備します...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ コーヒーができました！");
      resolve();
    }, 2000); // 2秒
  });
}

function makeSandwich() {
  console.log("🥪 スタッフ：次にサンドイッチを準備します...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ サンドイッチができました！");
      resolve();
    }, 3000); // 3秒
  });
}

async function serveCustomer() {
  console.log("🥪 お客さんがコーヒーとサンドイッチを注文しました");
  
  // 順に実行メッセージを出しつつ、同時並行で作成
  const coffeePromise = makeCoffee();
  const sandwichPromise = makeSandwich();

  await Promise.all([coffeePromise, sandwichPromise]);
  console.log("🍽️ スタッフ：すべてできたので配膳します！");
}

serveCustomer();
