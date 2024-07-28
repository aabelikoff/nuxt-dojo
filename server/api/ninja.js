export default defineEventHandler(async event => {
  // const { name } = getQuery(event);

  // const { age } = await readBody(event);

  // const apiKey = "cur_live_oYxo1aP83rzWclgsxKmpnQ2uW7aXBil26pRP0UVY";

  const { data } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_oYxo1aP83rzWclgsxKmpnQ2uW7aXBil26pRP0UVY");

  return {
    // message: `Hello, ${name}! You are ${age} years old`,
    ...data,
  };
});
