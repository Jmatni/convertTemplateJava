// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () => {
  
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex,"")
})

// capturando o evento de submit do furmulário.
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break

    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break

    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    
    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")

  } catch (error) {
    // Remove a classe do footer, removendo o resultado da tela.
    footer.classList.remove("show-result")
    
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

// Formata a moeda em BRL
function formatCurrencyBRL (value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}