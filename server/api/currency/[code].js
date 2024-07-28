export default defineEventHandler(async event => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();
  console.log(code);
  console.log(currencyKey);
  //   const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apiKey=${currencyKey}`;
  //   const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apiKey=cur_live_oYxo1aP83rzWclgsxKmpnQ2uW7aXBil26pRP0UVY`;
  const uri = `https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}&currencies=UAH&base_currency=${code}`;

  const { data } = await $fetch(uri);

  return data;
});
