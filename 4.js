const valorCompra = parseInt(prompt("Digite o valor do produto: "));
  console.log(valorCompra);

const valorVenda1 = valorCompra * (45/100) + valorCompra;
const valorVenda2 = valorCompra * (30/100) + valorCompra;

if(valorCompra < 20){
  console.log(`O valor de venda é ${valorVenda1}: `)
}else{
  console.lsog(`O valor de venda é ${valorVenda2}: `)
}