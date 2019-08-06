let grey = document.querySelector('.grey')
let binary = document.querySelector('.binary')
let output = document.querySelector(".output")
let code = document.querySelector('.code')

//grey to binary
binary.onclick = () => {
  let codearr = code.value.split("")
  let code_to_use = codearr.map(e=>parseInt(e))
  let converted = gtob(code_to_use)
  let html = converted.map(e=>`<span>${e}</span>`).join("")
  output.innerHTML = `<br>Grey code: ${code.value} => Biary Code: ${html}`
  console.log(converted)
}

// binary to grey
grey.onclick = () => {
  let codearr = code.value.split("")
  let code_to_use = codearr.map(e => parseInt(e))
  let converted = btog(code_to_use)
  let html = converted.map(e => `<span>${e}</span>`).join("")
  output.innerHTML = `<br>Binary code: ${code.value} => Grey Code: ${html}`
  console.log(converted)
}

function btog(arr){
  let converted = new Array()
  converted.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    converted.push(xor([arr[i - 1], arr[i]]))
  }
  return converted
}
function gtob(arr){
  let converted = new Array()
  converted.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    let o = xor([converted[i - 1], arr[i]])
    converted.push(o)
  }
  return converted
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
