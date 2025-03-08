import reflex as rx

class Post(rx.Model):
    title: str
    content: str
    emotion: str
    suicide: str

# Crear la tabla al iniciar el script
def init_db():
    rx.database.create_all()

init_db()