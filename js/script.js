$(document).ready(function () {
    var primaryBtn = $('#click1');
    var secondaryBtns = $('.secondary');
    primaryBtn.click(function () {
        //primaryBtn.classList.add('hide');
        deleteItem(primaryBtn, 600, showSecondaryBtns);
    });

    function deleteItem(item, delay, callback) {
        item.animate({opacity: 0}, 100);

        function removeItem() {
            item.remove();
            callback(delay);
        }

        setTimeout(removeItem, 500);

    }

    function showSecondaryBtns(delay) {
        secondaryBtns.animate({opacity: 1});
    }


});

var text;

function getValue() {
    text = document.getElementById("counT").value;
}

//Локализация страниц
//
// 'use strict';
// var app = angular.module('app', ['pascalprecht.translate']);
// app.config(function ($translateProvider) {
//     $translateProvider.fallbackLanguage('en');
//     $translateProvider.registerAvailableLanguageKeys(['en', 'ru', 'ua'], {
//         'en_*': 'en',
//         'ru_*': 'ru',
//         'ua_*': 'ua'
//     })
//     $translateProvider.translations('en', {
//         support: "Technical support: +380 (68) 254-15-17",
//         develop: "This project was developed in belka workspace",
//         speech: "this is a unique project which allows for everyone to create his own page for his group",
//         enter: "Enter",
//         RegForStudent: "Registration for student",
//         RegForTeacher: "Registration for teacher",
//         RegForGroup: "Registration for the group",
//         Login: "Login",
//         Password: "Password",
//         Registration: "Registration",
//         Log_in: "Log in",
//         QUESTION: "Still no account yet?",
//         BUTTON_LANG_EN: "English",
//         BUTTON_LANG_RU: "Russian",
//         BUTTON_LANG_UA: "Ukrainian"
//     });
//     $translateProvider.translations('ru', {
//         support: "Тех. поддержка: +380 (68) 254-15-17",
//         develop: "Место разработки - 'Белка'",
//         speech: "это уникальный проект ,который позволит каждому желающему студенту создать собственную страницу своей группе",
//         enter: "Вход",
//         RegForStudent: "Регистрация для студента",
//         RegForTeacher: "Регистрация для преподователя",
//         RegForGroup: "Регистрация страницы группы",
//         Login: "Логин",
//         Password: "Пароль",
//         Registration: "Регистрация",
//         Log_in: "Войти",
//         QUESTION: "До сих пор нет аккаунта?",
//         BUTTON_LANG_EN: "Английский",
//         BUTTON_LANG_RU: "Русский",
//         BUTTON_LANG_UA: "Украинский"
//     });
//     $translateProvider.translations('ua', {
//         support: "Тех. підтримка: +380 (68) 254-15-17",
//         develop: "Місце розробки - 'Білка'",
//         speech: "це унікальний проект,який дозволяє створити власну сторінку для своєї групи",
//         enter: "Вхід",
//         RegForStudent: "Реєстрація для студента",
//         RegForTeacher: "Реєстрація для викладача",
//         RegForGroup: "Реєстрація для старости",
//         Login: "Логін",
//         Password: "Пароль",
//         Registration: "Реєстрація",
//         Log_in: "Ввійти",
//         QUESTION: "До тепер немає аккаунту?",
//         BUTTON_LANG_EN: "Англійська",
//         BUTTON_LANG_RU: "Російська",
//         BUTTON_LANG_UA: "Українська"
//     });
//     $translateProvider.useSanitizeValueStrategy('escape');
//     $translateProvider.preferredLanguage('ua');
//
// });
// app.controller('Ctrl', ['$scope', '$translate', function ($scope, $translate) {
//     $scope.changeLanguage = function (key) {
//         $translate.use(key);
//     };
// }]);

//Окончание локализации

//Сдвиг блока после загрузки фото
$('.click').on('click', function (e) {
    e.preventDefault();
    $('#photo').animate({
        width: 300,
        height: 250
    });
});

//Функция выбора загрузки фото на страницу
function getName(str) {
    if (str.lastIndexOf('\\')) {
        var i = str.lastIndexOf('\\') + 1;
    }
    else {
        var i = str.lastIndexOf('/') + 1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}