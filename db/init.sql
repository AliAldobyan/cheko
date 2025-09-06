-- Menu items table
CREATE TABLE IF NOT EXISTS menu_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    type VARCHAR(50),
    calories INT,
    best_sale BOOLEAN DEFAULT false,
    price DOUBLE PRECISION
);

INSERT INTO menu_items (name, description, type, calories, best_sale, price) VALUES
('Tomato Soup', 'Fresh tomato soup with basil', 'Soup', 150, false, 12.50),
('Chicken Fried Rice', 'Stir-fried rice with chicken and vegetables', 'Rice', 450, true, 25.99),
('Spring Rolls', 'Crispy rolls with vegetables', 'Other', 200, false, 15.00);

-- Restaurants table
CREATE TABLE IF NOT EXISTS restaurant (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION
);

INSERT INTO restaurant (name, lat, lng) VALUES
('Cheko Downtown', 24.7136, 46.6753),
('Cheko Mall', 24.7743, 46.7386);
