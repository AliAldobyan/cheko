package com.cheko.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cheko.backend.model.MenuItem;
import java.util.List;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {

    @Query(value = """
        SELECT * FROM menu_items m
        WHERE m.calories = (
            SELECT DISTINCT calories
            FROM menu_items
            WHERE type = m.type
            ORDER BY calories DESC
            OFFSET 1 LIMIT 1
        )
        """, nativeQuery = true)
    List<MenuItem> findSecondHighestCalorieItems();
}
