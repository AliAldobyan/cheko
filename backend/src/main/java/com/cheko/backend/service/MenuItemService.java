package com.cheko.backend.service;

import com.cheko.backend.model.MenuItem;
import com.cheko.backend.repository.MenuItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuItemService {

    private final MenuItemRepository repository;

    public MenuItemService(MenuItemRepository repository) {
        this.repository = repository;
    }

    public List<MenuItem> getAll() {
        return repository.findAll();
    }

    public MenuItem create(MenuItem item) {
        return repository.save(item);
    }

    public List<MenuItem> getSecondHighestPerCategory() {
        return repository.findSecondHighestCalorieItems();
    }
}
