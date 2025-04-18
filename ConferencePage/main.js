const menuList = document.querySelector('.menu-sec');
const menuIcon = document.querySelector('.menu');
const allSpeakers = document.querySelector('.speakers');

menuIcon.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu')) {
    menuList.style.display = 'flex';
    menuIcon.style.display = 'none';
  }
});

menuList.addEventListener('click', (e) => {
  const clicked = e.target.classList.contains('links');
  if (clicked) {
    menuList.style.display = 'none';
    menuIcon.style.display = 'flex';
  }
});

const guests = [
  {
    Name: 'Raxmanov Qurbon Sodikovich',
    Title: 'O‘zbekiston xalqaro islom akademiyasi “Zamonaviy AKT” kafedrasi mudiri',
    Description: 'Tizimli tahlil, boshqaruv va axborotni qayta ishlash, dasturiy ta’minot, axborot tizimlari va ularning xavfsizligi, sun’iy intellekt asoslari. ',
    Img: 'https://iiau.uz/storage/e3/a5/46/7123/conversions/-%D2%9A%D1%83%D1%80%D0%B1%D0%BE%D0%BD-%D0%A1%D0%BE%D0%B4%D0%B8%D0%BA%D0%BE%D0%B2%D0%B8%D1%87-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-xl.jpg',
    Alt: 'speaker1',
  },

  {
    Name: 'Xodjayeva Mavluda Sabirovna',
    Title: 'O‘zbekiston xalqaro islom akademiyasi “Zamonaviy axborot-kommunikatsiya texnologiyalari” kafedrasi dotsenti v.b.',
    Description: 'Boshqaruv, tizimli taxlil, axborotlarni qayta ishlash',
    Img: 'https://iiau.uz/storage/e3/01/97/7128/conversions/-%D0%9C%D0%B0%D0%B2%D0%BB%D1%8E%D0%B4%D0%B0-%D0%A1%D0%B0%D0%B1%D0%B8%D1%80%D0%BE%D0%B2%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-xl.jpg',
    Alt: 'speaker2',
  },

  {
    Name: 'Dadamuxamedov Alimjon Irgashevich',
    Title: 'O‘zbekiston xalqaro islom akademiyasi “Zamonaviy axborot-kommunikatsiya texnologilari” kafedrasi katta o’qituvchisi ',
    Description: 'Taqsimlangan maʼlumotlar bazasi axborotlarining ishonchliligini taʼminlash, optimal taqdim etishning model va algortimlari',
    Img: 'https://iiau.uz/storage/64/98/6d/7124/conversions/-%D0%90%D0%BB%D0%B8%D0%BC%D0%B6%D0%BE%D0%BD-%D0%98%D1%80%D0%B3%D0%B0%D1%88%D0%B5%D0%B2%D0%B8%D1%87-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-xl.jpg',
    Alt: 'speaker3',
  },

  {
    Name: 'Tuxtanazarov Dilmurod Solijonovich',
    Title: 'O‘zbekiston xalqaro islom akademiyasi “Zamonaviy axborot-kommunikatsiya texnologilari” kafedrasi dotsenti',
    Description: 'Foydali konlardagi ishlab chiqarish jarayonlarini matematik modellashtirish, sonli yechish va dasturiy ta’minotlar ishlab chiqish',
    Img: 'https://iiau.uz/storage/80/f7/32/7125/conversions/-%D0%94%D0%B8%D0%BB%D0%BC%D1%83%D1%80%D0%BE%D0%B4-%D0%A1%D0%BE%D0%BB%D0%B8%D0%B6%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-xl.jpg',
    Alt: 'speaker4',
  },

  {
    Name: 'Jumayev Turdali Saminjonovich',
    Title: 'O‘zbekiston xalqaro islom akademiyasi “Zamonaviy axborot-kommunikatsiya texnologilari” kafedrasi dotsenti',
    Description: 'Tasvirlarga dastlabki ishlov berish, tasvirlarni xarakterlovchi reprezentativ belgilarini ajratish, biometric parametrlar asosida shaxsni tanib olish ',
    Img: 'https://iiau.uz/storage/bc/c2/bd/7129/conversions/-%D0%A2%D1%83%D1%80%D0%B4%D0%B0%D0%BB%D0%B8-%D0%A1%D0%B0%D0%BC%D0%B8%D0%BD%D0%B6%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-xl.jpg',
    Alt: 'speaker5',
  },

  {
    Name: 'Maxkamov Anvarjon Abdujabborovich',
    Title: 'O‘zbekiston xalqaro islom akademiyasi “Zamonaviy axborot-kommunikatsiya texnologilari” kafedrasi dotsenti',
    Description: 'Tasvirlarga dastlabki ishlov berish, tasvirlarni xarakterlovchi reprezentativ belgilarini ajratish, biometric parametrlar asosida shaxsni tanib olish ',
    Img: 'https://iiau.uz/storage/cb/93/98/7126/conversions/-%D0%90%D0%BD%D0%B2%D0%B0%D1%80%D0%B6%D0%BE%D0%BD-%D0%90%D0%B1%D0%B4%D1%83%D0%B6%D0%B0%D0%B1%D0%B1%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-xl.jpg',
    Alt: 'speaker6',
  },
];

function guestSpeakers() {
  let speakerOut = '';
  for (let i = 0; i < guests.length; i += 1) {
    speakerOut += `
        <li class="guest">
        <img src="${guests[i].Img}" alt="${guests[i].Alt}">
        <section>
        <h3>
        ${guests[i].Name}
        </h3>
        <p class="p1">
        ${guests[i].Title}
        </p>
        <p class="p2">
        ${guests[i].Description}
        </p>
        </section>
        </li>`;
  }

  allSpeakers.innerHTML = speakerOut;
}

guestSpeakers();

const loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.onclick = () => {
  const boxes = [...document.querySelectorAll('.sec3 .speakers .guest')];
  for (let i = currentItem; i < currentItem + 2; i += 1) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 2;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
