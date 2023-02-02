
let arr = []
const getinfo = ()=> {
  let username = document.querySelector(".input").value
  let match = document.querySelector(".seleck").value
  let pay = document.querySelector(".input1").value
  let date = new Date()
  if(username && pay) {
    let obj = {
        username: username,
        match: match,
        pay: pay,
        date: date
      }
      arr.push(obj)
      getclick()
      console.log(arr);
  }else{
    alert("Malumotni to'liq kiriting")
  }
  
}
getinfo();

function getclick() {
    let index = 1
    let tr = ""
    for (let td of arr) {
        tr+= "<tr>" +
        "<td>" + index++  + "</td>" +
        "<td>" + td.username + "</td>" +
        "<td>" + td.match + "</td>" +
        "<td>" + td.pay + "</td>" +
        "<td>" + td.date + "</td>" +
        "</tr>"
    }
    document.querySelector(".tbody").innerHTML = tr

    
      username.value = ""
      match.value = ""
      pay.value = ""
}