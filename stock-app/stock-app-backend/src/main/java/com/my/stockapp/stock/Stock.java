package com.my.stockapp.stock;

import org.apache.commons.io.FileUtils;
import org.springframework.core.io.ClassPathResource;

import java.io.File;
import java.io.IOException;

public class Stock {
	private Long id;
	private String country;
	private String stockName;
	private String description;
	private String quantity;

	public Stock() {
	}

	public Stock(String country, String stockName) {
		this.country = country;
		this.stockName = stockName;
	}

	public Stock(Long id, String country, String stockName, String description) {
		this.id = id;
		this.country = country;
		this.stockName = stockName;
		this.description = description;
	}

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getStockName() {
		return stockName;
	}

	public void setStockName(String stockName) {
		this.stockName = stockName;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((stockName == null) ? 0 : stockName.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((country == null) ? 0 : country.hashCode());
		return result;
	}

	public String getDescription() {
		return description;
	}

	private static final String getStaticDescription(){
		try {
			File file = new ClassPathResource("xml.txt").getFile();
			return FileUtils.readFileToString(file);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

    @Override
    public String toString() {
        return "Stock{" +
                "id=" + id +
                ", country='" + country + '\'' +
                ", stockName='" + stockName + '\'' +
                ", description='" + description + '\'' +
                ", quantity='" + quantity + '\'' +
                '}';
    }

    @Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Stock other = (Stock) obj;
		if (stockName == null) {
			if (other.stockName != null)
				return false;
		} else if (!stockName.equals(other.stockName))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (country == null) {
			if (other.country != null)
				return false;
		} else if (!country.equals(other.country))
			return false;
		return true;
	}

}