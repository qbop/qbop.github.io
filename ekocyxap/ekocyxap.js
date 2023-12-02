let interval;
let counter;
const words = [
    "аксесоара",
    "какараска",
    "каракаска",
    "русокоска",
    "каракура",
    "ксерокса",
    "кукерска",
    "кукерско",
    "рокерско",
    "русокоса",
    "русокосо",
    "сахарска",
    "сахарско",
    "сукуруко",
    "сукуруку",
    "сухарска",
    "хакерска",
    "харесаха",
    "хусарска",
    "караоке",
    "кокорко",
    "ксерокс",
    "кукурек",
    "кукурус",
    "курсора",
    "курсура",
    "кускуса",
    "окраска",
    "ракурса",
    "ресурса",
    "русокос",
    "скараха",
    "украска",
    "харесах",
    "аскера",
    "корсак",
    "корсар",
    "кракер",
    "кракра",
    "краска",
    "крехка",
    "крехко",
    "крокер",
    "курсор",
    "кускус",
    "кусура",
    "оскара",
    "ракурс",
    "рекоха",
    "ресора",
    "ресурс",
    "рокера",
    "сахара",
    "секура",
    "скарах",
    "сокака",
    "суарес",
    "украса",
    "усурка",
    "ухаеха",
    "хакера",
    "хареса",
    "хорска",
    "хорско",
    "акура",
    "аскер",
    "какао",
    "карах",
    "касае",
    "корса",
    "косак",
    "косар",
    "косур",
    "крака",
    "крако",
    "краса",
    "краха",
    "кукер",
    "курек",
    "курес",
    "курка",
    "курко",
    "курса",
    "кусур",
    "кухар",
    "ореха",
    "орска",
    "осака",
    "осека",
    "осера",
    "оскар",
    "рееха",
    "рекох",
    "рокер",
    "роско",
    "рохка",
    "рохко",
    "руска",
    "руско",
    "саеко",
    "сакао",
    "сакар",
    "саксо",
    "сарко",
    "сахер",
    "сееха",
    "секса",
    "серес",
    "серех",
    "серка",
    "серко",
    "скара",
    "скока",
    "скоко",
    "скоро",
    "скука",
    "соаре",
    "сокер",
    "сорос",
    "сорса",
    "срока",
    "сроко",
    "сукра",
    "сукро",
    "сурка",
    "сурко",
    "сусак",
    "сусек",
    "суска",
    "сухар",
    "урока",
    "усера",
    "ухура",
    "хакер",
    "херес",
    "херос",
    "хесар",
    "хеско",
    "хесус",
    "хореа",
    "хорхе",
    "хурка",
    "аеро",
    "арка",
    "ерер",
    "ерес",
    "ерос",
    "кака",
    "каке",
    "како",
    "кара",
    "каре",
    "каро",
    "каса",
    "кекс",
    "кока",
    "коке",
    "коко",
    "кора",
    "корк",
    "коса",
    "косо",
    "крак",
    "крах",
    "крек",
    "крос",
    "крус",
    "кука",
    "куко",
    "куку",
    "кура",
    "куре",
    "куро",
    "курс",
    "куса",
    "куха",
    "кухо",
    "орах",
    "ореа",
    "орео",
    "орес",
    "орех",
    "орка",
    "орко",
    "осра",
    "охоо",
    "оххх",
    "расо",
    "река",
    "реха",
    "роко",
    "роро",
    "роса",
    "руса",
    "русе",
    "русо",
    "сака",
    "саке",
    "сако",
    "сахе",
    "сека",
    "секс",
    "сера",
    "сере",
    "скок",
    "сока",
    "соко",
    "сорс",
    "соса",
    "сосо",
    "срах",
    "срок",
    "суек",
    "суха",
    "сухо",
    "укор",
    "урок",
    "урус",
    "усое",
    "ухаа",
    "ухае",
    "хаек",
    "хаос",
    "хаус",
    "хаха",
    "херо",
    "хехе",
    "хора",
    "хоре",
    "хоро",
    "хосе",
    "хохо",
    "хрус",
    "ака",
    "аре",
    "аха",
    "еко",
    "ера",
    "еха",
    "ехо",
    "как",
    "кок",
    "кос",
    "кур",
    "кус",
    "кух",
    "око",
    "ора",
    "оро",
    "оса",
    "оха",
    "охо",
    "рак",
    "рок",
    "сак",
    "сек",
    "ска",
    "сок",
    "сра",
    "ура",
    "уха",
    "ухо",
];


function generateWord(event) {
    event.preventDefault();

    window.clearInterval(interval);
    counter = 0;

    let inputField = document.getElementById('word');
    inputField.classList.add('shuffling');

    interval = window.setInterval(() => {

        inputField.value = words[Math.floor(Math.random() * words.length)]
        counter++;
        if (counter > 10) {
            inputField.classList.remove('shuffling');
            window.clearInterval(interval);
        }
    }, 50);

}