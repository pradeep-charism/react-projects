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
		stocks.add(new Stock(++idCounter, INVESTOR, "Learn Full stack with Spring Boot and Angular"));
		stocks.add(new Stock(++idCounter, INVESTOR, "Learn Full stack with Spring Boot and React"));
		stocks.add(new Stock(++idCounter, INVESTOR, "Master Microservices with Spring Boot and Spring Cloud"));
		stocks.add(new Stock(++idCounter, INVESTOR,
				"Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
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