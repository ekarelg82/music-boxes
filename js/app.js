// const cAudio = document.querySelector('.c-audio')
// const dAudio = document.querySelector('.d-audio')
// const eAudio = document.querySelector('.e-audio')
// const fAudio = document.querySelector('.f-audio')
// const gAudio = document.querySelector('.g-audio')
// const aAudio = document.querySelector('.a-audio')
// const bAudio = document.querySelector('.b-audio')
// const bAudio = document.querySelector('.c-audio-high')

const notes = {
  a: {
    audio: document.querySelector('.c-audio'),
    pianokey:document.querySelector('.c-key')
  },

  s: {
    audio: document.querySelector('.d-audio'),
    pianokey:document.querySelector('.d-key')
  },
  d: {
    audio: document.querySelector('.e-audio'),
    pianokey:document.querySelector('.e-key')
  },
  f: {
    audio: document.querySelector('.f-audio'),
    pianokey:document.querySelector('.f-key')
  },
  g: {
    audio: document.querySelector('.g-audio'),
    pianokey:document.querySelector('.g-key')
  },
  h: {
    audio: document.querySelector('.a-audio'),
    pianokey:document.querySelector('.a-key')
  },
  j: {
    audio: document.querySelector('.b-audio'),
    pianokey:document.querySelector('.b-key')
  },
  k: {
    audio: document.querySelector('.c-audio-high'),
    pianokey:document.querySelector('.high-c-key')
  }
}
function playNote(note) {
  note.currentTime = 0
  note.play()
}
document.addEventListener('keydown', function(event) {
  if (notes[event.key] === undefined) return

  // notes[event.key].audio.currentTime = 0
  // notes[event.key].audio.play()
  playNote(notes[event.key].audio)
  notes[event.key].pianokey.addClass('active')


})
document.addEventListener('keyup', function(event) {
  if(notes[event.key] === undefined) return
  notes[event.key].pianokey.classlist.remove('active')
})
for(let note in notes) {
  notes[note].pianokey.addEventListener('click', function(event) {
    // notes[note].audio.currentTime = 0
    // notes[note].audio.play()
    playNote(notes[note].audio)
  })
}
