package com.my.stockapp.stock;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

import java.io.IOException;

public class StockListingTest {

    private ObjectMapper objectMapper = new ObjectMapper();

    @Test
    public void inputTest() throws IOException {
        String input = "{\"country\":\"USA\",\"stockName\":\"Amazon\"}";
        Stock stock = objectMapper.readValue(input, Stock.class);
        System.out.println(stock);
    }
}