class LibraryItem:
    def __init__(self, title, creator, year):
        self.title = title
        self.creator = creator
        self.year = year
        self.is_checked_out = False

    def check_out(self):
        if not self.is_checked_out:
            self.is_checked_out = True
            return f"{self.title} has been checked out."
        return f"{self.title} is already out."

    def return_item(self):
        self.is_checked_out = False
        return f"{self.title} has been returned."

    def get_details(self):
        """Method to be overridden by children."""
        return f"Item: {self.title} by {self.creator}"

    def __str__(self):
        status = "Available" if not self.is_checked_out else "Checked Out"
        return f"[{status}] {self.title} ({self.year})"


class Book(LibraryItem):
    def __init__(self, title, creator, year, pages):
        # Use super() to initialize parent attributes
        super().__init__(title, creator, year)
        self.pages = pages

    def get_details(self):
        # Polymorphism: Overriding the parent method
        return f"Book: {self.title} | Author: {self.creator} | Pages: {self.pages}"

    def reading_time(self):
        # Unique method for Book
        return f"Estimated reading time: {self.pages // 50} hours."


class DVD(LibraryItem):
    def __init__(self, title, creator, year, duration):
        super().__init__(title, creator, year)
        self.duration = duration  # duration in minutes

    def get_details(self):
        # Polymorphism: Overriding the parent method
        return f"DVD: {self.title} | Director: {self.creator} | Length: {self.duration} mins"

    def play(self):
        # Unique method for DVD
        return f"Playing movie: {self.title}..."