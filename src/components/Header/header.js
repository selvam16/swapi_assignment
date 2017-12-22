import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as product_action from '../../actions/productActions';
import cookie from 'react-cookie';

import { hashHistory } from 'react-router';
class Header extends Component {


    logout() {
        cookie.remove('logged');
        hashHistory.push('/');
    }


    render() {
        return (
            <div className='mainHeader'>
          <ul><li><a>Logo</a></li>
          <li style={{ float: "right" }}><a style={{cursor:'pointer'}} title='Logout' onClick={this.logout.bind(this)}>Logout</a></li></ul>
        </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {product_data: ownProps.product_data}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(product_action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);