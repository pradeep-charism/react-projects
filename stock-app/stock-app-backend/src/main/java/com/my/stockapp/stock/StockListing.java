package com.my.stockapp.stock;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class StockListing {

	@Autowired
	private StockRepository stockRepository;

	@GetMapping("/depository/{username}/stocks")
	public List<Stock> getAllStocks(@PathVariable String username) {
		return stockRepository.findAll();
	}

	@GetMapping("/depository/{username}/stocks/{id}")
	public Stock getStock(@PathVariable String username, @PathVariable long id) {
		return stockRepository.findById(id);
	}

	@DeleteMapping("/depository/{username}/stocks/{id}")
	public ResponseEntity<Void> deleteStock(@PathVariable String username, @PathVariable long id) {

		Stock stock = stockRepository.deleteById(id);

		if (stock != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}

	@PutMapping("/depository/{username}/stocks/{id}")
	public ResponseEntity<Stock> updateStock(@PathVariable String username, @PathVariable long id,
											  @RequestBody Stock stock) {

		Stock stockUpdated = stockRepository.save(stock);

		return new ResponseEntity<Stock>(stock, HttpStatus.OK);
	}

	@PostMapping("/depository/{username}/stocks")
	public ResponseEntity<Void> createStock(@PathVariable String username, @RequestBody Stock stock) {

		Stock createdStock = stockRepository.save(stock);

		// Location
		// Get current resource url
		/// {id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdStock.getId())
				.toUri();

		return ResponseEntity.created(uri).build();
	}

}