package com.my.stockapp.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
@Repository
public class StockRepository {

    private static List<Stock> stocks = new ArrayList<>();
    private static long idCounter = 0;

    private static final String INVESTOR = "sg-investor";

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<Stock> findAll() {
        stocks = jdbcTemplate.query(
                "select * from portfolio",
                (rs, rowNum) ->
                        new Stock(
                                rs.getLong("id"),
                                rs.getString("holder"),
                                rs.getString("stock_name")
                        )
        );
        idCounter = stocks.size();
        return stocks;
    }

    public Stock save(Stock stock) {
        int isUpdated = jdbcTemplate.update(
                "insert into portfolio (id, holder, stock_name) values(?, ?, ?)", ++idCounter, INVESTOR, stock.getStockName());

        return stock;
    }

    public Stock deleteById(long id) {
        Stock stock = findById(id);
        int isUpdated = jdbcTemplate.update("delete from portfolio where id = ?", id);
        return stock;
    }

    public Stock findById(long id) {
        return jdbcTemplate.queryForObject(
                "select * from portfolio where id = ?",
                new Object[]{id},
                (rs, rowNum) ->
                        new Stock(
                                rs.getLong("id"),
                                rs.getString("holder"),
                                rs.getString("stock_name")
                        )
        );
    }

    private static void getDefaultStocks() {
        stocks.add(new Stock(1, INVESTOR, "Singtel."));
        stocks.add(new Stock(2, INVESTOR, "City Developments."));
        stocks.add(new Stock(3, INVESTOR, "SBS Transit."));
        stocks.add(new Stock(4, INVESTOR, "SATS Ltd."));
    }
}