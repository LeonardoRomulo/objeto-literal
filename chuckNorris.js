// coleção de objetos com as curiosidades de Chuck Norris com 10 objetos do 0 ao 9
var curiosidades_chuck_norris=[
    {titulo:"Cuidados com a higiene bucal",     conteudo:"Chuck Norris usa arame farpado com fio dental."},
    {titulo:"Fórmula para maratonar séries",    conteudo:"Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos"},
    {titulo:"Suicida que não morre",            conteudo:"Chuck Norris já foi homem bomba 34 vezes."},
    {titulo:"Olhos que tudo veem",              conteudo:"Chuck Norris já viu o homem invisível."},
    {titulo:"Manipulando o tempo",              conteudo:"Chuck Norris não usa relógio. Ele decide que horas são."},
    {titulo:"Praticando esportes radicais",     conteudo:"Chuck Norris faz bungee jump sem corda."},
    {titulo:"Não vale chorar",                  conteudo:"Chuck Norris faz cebolas chorarem"},
    {titulo:"Tempero de fogo",                  conteudo:"Chuck Norris usa pólvora como tempero"},
    {titulo:"Extinção dos dinossauros",         conteudo:"Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    {titulo:"Contando sem parar",               conteudo:"Chuck Norris contou até o infinito. Duas vezes"}
];

var tamanho_colecao = curiosidades_chuck_norris.length // Criamos aqui uma variável para guardar o tamanho da coleção de objetos

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao); //Criamos uma variável para guardar o número aleatório sorteado.

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado]; // a variável curiosidade escolhida irá receber a curiosidade sorteada por meio do índice do objeto sorteado

var titulo_curiosidade = curiosidade_escolhida.titulo;// Criamos a variável para guardar o titulo da curiosidade do número aleatório que foi sorteado
var conteudo_curiosidade = curiosidade_escolhida.conteudo;//criamos a variável conteudo curiosidade para guardar o conteudo da curiosidade sorteada

//Aqui imprimimos na tela a curiosidade sorteada aleatoriamente para o usuário
console.log("CURIOSIDADE SOBRE CHUCK NORRIS")
console.log("Título: "+titulo_curiosidade);
console.log("Conteúdo: "+conteudo_curiosidade)


// math.random = função nativa do js == retorna um número aleatório ente 0<1 : 1 não incluso números possíveis = 0.98786455 // 0.984576 (Math.random()* tamanho.colecao) ==> 0.984576 *10 = 9,8786455
//math.random = arredonda para um número abaixo para o número inteiro mais próximo ===> 9,8786455 = arredonda para 9

