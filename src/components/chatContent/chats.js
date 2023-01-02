export const chatItms = [];
async function fetchData() {
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=7ae2c8b9a144d8aaa84b77e8acdb606a8c3ecdf22d9ff1daba8a22b4ebab1c63"
  );
  if (!response.ok) {
    throw new Error("Data coud not be fetched!");
  } else {
    const dta = await response.json();
    const info = dta.Data;
    for (var i = 0; i < 10; i++) {
      chatItms.push({
        // key: i+1,
        fullname: info[i].CoinInfo.FullName,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
        type: "",
        price:info[i].RAW.USD.PRICE
      });
    }
  }
}
fetchData();
console.log(chatItms)

export default chatItms;
