let grey = document.querySelector('.grey')
let binary = document.querySelector('.binary')
let output = document.querySelector(".output")
let code = document.querySelector('.code')

//grey to binary
binary.onclick = () => {
  let codearr = code.value.split("")
  let code_to_use = codearr.map(e=>parseInt(e))
  let converted = new Array()
  converted.push(code_to_use[0])
  for(let i=1; i<code_to_use.length; i++){
    converted.push(xor([code_to_use[i-1], code_to_use[i]]))
  }
  let html = converted.map(e=>`<span>${e}</span>`).join("")
  output.innerHTML = `<br>Grey code: ${code.value} => Biary Code: ${html}`
  console.log(converted)
}

// binary to grey
grey.onclick = () => {
  let codearr = code.value.split("")
  let code_to_use = codearr.map(e => parseInt(e))
  let converted = new Array()
  converted.push(code_to_use[0])
  for(let i=1; i<code_to_use.length; i++){
    let o = xor([converted[i-1], code_to_use[i]])
    converted.push(o)
  }
  let html = converted.map(e => `<span>${e}</span>`).join("")
  output.innerHTML = html
  console.log(converted)
}



function xor(arr){
  let sum = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i]==1){
      sum++
    }
  }
  if(sum%2 == 1){
    return 1
  }else{
    return 0
  }
}