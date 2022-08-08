const btn = document.querySelector('.btn'),
  image = document.querySelector('.img'),
  url = 'https://aws.random.cat/meow';

async function fetchHandler() {
  try {
    const response = await fetch(url)
    const data = await response.json()
    image.src = data.file
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

btn.addEventListener('click', () => {
  let isLoaded = image.complete
  if (isLoaded) {
    fetchHandler();
  }
})