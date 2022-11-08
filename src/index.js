import "./index.css";

new TradingView.MediumWidget({
  symbols: [
    ["Apple", "AAPL|1D"],
    ["Google", "GOOGL|1D"],
    ["Microsoft", "MSFT|1D"],
    ["Tesla", "NASDAQ:TSLA|1D"],
    ["BTC", "BINANCE:BTCUSDT|1D"],
  ],
  chartOnly: false,
  width: "100%",
  height: "100%",
  locale: "zh_TW",
  colorTheme: "dark",
  autosize: true,
  showVolume: false,
  hideDateRanges: false,
  scalePosition: "right",
  scaleMode: "Normal",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
  fontSize: "10",
  noTimeScale: false,
  valuesTracking: "1",
  chartType: "line",
  backgroundColor: "rgba(0, 0, 0, 0)",
  container_id: "tradingview_a54b1",
});

// ------------價格列輪播----------------
const priceBar = document.getElementById("price-bar");

for (let i = 0; i < 10; i++) {
  const divBox = document.createElement("div");
  divBox.innerHTML = `
  <div
    class="flex-none box-border mr-4 p-4 flex flex-col justify-between w-[200px] h-[100px] bg-card shadow-2xl rounded-md"
  >
    <p class="text-white text-2xl font-bold">GOOGL(Demo)</p>
    <p class="flex justify-between">
      <span class="text-white">171.16</span>
      <span class="text-green-500">+50%</span>
    </p>
  </div>
  `;

  priceBar.append(divBox);
}
