/* (async function f() {
  let data = await ( await fetch(`./data.json`).catch(err => console.error(err))).json()
  let idx = Math.floor(Math.random() * data.students.length)

  document.getElementById(`name`).innerText = data.students[idx]
})() */

fetch(`./data.json`)
  .then(res => {
    res.json()
  })
  .then(data => {
    let idx = Math.floor(Math.random() * data.students.length)

    document.getElementById(`name`).innerText = data.students[idx]
  })
  .catch(err => console.error(err))
