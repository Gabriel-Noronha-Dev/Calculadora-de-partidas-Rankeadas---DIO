let win = 35
let lose = 9
let rank
let rankrate = win - lose

calcularRank (rankrate)

function calcularRank(rankrate) {
  switch (true) {
    case rankrate < 10:
      rank = "Ferro";
      break;
    case rankrate >= 11 && rankrate < 20:
      rank = "Bronze";
      break;
    case rankrate >= 21 && rankrate < 51:
      rank = "Prata";
      break;
    case rankrate >= 51 && rankrate < 81: 
      rank = "Ouro"
      break;
    case rankrate >= 81 && rankrate < 91:
      rank = "Diamante"
      break; 
    case rankrate >=91 && rankrate < 100:
      rank = "Lendário"
      break; 
    case rankrate >= 100:
      rank = "Imortal"  
      
    }
    }

    console.log (`O heroi tem um saldo de ${rankrate} de vitória e esta no nível ${rank}`)
