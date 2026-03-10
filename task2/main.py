from models import Book, DVD

def main():
    # Instantiate objects
    item1 = Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180)
    item2 = Book("Python Crash Course", "Eric Matthes", 2019, 544)
    item3 = DVD("Inception", "Christopher Nolan", 2010, 148)
    item4 = DVD("Spider-Man: Across the Spider-Verse", "Kemp Powers", 2023, 140)

    # Store in a list
    inventory = [item1, item2, item3, item4]

    print("--- Library Inventory ---")
    for item in inventory:
        # Demonstrating __str__ method
        print(item)
        
        # Demonstrating Polymorphism
        # The same method call produces different outputs based on the object type
        print(f"Details: {item.get_details()}")
        
        # Checking out items to show instance methods
        if "Python" in item.title:
            print(item.check_out())
        
        print("-" * 20)

    # Demonstrating unique child methods
    print("\n--- Specific Actions ---")
    print(item1.reading_time())
    print(item3.play())

if __name__ == "__main__":
    main()