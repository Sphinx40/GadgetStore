import React, { useState, useEffect } from 'react';
import './details.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Label, Header, Button, Container, Grid, Image, Divider } from 'semantic-ui-react';
import { moneyFormat } from '../../utils/helpers';

const Details = ({ id, state, buy, favourites, active, bought, page }) => {
    const [num, setNum] = useState(1)

    useEffect(() => {
        if (scroll) {
            window.scrollTo(0, 0)
        }
    }, [])


    const minus = () => {
        if (num > 1) {
            setNum(num - 1)
        }
    }

    const plus = () => {
        setNum(num + 1)
    }

    const handleBuy = () => {
        buy(id, num, page)
        setNum(1)
        const g = {
            idx: gadget[page][id].idx,
            img: gadget[page][id].img,
            title: gadget[page][id].title,
            price: 0,
            count: num
        }

        for (var t = 0; t < num; t++) {
            g.price = g.price + gadget[page][id].price;
        }

        bought(g)
    }

    const izbrannoe = () => {
        active()
        setNum(1)
        favourites(id, page)
    }

    const { gadget, scroll } = state;

    return (
        <div className='details'>
            <Container>
                <Grid columns={3} >
                    <Grid.Row>
                        <Grid.Column stretched>
                            <Image className='gadgetImage' src={gadget[page][id].img} />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' inverted>{gadget[page][id].title}</Header>
                            <Label.Group tag>
                                <Label as='a' color='red'>{moneyFormat(gadget[page][id].price)} тг</Label>
                            </Label.Group>

                            <Header as='h5' inverted>
                                <Button color='linkedin' onClick={minus}>-</Button>
                                {num}&nbsp;&nbsp;
                                <Button color='linkedin' onClick={plus}>+</Button>
                            </Header>

                            <button class="ui red inverted button" onClick={handleBuy}>Buy</button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button color='red' floated='right' onClick={izbrannoe}>В избранное</Button>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
                <Divider hidden />
                <Divider />
                <Header as='h3' inverted>Описание :</Header>
                <Header as='h3' id='gadgetTitle' inverted>{gadget[page][id].description}</Header>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, actions)(Details);