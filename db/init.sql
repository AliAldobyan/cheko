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

-- Breakfast items
INSERT INTO menu_items (name, description, type, calories, best_sale, price) VALUES
('Hummus', 'Chickpeas with cumin and lemon', 'Breakfast', 350, true, 15.00),
('Shakshuka', 'Eggs in tomato sauce with peppers', 'Breakfast', 400, false, 20.00),
('Foul Medames', 'Mashed fava beans with olive oil', 'Breakfast', 300, false, 18.00),
('Labneh Plate', 'Strained yogurt with olive oil and zaatar', 'Breakfast', 250, false, 17.00),
('Cheese Manakish', 'Flatbread topped with white cheese', 'Breakfast', 420, true, 22.00),
('Honey Pancakes', 'Fluffy pancakes with honey and butter', 'Breakfast', 500, false, 25.00),
('Falafel Wrap', 'Falafel in bread with salad and tahini', 'Breakfast', 450, true, 20.00),
('Scrambled Eggs', 'Classic scrambled eggs with butter', 'Breakfast', 320, false, 16.00),
('Croissant', 'Buttery French pastry', 'Breakfast', 380, false, 19.00);

-- Drinks items
INSERT INTO menu_items (name, description, type, calories, best_sale, price) VALUES
('Saudi Qahwa', 'Arabic coffee with cardamom', 'Drinks', 50, true, 10.00),
('Karak Chai', 'Spiced tea with milk', 'Drinks', 180, false, 12.00),
('Pomegranate Juice', 'Freshly squeezed pomegranate juice', 'Drinks', 120, false, 14.00),
('Mint Lemonade', 'Refreshing mint and lemon juice', 'Drinks', 140, true, 16.00),
('Iced Mocha', 'Coffee blended with chocolate and milk', 'Drinks', 280, false, 20.00),
('Mango Smoothie', 'Fresh mango with yogurt', 'Drinks', 200, true, 18.00),
('Strawberry Milkshake', 'Creamy strawberry shake', 'Drinks', 250, false, 22.00),
('Espresso', 'Strong Italian black coffee', 'Drinks', 30, false, 9.00),
('Green Tea', 'Hot green tea', 'Drinks', 10, false, 8.00);

-- Soups items
INSERT INTO menu_items (name, description, type, calories, best_sale, price) VALUES
('Lentil Soup', 'Traditional Arabic lentil soup', 'Soups', 250, true, 18.00),
('Chicken Corn Soup', 'Creamy chicken soup with corn', 'Soups', 300, false, 20.00),
('Vegetable Soup', 'Light soup with seasonal vegetables', 'Soups', 150, false, 15.00),
('Harira', 'Moroccan soup with lentils and spices', 'Soups', 280, true, 22.00),
('Mushroom Soup', 'Creamy mushroom soup', 'Soups', 320, false, 23.00),
('Seafood Soup', 'Mixed seafood in creamy broth', 'Soups', 400, false, 30.00),
('Pumpkin Soup', 'Roasted pumpkin with cream', 'Soups', 220, false, 19.00),
('Tom Yum Soup', 'Spicy Thai soup with shrimp', 'Soups', 350, false, 28.00),
('Beef Bone Broth', 'Slow-cooked beef broth', 'Soups', 180, false, 17.00);

-- Sushi items
INSERT INTO menu_items (name, description, type, calories, best_sale, price) VALUES
('Salmon Nigiri', 'Fresh salmon over rice', 'Sushi', 120, true, 25.00),
('California Roll', 'Crab, avocado, cucumber roll', 'Sushi', 220, false, 28.00),
('Spicy Tuna Roll', 'Tuna with spicy mayo', 'Sushi', 200, false, 30.00),
('Dragon Roll', 'Eel with avocado and cucumber', 'Sushi', 300, true, 35.00),
('Tempura Shrimp Roll', 'Shrimp tempura sushi roll', 'Sushi', 280, false, 32.00),
('Philadelphia Roll', 'Salmon, cream cheese roll', 'Sushi', 260, false, 30.00),
('Rainbow Roll', 'Assorted fish on top of roll', 'Sushi', 320, false, 38.00),
('Cucumber Maki', 'Simple cucumber sushi roll', 'Sushi', 100, false, 15.00),
('Tuna Sashimi', 'Sliced fresh tuna', 'Sushi', 150, false, 28.00);

-- Others items
INSERT INTO menu_items (name, description, type, calories, best_sale, price) VALUES
('Falafel Plate', 'Chickpea patties with tahini', 'Others', 350, false, 22.00),
('Shawarma Sandwich', 'Chicken shawarma wrap', 'Others', 450, true, 18.00),
('Kunafa', 'Cheese dessert with syrup', 'Others', 500, true, 25.00),
('Basbousa', 'Sweet semolina cake with coconut', 'Others', 400, false, 20.00),
('Cheko Fries', 'Crispy seasoned fries', 'Others', 300, false, 12.00),
('Cheeseburger', 'Beef burger with cheese', 'Others', 600, true, 28.00),
('Mixed Grill', 'Grilled kebabs with bread', 'Others', 700, false, 40.00),
('Sambousek', 'Fried pastry with meat filling', 'Others', 280, false, 15.00),
('Ice Cream Bowl', '3 scoops assorted ice cream', 'Others', 450, false, 18.00);

-- Restaurants table
CREATE TABLE IF NOT EXISTS restaurant (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION
);

INSERT INTO restaurant (name, lat, lng) VALUES
('Cheko Downtown', 24.7136, 46.6753),
('Cheko Mall', 24.7743, 46.7386),
('Cheko Diriyah', 24.7370, 46.5750),
('Cheko Diplomatic Quarter', 24.6615, 46.6101);
