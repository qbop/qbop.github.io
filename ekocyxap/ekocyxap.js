let interval;
let counter;
const words = [
    "уакареуареуа",
    "хехехехееее",
    "араракуара",
    "араукарска",
    "ексархакос",
    "карасукска",
    "корорарека",
    "курессааре",
    "ааахахаха",
    "аксесоара",
    "араракара",
    "какараска",
    "каракаска",
    "куресааре",
    "кхаккхара",
    "кхукхукху",
    "окакарара",
    "росокорсо",
    "русокоска",
    "сакараука",
    "сахасрара",
    "сераскеер",
    "сурукукус",
    "хоркрукса",
    "ххххххххх",
    "аксесоар",
    "аксесуар",
    "ассарака",
    "екоресор",
    "ексархос",
    "ересоска",
    "какосеос",
    "каракара",
    "каракасо",
    "каракоро",
    "каракура",
    "карасура",
    "каррерас",
    "карсерас",
    "карукера",
    "касахара",
    "каскарка",
    "каукасус",
    "кракауер",
    "ксерксес",
    "ксерокса",
    "кукерска",
    "кукерско",
    "куресаре",
    "кууууууу",
    "окракоук",
    "осеркаре",
    "рокасека",
    "рокерско",
    "рукарара",
    "русокоса",
    "русокосо",
    "сакарска",
    "сакарско",
    "сакурасо",
    "сахарска",
    "сахарско",
    "сеееееее",
    "сераскер",
    "сорокска",
    "сукуруко",
    "сукуруку",
    "сухарска",
    "уесекска",
    "усеркара",
    "хакасско",
    "хакерска",
    "харакера",
    "харесаха",
    "хахахаха",
    "хахаххах",
    "херакрос",
    "хессекуа",
    "хоркрукс",
    "хусарска",
    "акарере",
    "акасака",
    "акасусо",
    "аракауа",
    "аракрус",
    "араксес",
    "араксос",
    "арасуке",
    "арахура",
    "арохкоа",
    "архскар",
    "асакура",
    "асахара",
    "аскеера",
    "ассарак",
    "ауреуса",
    "еееееее",
    "екосорс",
    "екскурс",
    "ересека",
    "ересеке",
    "есекска",
    "есекско",
    "ескорса",
    "еухорос",
    "какаако",
    "каракао",
    "каракас",
    "каракка",
    "каракус",
    "караоке",
    "карасек",
    "караска",
    "караско",
    "караску",
    "карассо",
    "карасук",
    "карахос",
    "кареасу",
    "кареоке",
    "карерас",
    "каркара",
    "каркаре",
    "каркаса",
    "каркасе",
    "каркасо",
    "каркасу",
    "каррара",
    "каррера",
    "карскае",
    "карское",
    "карсуус",
    "каруаро",
    "каруару",
    "касаока",
    "касарео",
    "касарес",
    "касеара",
    "касерес",
    "касерос",
    "каскеро",
    "кассаро",
    "каукура",
    "каурска",
    "каурско",
    "керекоу",
    "кероеса",
    "кесарас",
    "кокорко",
    "коксоак",
    "коракас",
    "корасао",
    "корасау",
    "короско",
    "корсара",
    "косарка",
    "кохерер",
    "кросара",
    "ксеркса",
    "ксерокс",
    "кукарка",
    "кукорко",
    "кукурек",
    "кукурус",
    "курасао",
    "куркуас",
    "курсора",
    "курсура",
    "кускуса",
    "куссара",
    "кхаракс",
    "оаксака",
    "окорока",
    "окраска",
    "оксероа",
    "оркасур",
    "раесурс",
    "ракурса",
    "раскара",
    "рассоха",
    "реекерс",
    "рекоаро",
    "ресурса",
    "рокоссо",
    "росаура",
    "русокос",
    "русское",
    "саарска",
    "сакарка",
    "сакарск",
    "саккара",
    "сарауак",
    "саркара",
    "сарорас",
    "сасерес",
    "сассекс",
    "секуера",
    "сереско",
    "серкера",
    "скараха",
    "сокарас",
    "сокорро",
    "сокоска",
    "сореску",
    "соусуке",
    "суарско",
    "суссекс",
    "уерхаус",
    "укереуе",
    "украска",
    "уорхоук",
    "урааааа",
    "урахара",
    "урукара",
    "урусука",
    "ухерске",
    "ухруска",
    "хакаска",
    "харакас",
    "харакер",
    "харесах",
    "хауроко",
    "хауссер",
    "хахакес",
    "хахахах",
    "хееркес",
    "хексера",
    "херреро",
    "херуско",
    "хорокеу",
    "хоуорса",
    "хохкерк",
    "хоххаус",
    "хуаскар",
    "хукхаус",
    "аархус",
    "аахака",
    "аероса",
    "акакус",
    "акарау",
    "акароа",
    "акасос",
    "акорес",
    "акреос",
    "акрукс",
    "аксака",
    "аксара",
    "акуара",
    "акуаро",
    "акуксо",
    "акхару",
    "арарас",
    "арасар",
    "арасас",
    "араска",
    "арауак",
    "араука",
    "арауко",
    "араухо",
    "арахос",
    "ареаса",
    "аресес",
    "аркоре",
    "арорае",
    "ароука",
    "арсакс",
    "арукас",
    "архара",
    "асарак",
    "асауер",
    "асахар",
    "асесор",
    "аскеер",
    "аскера",
    "аскоро",
    "аскреа",
    "аскура",
    "асуеро",
    "асукар",
    "ауреус",
    "аурора",
    "ауроре",
    "ахахаа",
    "ахуско",
    "ееееее",
    "екасае",
    "екроос",
    "ексарх",
    "еракор",
    "ерерос",
    "ересеа",
    "ересос",
    "еркера",
    "ерсека",
    "ерсеке",
    "ескера",
    "ескура",
    "ессекс",
    "еурека",
    "какара",
    "какару",
    "каксус",
    "какуро",
    "каорсо",
    "карака",
    "карара",
    "караре",
    "караро",
    "карасо",
    "карасу",
    "караха",
    "карека",
    "карера",
    "карере",
    "кареро",
    "кареру",
    "кареса",
    "каркар",
    "каркас",
    "каркур",
    "каркус",
    "карора",
    "кароса",
    "каросо",
    "каррах",
    "каррер",
    "карско",
    "карура",
    "каруру",
    "карусо",
    "кархае",
    "касако",
    "касара",
    "касаро",
    "касера",
    "касесе",
    "кассар",
    "касуру",
    "каукас",
    "каусар",
    "кахоха",
    "каххар",
    "кеаска",
    "кексос",
    "кеокук",
    "керасо",
    "керека",
    "кереко",
    "кереку",
    "керера",
    "кереса",
    "кереуе",
    "керкар",
    "керкук",
    "кероак",
    "керсек",
    "керуак",
    "керхер",
    "кесаре",
    "кескар",
    "кескес",
    "кесуке",
    "кеуруу",
    "кехрос",
    "кокара",
    "кокора",
    "кокуку",
    "кокура",
    "кокуру",
    "коракс",
    "кораро",
    "корахе",
    "кореау",
    "корека",
    "коркос",
    "короас",
    "короке",
    "коросу",
    "корреа",
    "корсак",
    "корсар",
    "корухо",
    "косака",
    "косаку",
    "косара",
    "косера",
    "коскер",
    "коскок",
    "косрае",
    "коусар",
    "кохару",
    "кракер",
    "кракор",
    "кракра",
    "кракус",
    "красер",
    "краска",
    "краско",
    "красус",
    "краусе",
    "крекар",
    "креска",
    "креско",
    "креуса",
    "крехар",
    "крехка",
    "крехко",
    "кроасе",
    "крокер",
    "крокос",
    "крокус",
    "кросас",
    "кроско",
    "крукек",
    "крусес",
    "круска",
    "круукс",
    "ксеркс",
    "ксерос",
    "ксуксу",
    "куакор",
    "куакуа",
    "куекуе",
    "кукара",
    "кукаро",
    "куккук",
    "куоска",
    "кураре",
    "кураса",
    "курека",
    "куркуа",
    "курска",
    "курсор",
    "курсус",
    "куруса",
    "кусака",
    "кусара",
    "кускус",
    "кусура",
    "кхаара",
    "кхесар",
    "кхокха",
    "кхорас",
    "оахака",
    "оескус",
    "окасек",
    "окаусу",
    "окахао",
    "окраса",
    "оксуса",
    "окуока",
    "ораааа",
    "ореске",
    "оркахо",
    "оркска",
    "оркско",
    "ороско",
    "орсара",
    "осаско",
    "осероа",
    "оскара",
    "оскарс",
    "оскско",
    "оускар",
    "оууууу",
    "ракако",
    "ракера",
    "ракерс",
    "ракурс",
    "рарака",
    "рараку",
    "раскос",
    "раукар",
    "раурос",
    "реаско",
    "рекаро",
    "рекаса",
    "рекоха",
    "рекрео",
    "рексар",
    "ресака",
    "ресора",
    "ресурс",
    "рокера",
    "рокерс",
    "рококо",
    "рокосо",
    "рокроа",
    "рокруа",
    "рокуро",
    "росара",
    "роскоу",
    "рррррр",
    "руккас",
    "руксар",
    "рукуру",
    "руоска",
    "рурска",
    "русеку",
    "русеск",
    "рускаа",
    "рускае",
    "руское",
    "руссах",
    "русска",
    "русско",
    "руссос",
    "рухуху",
    "сакака",
    "сакара",
    "сакасу",
    "сакоку",
    "сакска",
    "сакура",
    "сараха",
    "сарера",
    "сарока",
    "саруак",
    "сарукх",
    "саруха",
    "сасаке",
    "сасара",
    "сасекс",
    "сасуке",
    "саурас",
    "саурер",
    "саурус",
    "саусес",
    "сахара",
    "сахсра",
    "сахура",
    "секако",
    "секаку",
    "секера",
    "сексас",
    "секура",
    "сеорас",
    "сеоска",
    "серара",
    "серахс",
    "серера",
    "сересо",
    "сереус",
    "сероуе",
    "серрес",
    "серрра",
    "серска",
    "серско",
    "скакор",
    "скарае",
    "скарах",
    "скарух",
    "скорек",
    "скорос",
    "скорса",
    "скроро",
    "скуако",
    "скуеар",
    "соарес",
    "соасср",
    "сокака",
    "сокаку",
    "соккер",
    "сокоро",
    "сокору",
    "соресу",
    "сорока",
    "сосуке",
    "сосура",
    "соукок",
    "сскоро",
    "сссссс",
    "суарес",
    "сукрас",
    "сусесо",
    "сусесу",
    "суусар",
    "уаскар",
    "уахаха",
    "уахехе",
    "уесекс",
    "уехара",
    "украса",
    "уорсоу",
    "уорхок",
    "урасое",
    "урахус",
    "уррака",
    "уруара",
    "уруасу",
    "уруока",
    "усурка",
    "уураар",
    "ухаеха",
    "ухерка",
    "хакаск",
    "хакера",
    "хакрае",
    "хакухо",
    "харакс",
    "хараре",
    "хараро",
    "хареса",
    "харкор",
    "харкук",
    "харука",
    "хархус",
    "хасара",
    "хасеке",
    "хаукас",
    "хаукос",
    "хаусер",
    "хаусес",
    "хахаке",
    "хахаха",
    "хераре",
    "хереке",
    "херера",
    "хереро",
    "херкер",
    "хероса",
    "херсек",
    "херука",
    "херхор",
    "хехака",
    "хехехе",
    "хокаке",
    "хорасе",
    "хорека",
    "хорокс",
    "хорсес",
    "хорска",
    "хорско",
    "хосрау",
    "хосрех",
    "хоукер",
    "хоуска",
    "хохохо",
    "хуарес",
    "хуахуа",
    "хуеска",
    "хукару",
    "хуссар",
    "хуурах",
    "хххххх",
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