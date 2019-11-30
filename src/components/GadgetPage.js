import React from 'react';
import GadgetList from '../components/gadget-list/gadget-list';
import { withRouter } from 'react-router-dom';
const GadgetPage = ({ history }) => {
    return (
        <GadgetList 
            onItemSelected={(itemId) => {
                history.push(`/gadget/${itemId}`)
            }}
            />
    )
}
export default withRouter(GadgetPage)