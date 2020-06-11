package com.my.stockapp.stock;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private static final Logger LOG = LoggerFactory.getLogger(StockRepository.class);
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
                                rs.getString("country"),
                                rs.getString("stock_name")
                        )
        );
        idCounter = stocks.size();
        return stocks;
    }

    public Stock save(Stock stock) {
        int isUpdated = jdbcTemplate.update(
                "insert into portfolio (id, country, stock_name) values(?, ?, ?)", ++idCounter, INVESTOR, stock.getStockName());

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
                                rs.getString("country"),
                                rs.getString("stock_name")
                        )
        );
    }

    public List<Stock> findByCountryAndStockName(Stock inputObject) {
        String sql = "select * from portfolio where country = ? and stock_name = ?";
        List<Stock> results = jdbcTemplate.query(sql, new Object[]{inputObject.getCountry(), inputObject.getStockName()}, (rs, i) -> new Stock(
                rs.getLong("id"),
                rs.getString("country"),
                rs.getString("stock_name")
        ));

        LOG.info("findByCountryAndStockName retrieved stock : {}", results);
        return results;
    }

    public Stock findByStockName(String stockName) {
        Stock stock = jdbcTemplate.queryForObject(
                "select * from portfolio where stock_name = ?",
                new Object[]{stockName},
                (rs, rowNum) ->
                        new Stock(
                                rs.getLong("id"),
                                rs.getString("country"),
                                rs.getString("stock_name")
                        )
        );
        LOG.info("Retrieved stock: {}", stock);
        return stock;
    }
}