import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as product_action from '../../actions/productActions';

class Header extends Component {


    render() {
        return (
            <div className='mainHeader'>
          <ul><li><a>Logo</a></li><li style={{width:"40%"}}><div className="input-group" style={{ margin: '15px' }}>
            <input type="text" className="form-control" placeholder="Search" id="txtSearch" />
            <div className="input-group-btn">
              <button className="btn btn-primary" type="submit">
                <span className="fa fa-2x fa-search"></span>
              </button>
            </div>
          </div></li><li style={{ float: "right" }}><a>Right Menu</a></li></ul>
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