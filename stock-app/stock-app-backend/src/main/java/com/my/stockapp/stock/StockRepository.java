package com.my.stockapp.stock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public class StockRepository {

	private static List<Stock> stocks = new ArrayList<>();
	private static long idCounter = 0;

	private static final String INVESTOR = "sg-investor";

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;


	static {
		stocks.add(new Stock(1, INVESTOR, "Singtel."));
		stocks.add(new Stock(2, INVESTOR, "City Developments."));
		stocks.add(new Stock(3, INVESTOR, "SBS Transit."));
		stocks.add(new Stock(4, INVESTOR, "SATS Ltd."));
	}

	public List<Stock> findAll() {
		return stocks;
	}

	public Stock save(Stock stock) {
		if (stock.getId() == -1 || stock.getId() == 0) {
			stock.setId(++idCounter);
			stocks.add(stock);
		} else {
			deleteById(stock.getId());
			stocks.add(stock);
		}
		return stock;
	}

	public Stock deleteById(long id) {
		Stock stock = findById(id);

		if (stock == null)
			return null;

		if (stocks.remove(stock)) {
			return stock;
		}

		return null;
	}

	public Stock findById(long id) {
		for (Stock stock : stocks) {
			if (stock.getId() == id) {
				return stock;
			}
		}

		return null;
	}
}