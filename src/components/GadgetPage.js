import React from 'react';
import GadgetList from '../components/gadget-list/gadget-list';
import { withRouter } from 'react-router-dom';
const GadgetPage = ({ history }) => {
    return (
        <GadgetList
            onItemSelected={(itemId,page) => {
                history.push(`/page/${page}/gadget/${itemId}`)
            }}
            />
    )
}
export default withRouter(GadgetPage)