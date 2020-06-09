package com.my.stockapp.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class StockRepository {

	private static List<Stock> cours = new ArrayList<>();
	private static long idCounter = 0;

	static {
		cours.add(new Stock(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and Angular"));
		cours.add(new Stock(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and React"));
		cours.add(new Stock(++idCounter, "in28minutes", "Master Microservices with Spring Boot and Spring Cloud"));
		cours.add(new Stock(++idCounter, "in28minutes",
				"Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
	}

	public List<Stock> findAll() {
		return cours;
	}

	public Stock save(Stock stock) {
		if (stock.getId() == -1 || stock.getId() == 0) {
			stock.setId(++idCounter);
			cours.add(stock);
		} else {
			deleteById(stock.getId());
			cours.add(stock);
		}
		return stock;
	}

	public Stock deleteById(long id) {
		Stock stock = findById(id);

		if (stock == null)
			return null;

		if (cours.remove(stock)) {
			return stock;
		}

		return null;
	}

	public Stock findById(long id) {
		for (Stock stock : cours) {
			if (stock.getId() == id) {
				return stock;
			}
		}

		return null;
	}
}