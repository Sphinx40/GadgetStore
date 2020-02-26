import { favourites } from "./actions";

const initialstate = {
    total: 0,
    favourites: [],
    search: '',
    tableActive: false,
    boughtGadgets: [],
    gadget: [
        [
            {
                idx: 0,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_83_1081_0.jpg',
                title: 'Apple Airpods MV7N2RU/A (White)',
                price: 89990,
                description: `Назначение: Обычные
            Тип конструкции: Свободные от проводов (TWS)
            Тип крепления: Без крепления
            Тип подключения: Беспроводное
            Микрофон: Встроенный
            Футляр/чехол в комплекте: Да`
            }, {
                idx: 1,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_1018_92_2.jpg',
                title: 'HyperX Cloud Alpha (HX-HSCA-RD/EE)',
                price: 46990,
                description: `Назначение: Игровые
            Тип конструкции: Накладные
            Тип крепления: С оголовьем
            Импеданс, Ом: 65
            Тип подключения: Проводное
            Длина кабеля, м: 1.3
            Микрофон: Съёмный
            Футляр/чехол в комплекте: Да`
            }, {
                idx: 2,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_88_176_0.jpg',
                title: 'HyperX Alloy FPS Pro Cherry MX Red',
                price: 40990,
                description: `Тип: Игровая
            Тип подключения: Проводная
            Интерфейс: USB
            Кабель в оплетке: Да
            Подсветка: LED
            Тип клавиш: Механические
            Ширина, см: 36`
            }, {
                idx: 3,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_64_451_1.jpg',
                title: 'Планшет Apple iPad Air 10.5" WI-FI 64Гб Gold (MUUL2)',
                price: 259890,
                description: `Диагональ, дюйм: 12.9
            Тип матрицы дисплея: IPS
            Операционная система: iOS 11
            Объем оперативной памяти, ГБ: 4
            Время работы, ч: 10
            Объём встроенной памяти, ГБ: 256`
            }, {
                idx: 4,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1711_1.jpg',
                title: 'iPhone XS Max 256GB Gold',
                price: 569890,
                description: `Диагональ дисплея, дюйм: 6.5
            Разрешение дисплея: 2688x1242
            Операционная система: iOS 12
            Объем оперативной памяти: 4
            Объём встроенной памяти: 256
            Количество SIM-карт: 1
            Стандарт связи: 4G (LTE)
            Стандарт защиты от пыли и влаги: IP68`
            }, {
                idx: 5,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1525_1.png',
                title: 'Asus Vivobook 15 X512FA-BQ810T Transparent Silver (90NB0KR2-M11940)',
                price: 279990,
                description: `Диагональ дисплея, дюйм: 14
            Серия процессора: Intel Core i5
            Модель процессора: 8250U
            Объём оперативной памяти: 8
            Объём SSD накопителя, ГБ: 256`
            }, {
                idx: 6,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_68_115_0.jpg',
                title: 'Игровая консоль Sony Play Station 4 Pro 1TB, Black (CUH-7208B)',
                price: 169990,
                description: `Серия: PlayStation 4 Pro
            Оперативная память, ГБ: 8
            Жесткий диск, ГБ: 1000
            Интерфейс: Ethernet, Wi-Fi, Bluetooth, AUX, USB, USB 3.1`
            }, {
                idx: 7,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_400_489_4.png',
                title: 'Nikon COOLPIX B500 Black',
                price: 85990,
                description: `Тип матрицы: CMOS
            Размер матрицы: Кропнутая (6.2x4.6 мм) 1/2.3"
            Тип автофокуса: Контрастный
            Вес, гр: 500`
            }, {
                idx: 8,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_1152_17_1.jpg',
                title: 'MSI GeForce GTX 1060 GAMING 6G',
                price: 186990,
                description: `Видеопамять: 6 ГБ
            Максимальное разрешение экрана: 7680x4320(8K)
            Частота видеопамяти: 8108 МГц
            Разрядность шины видеопамяти: 192 бит
            Интерфейс поключения: PCI Express x16 3.0
            Порты: DisplayPort, DVI-D, HDMI`
            }, {
                idx: 9,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_911_173_2.jpg',
                title: 'Apple Watch Series 4 GPS 40mm Silver Aluminium Case with Seashell Sport Loop',
                price: 179990,
                description: `Серия: Apple Watch Series 4
            Форма корпуса часов: Прямоугольник
            Способ отображения времени: Цифровой (электронный)
            Материал браслета/ремешка: Нейлон`
            }, {
                idx: 10,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_647_24_0.jpg',
                title: 'Sony HDRAS300R',
                price: 129990,
                description: `Максимальное разрешение записи: Full HD: 1920x1080 / 60p
            Вес, гр: 109
            Тип матрицы: CMOS
            Разрешение матрицы, мпикс: 8.2
            Количество матриц: 1
            Интерфейс: Wi-Fi, Bluetooth`
            }, {
                idx: 11,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_65_244_1.jpg',
                title: 'Samsung LU32R590CWIXCI',
                price: 199990,
                description: `Диагональ, дюйм: 31.5
            Тип матрицы: VA
            Разрешение экрана: 3840x2160
            Формат: 16:9
            Время отклика, мс: 4
            Частота обновления кадров, Гц: 60
            Яркость матрицы, кд/м²: 250
            Интерфейс: 1x HDMI, 1x DisplayPort`
            }], [
            {
                idx: 12,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_95_1466_3.jpg',
                title: 'LED телевизор Philips 50PUS7303/60',
                price: 239990,
                description: `Диагональ экрана:	50″ - 127 см
                Разрешение:	3840x2160 (4K UHD)
                Соотношение сторон:	16:9
                Тип подсветки: Direct
                Поддержка HDR: Да
                Технологии улучшения звука: Clear Sound
                Smart TV: Да
                Wi-Fi: Есть (встроенный)
                Поддержка 3D: Нет `
            }, {
                idx: 13,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_89_497_2.png',
                title: 'Мышь игровая проводная SteelSeries Rival 600 (Black)',
                price: 39890,
                description: `Категория: Игровая
                Соединение: Проводное
                Количество клавиш: 7
                Страна производителя: Китай
                Интерфейс: USB `
            },{
                idx: 14,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1108_3.jpg',
                title: 'Ноутбук Apple MacBook Pro 13″ i5 2.3/8/128Gb Silver (MPXR2)',
                price: 449990,
                description: `Диагональ: 13,3″ - 33,78 см
                Процессор: Intel® Core™ i5
                Операционная система: MacOS X
                Частота процессора: 2.3 ГГц
                Объем оперативной памяти: 8 ГБ
                Тип жесткого диска: SSD
                Объем накопителя: 128 ГБ
                Видеоадаптер: Iris Graphics
                Объем памяти видеоадаптера: SMA (выделяется из операт. памяти) `
            },{
                idx: 15,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_504_18_0.jpg',
                title: 'Шлем виртуальной реальности PlayStation VR в комплекте с камерой V2 и игрой VR Worlds',
                price: 137690,
                description: `Тип: 3d очки
                Тип очков: Активные
                Размер панели: 2,7″ - 68,6 мм
                Совместимые платформы: PS 4
                Технология дисплея:	OLED
                Подключение: Беспроводное
                Подходит для ПК: Нет
                Подходит для смартфонов: Нет
                Подходит для консолей: Да
                Разрешение микроэкранов: Full HD (1920x1080)
                Страна производителя: Китай`
            },{
                idx: 16,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_910_110_1.jpg',
                title: 'Power bank Xiaomi Mi 2s 10000mAh Dark Grey',
                price: 9990,
                description: `Тип аккумулятора: Li-ion
                Емкость аккумулятора: 10000 мАч
                Поддержка быстрой зарядки: Уникальная технология: быстрая зарядка 3.0
                Беспроводная зарядка: Нет
                Зарядка от USB порта: Да
                Разъем Lightning: Нет
                Фонарик: Нет
                Особенности: 9 степеней защиты, одновременно можно заряжать 2 устройства `
            },{
                idx: 17,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_66_212_0.jpg',
                title: 'Компьютер Lenovo IdeaCentre 510-15IKL (90G800MYKZ)',
                price: 182390,
                description: `Категория: Базовые
                Процессор: Intel® Core™ i3
                Количество ядер: 2
                Тактовая частота: 3.9 ГГц
                Socket: BGA1356
                Объем оперативной памяти: 8 ГБ
                Объем жесткого диска: 1 ТБ
                Операционная система: DOS
                Модель процессора: Intel® Core™ i3-7100
                Модель видеоадаптера: 730
                Объем памяти видеоадаптера: 2 ГБ
                Оптический привод: DVD+-RW`
            },{
                idx: 18,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1959_0.jpg',
                title: 'Смартфон Huawei P Smart Z 64GB Midnight Black',
                price: 89890,
                description: `Количество: SIM-карт 	2
                Диагональ дисплея: 6,59″ - 16,74 см
                Объем встроенной памяти: 64 Гб
                Основная камера: 16 Mpx + 2 Mpx
                Фронтальная камера: 16 Mpx `
            },{
                idx: 19,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_66_210_0.jpg',
                title: 'Компьютер Lenovo Legion C530-19ICB (90JX005FKZ)',
                price: 441390,
                description: `Категория: Игровые
                Процессор: Intel® Core™ i7
                Количество ядер: 6
                Тактовая частота: 3.2 ГГц
                Socket: LGA1151
                Объем оперативной памяти: 16 ГБ
                Объем жесткого диска: HDD 1 Тб + SSD 256 Гб
                Операционная система: DOS
                Модель процессора: Intel® Core™ i7-8700
                Модель видеоадаптера: 1050 Ti
                Объем памяти видеоадаптера: 4 ГБ
                Оптический привод: Нет`
            },{
                idx: 20,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1524_0.png',
                title: 'Ноутбук Asus TUF Gaming FX505DD-AL134 Gold Steel (90NR02C1-M03490)',
                price: 259990,
                description: `Диагональ: 15,6″ - 39,62 см
                Процессор: AMD Ryzen 5
                Операционная система: DOS
                Частота процессора: 2.1 ГГц
                Объем оперативной памяти: 8 ГБ
                Тип жесткого диска: HDD
                Объем накопителя: 1 ТБ
                Видеоадаптер: GeForce GTX
                Чипсет видеоадаптера: 1050
                Объем памяти видеоадаптера: 3 ГБ`
            },{
                idx: 21,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_83_808_0.jpg',
                title: 'Гарнитура SteelSeries Arctis 5 White',
                price: 44990,
                description: `Тип наушников: Полноразмерные
                Тип подключения: Проводное
                Частотный диапазон: 20 - 20000 Гц`
            },{
                idx: 22,
                img: 'https://object.pscloud.io/cms/cms/Photo/img_0_65_217_5.jpg',
                title: 'LCD-монитор Acer ED2 (UM.JE2EE.009)',
                price: 122090,
                description: `Диагональ: 31,5″ - 80 см
                Разрешение: 1920х1080 (FullHD)
                Изогнутый экран: Да
                Страна производителя: Китай
                Яркость (Кд): 250 кд/м2
                Частота обновления: 60 Гц
                Время отклика: 4 мс
                Поддержка 3D: Да`
            }
        ]
    ]
}

const buyGadget = (count,page,id,state) => {
    var t = 0;
    for (var z = 0; z < count; z++) {
        t = t + state.gadget[page][id].price
    }
    return {
        ...state,
        total: state.total + t
    }
}

const addToFavourites = (state,fav,page) => {
    const n = state.favourites.findIndex(({ id }) => id === fav)
            if (n < 0) {
                return {
                    ...state,
                    favourites: [...state.favourites, {
                        idx: state.gadget[page][fav].idx,
                        page: page,
                        img: state.gadget[page][fav].img,
                        title: state.gadget[page][fav].title,
                        price: state.gadget[page][fav].price,
                        count: 1
                    }]
                }
            } else {
                return state;
            }
}

const addToBoughtGadgets = (state,index,payload,price,count) => {
    let nn = state.boughtGadgets.findIndex(({ idx }) => idx === index)
            if (nn < 0) {
                return {
                    ...state,
                    boughtGadgets: [...state.boughtGadgets, payload]
                }
            } else {
                let t = [...state.boughtGadgets];
                t.map(item => {
                    if (item.idx === index) {
                        item.price = item.price + price;
                        item.count = item.count + count;
                    }
                })
                return {
                    ...state,
                    boughtGadgets: t
                }
            }
}

const deleteItemInPurchase = (state,payload) => {
    const price = state.boughtGadgets[payload].price;
    const newArray = [
        ...state.boughtGadgets.slice(0, payload),
        ...state.boughtGadgets.slice(payload + 1)
    ];
    return {
        ...state,
        boughtGadgets: newArray,
        total: state.total - price
    }
}

const reducer = (state = initialstate, action) => {

    switch (action.type) {
        case 'BUY':
            return buyGadget(action.payload.number,action.payload.page,action.payload.id,state);

        case 'FAVOURITES':
            return addToFavourites(state,action.payload.fav,action.payload.page)

        case 'DELETE':
            return {
                ...state,
                favourites: action.payload.newArray
            }

        case 'SEARCH':
            return {
                ...state,
                search: action.payload.word
            }

        case 'ACTIVE':
            return {
                ...state,
                tableActive: true
            }

        case 'BOUGHT_GADGETS':
            return addToBoughtGadgets(state,action.payload.idx,action.payload,action.payload.price,action.payload.count)

        case 'DELETE_PURCHASE':
            return deleteItemInPurchase(state,action.payload)    

        default:
            return state;
    }
}

export default reducer;