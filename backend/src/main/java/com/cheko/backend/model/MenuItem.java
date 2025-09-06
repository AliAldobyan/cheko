package com.cheko.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "menu_items")
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private int calories;
    private String type;
    private boolean bestSale;
    private double price;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getCalories() { return calories; }
    public void setCalories(int calories) { this.calories = calories; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public boolean isBestSale() { return bestSale; }
    public void setBestSale(boolean bestSale) { this.bestSale = bestSale; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}
