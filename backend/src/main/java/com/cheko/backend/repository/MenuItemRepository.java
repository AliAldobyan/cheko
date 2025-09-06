package com.cheko.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cheko.backend.model.MenuItem;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
}
