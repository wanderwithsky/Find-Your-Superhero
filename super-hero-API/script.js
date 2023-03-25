// SuperHeroAPI - https://superheroapi.com/api/access-token/character-id

const token = '931112971216844'
const BASE = `https://superheroapi.com/api.php/${token}`
const Btn = document.getElementById('getHero')
const heroDiv = document.getElementById('Hero')
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')

// Gets Random Hero
const getSuperHero = (id) => {
  fetch(`${BASE}/${id}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    console.log(json.powerstats)
    
    const name = `<h2>${json.name}</h2>`
    const intelligence = `<h3>🧠 Intelligence: ${json.powerstats.intelligence}</h3>`
    const strength = `<h3>💪 Strength: ${json.powerstats.strength}</h3>`
    const speed = `<h3>⚡ Speed: ${json.powerstats.speed}</h3>`
    const durability = `<h3>🏋️‍♀️ Durability: ${json.powerstats.durability}</h3>`
    const combat = `<h3>⚔️ Combat: ${json.powerstats.combat}</h3>`
    
    heroDiv.innerHTML = `${name}<img src = "${json.image.url}" height = 300 width = 300/>${intelligence}${strength}${speed}${durability}${combat}`
  })
} 

// Get Hero by Search
const heroBySearch = (name) => {
  fetch(`${BASE}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    const hero = json.results[0]
    // console.log(hero)
    const name = `<h2>${hero.name}</h2>`
    const intelligence = `<h3>🧠 Intelligence: ${hero.powerstats.intelligence}</h3>`
    const strength = `<h3>💪 Strength: ${hero.powerstats.strength}</h3>`
    const speed = `<h3>⚡ Speed: ${hero.powerstats.speed}</h3>`
    const durability = `<h3>🏋️‍♀️ Durability: ${hero.powerstats.durability}</h3>`
    const combat = `<h3>⚔️ Combat: ${hero.powerstats.combat}</h3>`

    heroDiv.innerHTML = `${name}<img src = "${hero.image.url}" height = 300 width = 300/>${intelligence}${strength}${speed}${durability}${combat}`    
  })
}

const randomHero = () => {
  const numberOfHeroes = 731
  return  Math.ceil(Math.random() * numberOfHeroes)
}

Btn.onclick = () => getSuperHero(randomHero())
searchBtn.onclick = () => heroBySearch(searchInput.value)
