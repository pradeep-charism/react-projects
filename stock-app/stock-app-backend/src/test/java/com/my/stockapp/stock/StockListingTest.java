package com.my.stockapp.stock;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class StockListingTest {

    private ObjectMapper objectMapper = new ObjectMapper();

    @Test
    public void inputTest() throws IOException {
        String input = "{\"country\":\"USA\",\"stockName\":\"Amazon\"}";
        Stock stock = objectMapper.readValue(input, Stock.class);
        assertEquals("Stock{id=null, holder='USA', stockName='Amazon'}", stock.toString());

        List<Stock> list = new ArrayList<>();
        list.add(new Stock(1, "a", "a"));
        list.add(new Stock(1, "b", "b"));
        list.add(new Stock(1, "c", "c"));

        String output = objectMapper.writeValueAsString(list);
        System.out.println(output);
        String expected = "[{\"id\":1,\"country\":\"a\",\"stockName\":\"a\"},{\"id\":1,\"country\":\"b\",\"stockName\":\"b\"},{\"id\":1,\"country\":\"c\",\"stockName\":\"c\"}]";
        assertEquals(expected, output);
    }
}