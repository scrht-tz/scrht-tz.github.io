from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(86), nullable=False)
    email = db.Column(db.String(84), nullable=False, unique=True)
    password = db.Column(db.String(128), nullable=False)

    def __init__(self, name, email, password) -> None:
        super().__init__()

        self.name = name
        self.email = email
        self.password = password

        self.is_authenticated = False
        self.is_active = False
        self.is_anonymous = False
    
    def verify_password(self, pwd) -> bool:
        return check_password_hash(self.password, pwd)
    
    def __repr__(self) -> str:
        return f'<User {self.username}>'
