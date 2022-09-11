from app import app, db
from flask import render_template, redirect, request, url_for
from flask_login import login_user
from app.models import User

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    name = request.form.get('name')
    email = request.form.get('email')
    pwd = request.form.get('password')

    if name and email and pwd and request.form.get('submit'):
        user = User(name, email, pwd)
        db.session.add(user)
        db.session.commit()

        return redirect(url_for('register'))


    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    '''if True: # se a form foi validada
        login_user()

        flask.flash('Logou com sucesso.')

        next = flask.request.args.get('next')

        if not is_safe_url(next):
            return flask.abort(400)
        return flask.redirect(next or flask.url_for('index'))'''
    return render_template('login.html')

app.run(debug=True)