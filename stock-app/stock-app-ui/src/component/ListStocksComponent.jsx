import React, { Component } from 'react'
import StockDataService from '../service/StockDataService';

const INVESTOR = 'sg-investor'

class ListStocksComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Stocks: [],
            message: null
        }
        this.deleteStockClicked = this.deleteStockClicked.bind(this)
        this.updateStockClicked = this.updateStockClicked.bind(this)
        this.addStockClicked = this.addStockClicked.bind(this)
        this.refreshStocks = this.refreshStocks.bind(this)
    }

    componentDidMount() {
        this.refreshStocks();
    }

    refreshStocks() {
        StockDataService.retrieveAllStocks(INVESTOR)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ Stocks: response.data })
                }
            )
    }

    deleteStockClicked(id) {
        StockDataService.deleteStock(INVESTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of Stock ${id} Successful` })
                    this.refreshStocks()
                }
            )

    }

    addStockClicked() {
        this.props.history.push(`/stocks/-1`)
    }

    updateStockClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/stocks/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Stocks</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>stockName</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Stocks.map(
                                    Stock =>
                                        <tr key={Stock.id}>
                                            <td>{Stock.id}</td>
                                            <td>{Stock.stockName}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateStockClicked(Stock.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteStockClicked(Stock.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addStockClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListStocksComponent