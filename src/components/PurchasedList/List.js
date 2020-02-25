import React, { useState, useEffect, Fragment } from 'react';
import { Table, Container, Button, Segment, Header, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { moneyFormat } from '../../utils/helpers';

const List = ({ state, deleteGadget }) => {
    const { boughtGadgets, total } = state;

    const onDelete = (id) => {
        deleteGadget(id)
    }

    return (
        <Fragment>
            <Segment basic style={{ marginTop: 30 }}>
                <Container>
                    <Header as='h2' textAlign='center' inverted>Купленные гаджеты</Header>
                    <Divider inverted></Divider>
                {boughtGadgets.length !== 0 ? <Fragment><Table celled singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Gadget</Table.HeaderCell>
                            <Table.HeaderCell>Count</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        { boughtGadgets.map((item,id) => (
                            <Table.Row>
                                <Table.Cell>{id+1}</Table.Cell>
                                <Table.Cell><img src={item.img} id='titleImg'/>{item.title}</Table.Cell>
                                <Table.Cell>{item.count}</Table.Cell>
                                <Table.Cell>{moneyFormat(item.price)}</Table.Cell>
                                <Table.Cell><Button color='red' icon='trash alternate' inverted onClick={() => onDelete(id)}></Button></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                    <Table.Footer fullWidth>
                        <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell>Итого: {moneyFormat(total)} тг</Table.HeaderCell>
                        <Table.HeaderCell />
                        </Table.Row>
                    </Table.Footer>
                </Table></Fragment> : <Header as='h2' inverted>Ничего не куплено</Header>}</Container></Segment>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
         state
    }
}

export default connect(mapStateToProps, actions)(List);