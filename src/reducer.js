const initialstate = {
    total: 0,
    gadget: [
        {
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_83_1081_0.jpg',
            title: 'Apple Airpods MV7N2RU/A (White)',
            price: 89990,
            num: 1
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_1018_92_2.jpg',
            title: 'HyperX Cloud Alpha (HX-HSCA-RD/EE)',
            price: 46990,
            num: 1
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_88_176_0.jpg',
            title: 'HyperX Alloy FPS Pro Cherry MX Red',
            price: 40990,
            num: 1
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_504_75_0.png',
            title: 'Microsoft Xbox One Fortnite WL3-00164',
            price: 29990,
            num: 1
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1711_1.jpg',
            title: 'iPhone XS Max 256GB Gold',
            price: 569890,
            num: 1
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1525_1.png',
            title: 'Asus Vivobook 15 X512FA-BQ810T Transparent Silver (90NB0KR2-M11940)',
            price: 329990,
            num: 1
        }
    
    ]
}

const reducer = (state = initialstate,action) => {
    switch(action.type){
        case 'BUY': 
            return state;
        case 'INC':
            return state.gadget[action.payload].num + 1;
        case 'DEC':
            return state.gadget[action.payload].num - 1;
        default:
            return state; 
    }
}
export default reducer;