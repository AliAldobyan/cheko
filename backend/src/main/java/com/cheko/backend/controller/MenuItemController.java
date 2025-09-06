package com.cheko.backend.controller;

import com.cheko.backend.model.MenuItem;
import com.cheko.backend.service.MenuItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu-items")
public class MenuItemController {

    private final MenuItemService service;

    public MenuItemController(MenuItemService service) {
        this.service = service;
    }

    @GetMapping
    public List<MenuItem> getAll() {
        return service.getAll();
    }

    @PostMapping
    public MenuItem create(@RequestBody MenuItem item) {
        return service.create(item);
    }

    @GetMapping("/second-highest")
    public List<MenuItem> getSecondHighestPerCategory() {
        return service.getSecondHighestPerCategory();
    }
}
