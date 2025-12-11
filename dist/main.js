
const allbtn = document.getElementById(`allbtn`);
const activebtn = document.getElementById(`activebtn`);
const inactivebtn = document.getElementById(`inactivebtn`);

const theme = document.getElementById(`theme`);
const bg = document.querySelector('.page');

const extentions = Array.from(document.querySelectorAll(`.extention`));


allbtn.classList.add('active');

// show all
allbtn.addEventListener('click', () => {
  extentions.forEach(ex => {
    ex.classList.remove('hidden');
  });
  allbtn.classList.add('active');
  activebtn.classList.remove('active');
  inactivebtn.classList.remove('active');
})

// show on
activebtn.addEventListener('click', () => {
  extentions.forEach(ex => {
    let on = ex.querySelector('.turn-on-off');
    if(on.classList.contains('on')){
      ex.classList.remove('hidden');
    } else {
      ex.classList.add('hidden');
    }
    allbtn.classList.remove('active');
    activebtn.classList.add('active');
    inactivebtn.classList.remove('active');
  });
})

// show off
inactivebtn.addEventListener('click', () => {
  extentions.forEach(ex => {
    let on = ex.querySelector('.turn-on-off');
    if(on.classList.contains('on')){
      ex.classList.add('hidden');
    } else {
      ex.classList.remove('hidden');
    }
    allbtn.classList.remove('active');
    activebtn.classList.remove('active');
    inactivebtn.classList.add('active');
  });
})


// handle on-off
extentions.forEach(e => {
  const on = e.querySelector('.turn-on-off');
  on.addEventListener('click', () => {
    console.log('a');
    on.classList.toggle('on');
    if(!on.classList.contains('on') && activebtn.classList.contains('active')){
      e.classList.add('hidden');
    }
    if(on.classList.contains('on') && inactivebtn.classList.contains('active')){
      e.classList.add('hidden');
    }
  });
});

const allwhite = Array.from(document.querySelectorAll('.bg-white'));

theme.addEventListener('click', () => {
  image = theme.firstElementChild;
  image.classList.toggle('active');
  if(image.classList.contains('active')) {
    image.src = "../assets/images/icon-moon.svg"
  }
  else {
    image.src = "../assets/images/icon-sun.svg"
  }

  theme.classList.toggle('dark');
  bg.classList.toggle('dark');
  const nav = document.querySelector('.page > div > div');
  nav.classList.toggle('dark')

    extentions.forEach(e => {
      e.classList.toggle('dark');
      const p = e.querySelector('p')
      p.classList.toggle('dark')
      e.querySelector('.turn-on-off').classList.toggle('dark')
    })
    buttons = document.querySelectorAll('.btn');
    buttons.forEach(e => {
      e.classList.toggle('dark')
    })

    const title = document.querySelector(".title");
    title.classList.toggle('dark')
})
