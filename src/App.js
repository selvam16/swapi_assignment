import React, { Component, PropTypes } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductList from './components/products/productList';
import * as product_action from './actions/productActions';

import Header from './components/Header/header'
import NotesList from './components/products/nodeList'
import Pagination from 'rc-pagination';
import enUS from 'rc-pagination/lib/locale/en_US.js';

import { hashHistory } from 'react-router';
import cookie from 'react-cookie';
require('rc-pagination/assets/index.css');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleData: {},
            product_list: [],
            activepage: 1,
            isloading: false
        }

        this.handleEdit = this.handleEdit.bind(this);

    }

    componentWillMount() {
        if (cookie.load('logged')) {
            var self = this;
            this.setState({ isloading: true })
            this.props.actions.loadProducts(this.state.activepage, () => {
    
                self.setState({ isloading: false })
            });
        }
        else{

            hashHistory.push('/');
        }
        

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.product_list) {
            this.setState({ product_list: nextProps.product_list })
        }
    }


    handleEdit(data) {
        this.setState({ singleData: data })
    }
    logout(){
        cookie.remove('logged');
        hashHistory.push('/');
    }

    handleOnchange(event){
        var value = event.target.value;
        var data = this.state.product_list;
        var filteredData = this.state.product_list.results.filter(data=>{return data.name.toLowerCase().indexOf(value.toLowerCase())>-1})
        data.results = filteredData;
        this.setState({product_list:data})
    }

   
    handleonChangePage(pageNumber) {

        var self = this;
        this.setState({ isloading: true })
        this.setState({ activepage: pageNumber });
        this.props.actions.loadProducts(pageNumber, () =>
            self.setState({ isloading: false })
        );
    }


    render() {
        return (

            <div className="container">
                {
                    this.state.isloading &&
                    <div className='top_loader'>

                        <div className="loading"></div>
                    </div>
                }  <div className='mainHeader'>
                    <ul><li><a>Logo</a></li><li style={{ width: "40%" }}><div className="input-group" style={{ margin: '15px' }}>
                        <input type="text" className="form-control" placeholder="Search" id="txtSearch" onChange={this.handleOnchange.bind(this)}  />
                        <div className="input-group-btn">
                            <button className="btn btn-primary" type="submit">
                                <span className="fa fa-2x fa-search"></span>
                            </button>
                        </div>
                    </div></li><li style={{ float: "right" }}><a onClick={this.logout.bind(this)}>Logout</a></li></ul>
                </div>
                <div className="row" style={{ background: 'white', padding: '10px' }}>
                    <h6 className="text-center headerStyle" >Plants</h6>

                    <ProductList products={this.state.product_list.results} editAction={this.handleEdit} />{
                        (this.state.product_list.results !== undefined && this.state.product_list.results !== null && this.state.product_list.results.length) > 0 &&
                        <Pagination showTotal={(total, range) => `${range[0]} - ${range[1]} of ${total} items`} current={this.state.activepage} defaultPageSize={10} locale={enUS} total={this.state.product_list.count} onChange={this.handleonChangePage.bind(this)} />
                    }


                </div>
                <div>
                </div>
            </div>



        );
    }
}

function mapStateToProps(state, ownProps) {
    //console.log(state)
    return { product_list: state.products, orders: state.orders }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(product_action, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
