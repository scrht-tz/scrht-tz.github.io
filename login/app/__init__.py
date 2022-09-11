from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='templates')
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:secret@localhost/flask_login'

login_manager = LoginManager(app)
db = SQLAlchemy(app)
