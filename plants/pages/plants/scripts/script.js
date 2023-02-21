/*Burger menu*/
const iconMenu = document.querySelector('.header__burger'),
    menuLinks = document.querySelectorAll('.menu__item'),
    navigationMenu = document.querySelector('.navigation'),
    backgroundShadow = document.querySelector('.bg_shadow');


/*активация и деактицаия бургера*/
iconMenu.addEventListener("click", function (e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    navigationMenu.classList.toggle('_active');
    backgroundShadow.classList.toggle('_active');
});

/*При нажатии на тень на фоне, убирается меню*/
backgroundShadow.addEventListener("click", function (e){
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    navigationMenu.classList.remove('_active');
    backgroundShadow.classList.remove('_active');
});
function onMenuLinkClick(e){ /*При нажатии на существующую ссылку закрыть*/ 
const menuLink = e.target;
if (iconMenu.classList.contains('_active')){
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    navigationMenu.classList.remove('_active');
    backgroundShadow.classList.remove('_active');
    }
}
if (menuLinks.length > 0){ /*Проверка ссылок, которые есть*/
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
});
}

/*Accordion menu*/
const accordItem = document.querySelectorAll('.accord__item'), /*Объявляем переменные*/
        accordBody = document.querySelectorAll('.accord__body'),
        accordHeader = document.querySelectorAll('.accord__head');
accordHeader.forEach((item, i) => { /*Для каждой кнопки (Basics, Standard and Pro care)*/
    item.addEventListener('click', (e) => {
        if (accordHeader[i].classList.contains('active') && accordBody[i].classList.contains('active')) {
            /*Если содержит клас актив, то убираем их*/
            accordHeader[i].classList.remove('active');
            accordBody[i].classList.remove('active');/*Удаляем эти классы*/
        } else {
            accordBody.forEach((n) => n.classList.remove('active'));
            accordHeader.forEach((n) => n.classList.remove('active')); /*Если другие вкладки открыты, то удаляем там класс active*/
            accordHeader[i].classList.add('active');
            accordBody[i].classList.add('active');/*После удаления добавляем класс*/
        }
    });
});





/* Contact us Селект, выбор города*/
let dropDownList = document.querySelector('.drop-down__list'),
    dropDownButton = document.querySelector('.select-drop-down_btn'),
    dropDownIcon = document.querySelector('.contact_icon'),
    cardsItem = document.querySelectorAll('.cards__item'),
    dropDownItem = document.querySelectorAll('.drop-down__city'),
    dropDownTitle = document.querySelector('.contact__text'),
    dropDownButtonText = dropDownButton.textContent;
dropDownButton.addEventListener('click', () => { //Работа с самой кнопкой и выпадающим меню
    if (dropDownButton.classList.contains('active') && dropDownList.classList.contains('active') && dropDownIcon.classList.contains('active')) {
        //Если содержит класс active
        dropDownButton.classList.remove('active');
        dropDownList.classList.remove('active');
        dropDownIcon.classList.remove('active');//Очищаем
    } else {
        dropDownButton.classList.add('active'); //Если нет класса, то добавляем
        dropDownList.classList.add('active');
        dropDownIcon.classList.add('active');
        cardsItem.forEach((item) => item.classList.remove('active')); //Убираем прошлые карточки с экрана
    }
    dropDownItem.forEach((item, i) => { //Добавляем карточку на экран
        item.addEventListener('click', () => {
            dropDownList.classList.remove('active');
            dropDownIcon.classList.remove('active');
            cardsItem[i].classList.add('active');
            dropDownTitle.innerHTML = item.textContent; //Устанавливаем название города на кнопку
        }); //textContent позволяет считывать или задавать текстовое содержимое элемента. Обращение к свойству вернёт 
        //строку, которая будет состоять из текстового содержимого всех вложенных элементов, 
        //даже если они скрыты с помощью CSS и не видны на экране.
    });
});



/*Фильтр Services*/

let serviceButtonsItem = document.querySelectorAll('.services_btn');
let serviceBlock = document.querySelectorAll('.services_card');
let blockTitleService = document.querySelectorAll('.card_title');
let arr = [];
let counter = 0;
serviceButtonsItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        serviceBlock.forEach((item1) => item1.classList.remove('active'));
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            serviceBlock.forEach((block, j) => {
                if (blockTitleService[j].textContent.includes(item.textContent.slice(0, 3))) arr.splice(arr.indexOf(block), 1);
            });
            counter -= 1;
        } else {
            if (counter < 2) {
                item.classList.add('active');
                serviceBlock.forEach((block, j) => {
                    if (blockTitleService[j].textContent.includes(item.textContent.slice(0, 3))) arr.push(block);
                });
                counter += 1;
            }
        }
        if (arr.length !== 0) {
            serviceBlock.forEach((block) => {
                if (!arr.includes(block)) block.classList.add('active');
            });
        } else serviceBlock.forEach((block) => block.classList.remove('active'));
    });
});



