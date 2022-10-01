const targetDate = new Date('December 31, 2022 00:00:00')
const button = document.getElementById('openModal')
const modal = document.getElementById('modal')

button.addEventListener('click', () => {
  modal.classList.add('open')
})

const countdown = setInterval(function () {
  const now = new Date().getTime()
  const timeDate = targetDate - now

  let days = Math.floor(timeDate / (1000 * 60 * 60 * 24))
  let hours = Math.floor((timeDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((timeDate % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeDate % (1000 * 60)) / 1000)

  document.getElementById('countdown').innerHTML = `
  <div id="countdown" class="countdown">
          <ul>
            <li>
              <span>Dias</span>
              <span class="icon">${days}</span>
            </li>
            <li>
              <span>Horas</span>
              <span class="icon">${hours}</span>
            </li>
            <li>
              <span>Minutos</span>
              <span class="icon">${minutes}</span>
            </li>
            <li>
              <span>Segundos</span>
              <span>${seconds}</span>
            </li>
          </ul>
        </div>
  `
}, 1000)
