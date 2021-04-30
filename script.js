const toUrl = string => {
  return `(#${string.split(' ').join('-')})` 
}

console.log(toUrl('13 - Crie uma função de boas vindas ao Bar da Trybe!'))
