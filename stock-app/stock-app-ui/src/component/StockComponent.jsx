import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StockDataService from '../service/StockDataService';

const INVESTOR = 'sg-investor'

class StockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            stockName: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        StockDataService.retrieveStock(INVESTOR, this.state.id)
            .then(response => this.setState({
                stockName: response.data.stockName
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.stockName) {
            errors.stockName = 'Enter a stockName'
        } else if (values.stockName.length < 5) {
            errors.stockName = 'Enter atleast 5 Characters in stockName'
        }

        return errors

    }

    onSubmit(values) {
        let holder = INVESTOR

        let stock = {
            id: this.state.id,
            stockName: values.stockName,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            StockDataService.createStock(holder, stock)
                .then(() => this.props.history.push('/stocks'))
        } else {
            StockDataService.updateStock(holder, this.state.id, stock)
                .then(() => this.props.history.push('/stocks'))
        }

        console.log(values);
    }

    render() {

        let { stockName, id } = this.state

        return (
            <div>
                <h3>Stock</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, stockName }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="stockName" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>stockName</label>
                                        <Field className="form-control" type="text" name="stockName" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default StockComponent