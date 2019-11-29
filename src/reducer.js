const initialstate = {
    total: 0,
    gadget: [
        {   
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_83_1081_0.jpg',
            title: 'Apple Airpods MV7N2RU/A (White)',
            price: 89990
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_1018_92_2.jpg',
            title: 'HyperX Cloud Alpha (HX-HSCA-RD/EE)',
            price: 46990
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_88_176_0.jpg',
            title: 'HyperX Alloy FPS Pro Cherry MX Red',
            price: 40990
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_504_75_0.png',
            title: 'Microsoft Xbox One Fortnite WL3-00164',
            price: 29990
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1711_1.jpg',
            title: 'iPhone XS Max 256GB Gold',
            price: 569890
        },{
            img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1525_1.png',
            title: 'Asus Vivobook 15 X512FA-BQ810T Transparent Silver (90NB0KR2-M11940)',
            price: 329990
        }
    ]
}

const reducer = (state = initialstate,action) => {
    var t = 0;
    switch(action.type){
        case 'BUY': 
            for(var z = 0; z<action.payload.number; z++){
                t=t+state.gadget[action.payload.id].price
            }
            return{
                ...state,
                total: state.total+t
            }
        default:
            return state; 
    }
}

export default reducer;