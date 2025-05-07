const list = document.querySelector('ul')
console.log(`Number of priority groups: ${list.children.length}`)

const listArray= Array.from(list.children)

listArray.forEach((item) =>{
  const priority = item.querySelectorAll('h2')[0].textContent
   console.log(`Priority: ${priority}`)
   const tasks = item.querySelectorAll('li')
   console.log(tasks.length)
})