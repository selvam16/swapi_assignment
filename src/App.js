import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as product_action from './actions/productActions';

import Header from './components/Header/header'
import Pagination from 'rc-pagination';
import enUS from 'rc-pagination/lib/locale/en_US.js';

import { hashHistory } from 'react-router';
import cookie from 'react-cookie';

import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';

require('rc-pagination/assets/index.css');


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_list: [],
            activepage: 1,
            isloading: false
        }

        this.handleEdit = this.handleEdit.bind(this);

    }

    componentWillMount() {
        if (cookie.load('logged')) {
            let self = this;
            this.setState({ isloading: true })
            this.props.actions.loadProducts(this.state.activepage, () => {

                self.setState({ isloading: false })
            });
        }
        else {

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

    handleonChangePage(pageNumber) {
        let self = this;
        this.setState({ isloading: true })
        this.setState({ activepage: pageNumber });
        this.props.actions.loadProducts(pageNumber, () =>
            self.setState({ isloading: false })
        );
    }

    render() {

        const prod_list = this.props.product_list;
        return (
            <div className="container">
                {
                    this.state.isloading &&
                    <div className='top_loader'>

                        <div className="loading"></div>
                    </div>
                }
                <Header />
                <div className="row" style={{ background: 'white', padding: '10px' }}>
                    <h6 className="text-center headerStyle" >Plants</h6>

                    <DataTable value={prod_list.results} paginator={true} rows={5}>
                        <Column key="name" field="name" header="Name" filter={true} />
                        <Column key="orbital_period" field="orbital_period" header="Orbital Period" filter={true} />
                        <Column key="name" field="rotation_period" header="Rotation Period" filter={true} />
                        <Column key="name" field="terrain" header="Terrain" filter={true} />
                    </DataTable>

                    <Pagination showTotal={(total, range) => `${range[0]} - ${range[1]} of ${total} items`} current={this.state.activepage} defaultPageSize={10} locale={enUS} total={this.state.product_list.count} onChange={this.handleonChangePage.bind(this)} style={{ margin: '20px', float: "right" }} />



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
