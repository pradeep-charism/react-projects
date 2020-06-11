package com.my.stockapp.stock;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
public class StockListing {

    private static final Logger LOG = LoggerFactory.getLogger(StockListing.class);

    private ObjectMapper objectMapper = new ObjectMapper();

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

    @CrossOrigin
    @ResponseBody
    @RequestMapping(value = "/depository/github/data/", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public String getAllRecords(@PathVariable String userName) {
        System.out.println("inside get data" + userName);
        List<Stock> all = stockRepository.findAll();

        return "data";
    }

    @ResponseBody
    @RequestMapping(value = "/depository/github/data", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Stock> getData(@RequestBody String inputString) {
        LOG.info("Request Body: {}", inputString);
        try {
            Stock inputStock = objectMapper.readValue(inputString, Stock.class);
            List<Stock> stocks = stockRepository.findByCountryAndStockName(inputStock);
            String jsonObject = objectMapper.writeValueAsString(stocks);
            LOG.info("Returning Json Object: {}", jsonObject);
            return stocks;
        } catch (Exception e) {
            throw new RuntimeException("Exception occurred while fetching data from server");
        }
    }

    private String getCinemaData() throws IOException {
		File file = new ClassPathResource("movie.json").getFile();
        String data = FileUtils.readFileToString(file);
        LOG.debug("Returning data: {}", data );
        return data;
    }

    private String getGithubData() {
        String data = "{\n" +
                "  \"login\": \"pradeep-charism\",\n" +
                "  \"id\": 20122097,\n" +
                "  \"node_id\": \"MDQ6VXNlcjIwMTIyMDk3\",\n" +
                "  \"avatar_url\": \"https://avatars2.githubusercontent.com/u/20122097?v=4\",\n" +
                "  \"gravatar_id\": \"\",\n" +
                "  \"url\": \"https://api.github.com/users/pradeep-charism\",\n" +
                "  \"html_url\": \"https://github.com/pradeep-charism\",\n" +
                "  \"followers_url\": \"https://api.github.com/users/pradeep-charism/followers\",\n" +
                "  \"following_url\": \"https://api.github.com/users/pradeep-charism/following{/other_user}\",\n" +
                "  \"gists_url\": \"https://api.github.com/users/pradeep-charism/gists{/gist_id}\",\n" +
                "  \"starred_url\": \"https://api.github.com/users/pradeep-charism/starred{/owner}{/repo}\",\n" +
                "  \"subscriptions_url\": \"https://api.github.com/users/pradeep-charism/subscriptions\",\n" +
                "  \"organizations_url\": \"https://api.github.com/users/pradeep-charism/orgs\",\n" +
                "  \"repos_url\": \"https://api.github.com/users/pradeep-charism/repos\",\n" +
                "  \"events_url\": \"https://api.github.com/users/pradeep-charism/events{/privacy}\",\n" +
                "  \"received_events_url\": \"https://api.github.com/users/pradeep-charism/received_events\",\n" +
                "  \"type\": \"User\",\n" +
                "  \"site_admin\": false,\n" +
                "  \"name\": \"Pradeep Kumar\",\n" +
                "  \"company\": \"Charism Corp\",\n" +
                "  \"blog\": \"\",\n" +
                "  \"location\": \"Singapore\",\n" +
                "  \"email\": null,\n" +
                "  \"hireable\": true,\n" +
                "  \"bio\": \"Ask me :)\",\n" +
                "  \"twitter_username\": null,\n" +
                "  \"public_repos\": 25,\n" +
                "  \"public_gists\": 0,\n" +
                "  \"followers\": 2,\n" +
                "  \"following\": 3,\n" +
                "  \"created_at\": \"2016-06-24T05:39:37Z\",\n" +
                "  \"updated_at\": \"2020-06-10T11:03:47Z\"\n" +
                "}\n";
        return data;
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