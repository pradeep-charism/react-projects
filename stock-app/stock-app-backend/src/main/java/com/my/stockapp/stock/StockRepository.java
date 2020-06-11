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
    private final String TEST_STRINGS = "testing description strings";

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
                                rs.getString("stock_name"), TEST_STRINGS
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
                                rs.getString("stock_name"), TEST_STRINGS
                        )
        );
    }

    public List<Stock> findByCountryAndStockName(Stock inputObject) {
        String sql = "select * from portfolio where country = ? and stock_name = ?";
        List<Stock> results = jdbcTemplate.query(sql, new Object[]{inputObject.getCountry(), inputObject.getStockName()}, (rs, i) -> new Stock(
                rs.getLong("id"),
                rs.getString("country"),
                rs.getString("stock_name"), xmlData
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
                                rs.getString("stock_name"), TEST_STRINGS
                        )
        );
        LOG.info("Retrieved stock: {}", stock);
        return stock;
    }


   private final String xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n" +
            "\txmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n" +
            "\txsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n" +
            "\t<modelVersion>4.0.0</modelVersion>\n" +
            "\t<parent>\n" +
            "\t\t<groupId>org.springframework.boot</groupId>\n" +
            "\t\t<artifactId>spring-boot-starter-parent</artifactId>\n" +
            "\t\t<version>2.1.3.RELEASE</version>\n" +
            "\t\t<relativePath /> <!-- lookup parent from repository -->\n" +
            "\t</parent>\n" +
            "\t<groupId>com.my.stockapp</groupId>\n" +
            "\t<artifactId>stock-app-backend</artifactId>\n" +
            "\t<version>0.0.1-SNAPSHOT</version>\n" +
            "\t<name>stock-app-backend</name>\n" +
            "\t<description>Stock Listings</description>\n" +
            "\n" +
            "\t<properties>\n" +
            "\t\t<java.version>1.8</java.version>\n" +
            "\t</properties>\n" +
            "\n" +
            "\t<dependencies>\n" +
            "\t\t<dependency>\n" +
            "\t\t\t<groupId>org.springframework.boot</groupId>\n" +
            "\t\t\t<artifactId>spring-boot-starter-web</artifactId>\n" +
            "\t\t</dependency>\n" +
            "\n" +
            "\t\t<dependency>\n" +
            "\t\t\t<groupId>org.springframework.boot</groupId>\n" +
            "\t\t\t<artifactId>spring-boot-devtools</artifactId>\n" +
            "\t\t\t<scope>runtime</scope>\n" +
            "\t\t</dependency>\n" +
            "\t\t<dependency>\n" +
            "\t\t\t<groupId>org.springframework.boot</groupId>\n" +
            "\t\t\t<artifactId>spring-boot-starter-test</artifactId>\n" +
            "\t\t\t<scope>test</scope>\n" +
            "\t\t</dependency>\n" +
            "\n" +
            "\t\t<dependency>\n" +
            "\t\t\t<groupId>org.springframework.boot</groupId>\n" +
            "\t\t\t<artifactId>spring-boot-starter-jdbc</artifactId>\n" +
            "\t\t</dependency>\n" +
            "\n" +
            "\t\t<dependency>\n" +
            "\t\t\t<groupId>mysql</groupId>\n" +
            "\t\t\t<artifactId>mysql-connector-java</artifactId>\n" +
            "\t\t</dependency>\n" +
            "\t\t<dependency>\n" +
            "\t\t\t<groupId>commons-io</groupId>\n" +
            "\t\t\t<artifactId>commons-io</artifactId>\n" +
            "\t\t\t<version>2.4</version>\n" +
            "\t\t</dependency>\n" +
            "\t\t<dependency>\n" +
            "\t\t\t<groupId>junit</groupId>\n" +
            "\t\t\t<artifactId>junit</artifactId>\n" +
            "\t\t\t<version>4.13</version>\n" +
            "\t\t\t<scope>test</scope>\n" +
            "\t\t</dependency>\n" +
            "\n" +
            "\n" +
            "\t</dependencies>\n" +
            "\n" +
            "\t<build>\n" +
            "\t\t<plugins>\n" +
            "\t\t\t<plugin>\n" +
            "\t\t\t\t<groupId>org.springframework.boot</groupId>\n" +
            "\t\t\t\t<artifactId>spring-boot-maven-plugin</artifactId>\n" +
            "\t\t\t</plugin>\n" +
            "\t\t\t<plugin>\n" +
            "\t\t\t\t<groupId>org.apache.maven.plugins</groupId>\n" +
            "\t\t\t\t<artifactId>maven-surefire-plugin</artifactId>\n" +
            "\t\t\t\t<version>2.22.0</version>\n" +
            "\t\t\t</plugin>\n" +
            "\t\t</plugins>\n" +
            "\n" +
            "\t</build>\n" +
            "</project>\n";
}