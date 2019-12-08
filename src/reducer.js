const initialstate = {
    total: 0,
    scroll: false,
    favourites: [],
    search: '',
    tableActive: false,
    gadget: [
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
            idx: 5,
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1525_1.png',
            title: 'Asus Vivobook 15 X512FA-BQ810T Transparent Silver (90NB0KR2-M11940)',
            price: 329990,
            description: `Диагональ дисплея, дюйм: 14
            Серия процессора: Intel Core i5
            Модель процессора: 8250U
            Объём оперативной памяти: 8
            Объём SSD накопителя, ГБ: 256`
        },{
            idx: 6,
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_68_115_0.jpg',
            title: 'Игровая консоль Sony Play Station 4 Pro 1TB, Black (CUH-7208B)',
            price: 169990,
            description: `Серия: PlayStation 4 Pro
            Оперативная память, ГБ: 8
            Жесткий диск, ГБ: 1000
            Интерфейс: Ethernet, Wi-Fi, Bluetooth, AUX, USB, USB 3.1`
        },{
            idx: 7,
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_400_489_4.png',
            title: 'Nikon COOLPIX B500 Black',
            price: 85990,
            description: `Тип матрицы: CMOS
            Размер матрицы: Кропнутая (6.2x4.6 мм) 1/2.3"
            Тип автофокуса: Контрастный
            Вес, гр: 500`
        },{
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
        },{
            idx: 9,
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_911_173_2.jpg',
            title: 'Apple Watch Series 4 GPS 40mm Silver Aluminium Case with Seashell Sport Loop',
            price: 179990,
            description: `Серия: Apple Watch Series 4
            Форма корпуса часов: Прямоугольник
            Способ отображения времени: Цифровой (электронный)
            Материал браслета/ремешка: Нейлон`
        },{
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
        },{
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
        }
    ]
}

const reducer = (state = initialstate,action) => {
    
    switch(action.type){
        case 'BUY': 
            var t = 0;
            for(var z = 0; z<action.payload.number; z++){
                t=t+state.gadget[action.payload.id].price
            }
            return{
                ...state,
                total: state.total+t
            }
        case 'SCROLL':
            return {
                ...state,
                scroll: action.payload.tf
            }
        case 'FAVOURITES': 
            var t = 0;
            for(var z = 0; z<action.payload.num;z++){
                t+=state.gadget[action.payload.fav].price
            }
            return {
                ...state,
                favourites: [...state.favourites,{ 
                                                    img: state.gadget[action.payload.fav].img,
                                                    title: state.gadget[action.payload.fav].title,
                                                    price: t,
                                                    count: action.payload.num,
                                                    id: action.payload.fav
                                                }]
            }
        
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

        default:
            return state; 
    }
}

export default reducer;