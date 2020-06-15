package com.my.stockapp.stock;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class StockListingTest {

    private ObjectMapper objectMapper = new ObjectMapper();
    private final String TEST_STRINGS = "testing description strings";


    public void inputTest() throws IOException {
        String input = "{\"country\":\"USA\",\"stockName\":\"Amazon\"}";
        Stock stock = objectMapper.readValue(input, Stock.class);
//        assertEquals("Stock{id=null, country='USA', stockName='Amazon', description='project descrition testing'}", stock.toString());

        List<Stock> list = new ArrayList<>();
        list.add(new Stock(1L, "a", "a", TEST_STRINGS));
        list.add(new Stock(1L, "b", "b", TEST_STRINGS));
        list.add(new Stock(1L, "c", "c", TEST_STRINGS));

        String output = objectMapper.writeValueAsString(list);
        System.out.println(output);
        String expected = "[{\"id\":1,\"country\":\"a\",\"stockName\":\"a\"},{\"id\":1,\"country\":\"b\",\"stockName\":\"b\"},{\"id\":1,\"country\":\"c\",\"stockName\":\"c\"}]";
        assertEquals(expected, output);
    }
}