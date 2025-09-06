package com.cheko.backend.controller;

import com.cheko.backend.model.MenuItem;
import com.cheko.backend.repository.MenuItemRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu-items")
public class MenuItemController {

    private final MenuItemRepository repository;

    public MenuItemController(MenuItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<MenuItem> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public MenuItem create(@RequestBody MenuItem item) {
        return repository.save(item);
    }
}