package com.my.stockapp.stock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class StockRepository {

	private static List<Stock> stocks = new ArrayList<>();
	private static long idCounter = 0;

	private static final String INVESTOR = "sg-investor";

	static {
		stocks.add(new Stock(1001, INVESTOR, "Singtel."));
		stocks.add(new Stock(1002, INVESTOR, "City Developments."));
		stocks.add(new Stock(1003, INVESTOR, "SBS Transit."));
		stocks.add(new Stock(1004, INVESTOR, "SATS Ltd."));
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