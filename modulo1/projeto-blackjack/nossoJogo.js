//PROJETO BLACKJACK

function Blackjack() {

   const cardPlayer1 = comprarCarta()
   const cardPlayer2 = comprarCarta()
   const cardComputer1 = comprarCarta()
   const cardComputer2 = comprarCarta()
   const playerPoint = cardPlayer1.valor + cardPlayer2.valor
   const computerPoint = cardComputer1.valor + cardComputer2.valor
   
   let player = (n1, n2) => {
      return `Usuário - cartas: ${n1.texto} ${n2.texto} - pontuação ${n1.valor + n2.valor}`}
   let computer = (n1, n2) => {
      return `Computador - cartas: ${n1.texto} ${n2.texto} - pontuação ${n1.valor + n2.valor}`}
   
   console.log('Boas vindas ao jogo de Blackjack!')
   if (confirm('Quer iniciar uma nova rodada?') === true) {
      console.log(`${player(cardPlayer1, cardPlayer2)}
${computer(cardComputer1, cardComputer2)}`)
   } if (playerPoint > computerPoint) {
      console.log('O usuário ganhou')
   } if (playerPoint < computerPoint) {
      console.log('O Computador ganhou')
   } if (playerPoint === computerPoint) {
      console.log('Empatou')
   } else {
      console.log('O jogo acabou')
   }
}

Blackjack()

