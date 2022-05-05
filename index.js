 let countEl = document.getElementById("count-El")
 let saveEl = document.getElementById("save-El")
 let count = 0

 function increment() {
     count += 1
     countEl.textContent = count

 }

 function save() {
     let previous = count + " - "
     saveEl.textContent += previous
     countEl.textContent = 0
     count = 0


 }