package com.sena.inventory;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/products")
public class product {

    @GetMapping
    public String getProducts(){
        return "Hola cara de sheshe";
    }
}