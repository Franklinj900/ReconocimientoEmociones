import reflex as rx
import sys
from datetime import datetime
sys.path.append("..")  # Agrega el directorio padre al path
from models import analyze_text
from typing import TypedDict

class Post(TypedDict):
    title: str
    content: str
    emotion: str
    suicide: str
    timestamp: str
    word_count: int

class EstadoForo(rx.State):
    title: str = ""
    content: str = ""
    posts: list[Post] = []
    current_page: str = "home"
    sidebar_open: bool = True
    theme: str = "light"

    def actualizar_titulo(self, title):
        self.title = title

    def actualizar_contenido(self, content):
        self.content = content

    def cambiar_pagina(self, pagina: str):
        self.current_page = pagina

    def toggle_sidebar(self):
        self.sidebar_open = not self.sidebar_open

    def toggle_theme(self):
        self.theme = "dark" if self.theme == "light" else "light"

    def publicar(self):
        emotion, suicide = analyze_text(self.content)
        post: Post = {
            'title': self.title,
            'content': self.content,
            'emotion': emotion,
            'suicide': suicide,
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M'),
            'word_count': len(self.content.split())
        }
        self.posts.append(post)
        self.title = ""
        self.content = ""

    @rx.var
    def total_posts(self) -> str:
        return str(len(self.posts))

    @rx.var
    def emocion_predominante(self) -> str:
        if not self.posts:
            return "N/A"
        
        emotion_count = {}
        for post in self.posts:
            emotion = post['emotion']
            emotion_count[emotion] = emotion_count.get(emotion, 0) + 1
        
        return max(emotion_count.items(), key=lambda x: x[1])[0]

    @rx.var
    def promedio_palabras(self) -> str:
        if not self.posts:
            return "0.0"
        
        total_words = sum(post['word_count'] for post in self.posts)
        return f"{total_words / len(self.posts):.1f}"

    @rx.var
    def get_theme_colors(self) -> dict:
        if self.theme == "dark":
            return {
                "bg": "rgb(17, 24, 39)",
                "text": "white",
                "sidebar": "rgb(31, 41, 55)",
                "card": "rgb(31, 41, 55)",
                "hover": "rgb(55, 65, 81)",
                "border": "rgb(75, 85, 99)"
            }
        return {
            "bg": "white",
            "text": "black",
            "sidebar": "white",
            "card": "white",
            "hover": "rgb(243, 244, 246)",
            "border": "rgb(209, 213, 219)"  # Color de borde más oscuro
        }

def get_emotion_color(emotion: str) -> str:
    emotion_colors = {
        "joy": "bg-yellow-100 text-yellow-800",
        "sadness": "bg-blue-100 text-blue-800",
        "anger": "bg-red-100 text-red-800",
        "fear": "bg-purple-100 text-purple-800",
        "love": "bg-pink-100 text-pink-800",
        "surprise": "bg-green-100 text-green-800"
    }
    return emotion_colors.get(emotion.lower(), "bg-gray-100 text-gray-800")

def get_emotion_text_color(emotion: str) -> str:
    emotion_colors = {
        "joy": "text-yellow-600",
        "sadness": "text-blue-600",
        "anger": "text-red-600",
        "fear": "text-purple-600",
        "love": "text-pink-600",
        "surprise": "text-green-600"
    }
    return emotion_colors.get(emotion.lower(), "text-gray-600")

def sidebar():
    return rx.box(
        rx.vstack(
            rx.hstack(
                rx.heading(
                    "Menú",
                    size="5",
                    class_name=rx.cond(
                        EstadoForo.theme == "light",
                        "text-gray-800",
                        "text-white"
                    )
                ),
                rx.spacer(),
                rx.button(
                    rx.cond(
                        EstadoForo.theme == "light",
                        "🌙",
                        "☀️"
                    ),
                    on_click=EstadoForo.toggle_theme,
                    class_name="p-2 rounded-lg",
                ),
                width="100%",
            ),
            rx.button(
                "Inicio",
                on_click=EstadoForo.cambiar_pagina("home"),
                width="100%",
                class_name="mb-2 p-3 rounded-lg font-semibold " + rx.cond(
                    EstadoForo.current_page == "home",
                    "bg-blue-500 text-white",
                    rx.cond(
                        EstadoForo.theme == "light",
                        "bg-gray-100 text-gray-700 hover:bg-gray-200",
                        "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    )
                ),
            ),
            rx.button(
                "Análisis",
                on_click=EstadoForo.cambiar_pagina("analysis"),
                width="100%",
                class_name="mb-2 p-3 rounded-lg font-semibold " + rx.cond(
                    EstadoForo.current_page == "analysis",
                    "bg-blue-500 text-white",
                    rx.cond(
                        EstadoForo.theme == "light",
                        "bg-gray-100 text-gray-700 hover:bg-gray-200",
                        "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    )
                ),
            ),
            padding="6",
            spacing="4",
            height="100%",
        ),
        min_width=rx.cond(EstadoForo.sidebar_open, "240px", "0px"),
        width=rx.cond(EstadoForo.sidebar_open, "240px", "0px"),
        bg=EstadoForo.get_theme_colors["sidebar"],
        height="100vh",
        position="fixed",
        left="0",
        top="0",
        shadow="lg",
        z_index="999",
        transition="all 0.3s ease-in-out",
        overflow_x="hidden",
    )

def toggle_button():
    return rx.box(
        rx.button(
            rx.cond(
                EstadoForo.sidebar_open,
                "◀",
                "▶"
            ),
            on_click=EstadoForo.toggle_sidebar,
            position="fixed",
            left=rx.cond(EstadoForo.sidebar_open, "240px", "0px"),
            top="20px",
            z_index="1000",
            class_name=rx.cond(
                EstadoForo.theme == "light",
                "bg-white text-gray-700 hover:bg-gray-100",
                "bg-gray-800 text-white hover:bg-gray-700"
            ) + " p-2 rounded-r-lg shadow-lg transition-all duration-300",
        ),
    )

def home():
    return rx.container(
        rx.vstack(
            rx.heading(
                "Blog con Análisis de Emociones",
                size="8",
                class_name="text-center text-4xl font-bold my-8"
            ),
            rx.box(
                rx.vstack(
                    rx.input(
                        placeholder="Título del Post",
                        on_change=EstadoForo.actualizar_titulo,
                        value=EstadoForo.title,
                        width="100%",
                        padding_y="10px",  # Aumenta el padding vertical
                        class_name="border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent " + rx.cond(
                            EstadoForo.theme == "light",
                            "bg-white text-gray-900 border-gray-300",
                            "bg-gray-800 text-white border-gray-600"
                        )
                    ),
                    rx.text_area(
                        placeholder="Escribe tu publicación...",
                        on_change=EstadoForo.actualizar_contenido,
                        value=EstadoForo.content,
                        width="100%",
                        height="200px",
                        class_name="border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent " + rx.cond(
                            EstadoForo.theme == "light",
                            "bg-white text-gray-900 border-gray-300",
                            "bg-gray-800 text-white border-gray-600"
                        )
                    ),
                    rx.button(
                        "Publicar",
                        on_click=EstadoForo.publicar,
                        class_name="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition duration-200"
                    ),
                    class_name="w-full"
                ),
                padding="6",
                bg=EstadoForo.get_theme_colors["card"],
                border_radius="xl",
                shadow="lg",
                width="100%",
                class_name="mb-8"
            ),
            rx.divider(class_name="my-8"),
            rx.heading(
                "Publicaciones",
                size="6",
                class_name="text-2xl font-semibold mb-6"
            ),
            rx.foreach(
                EstadoForo.posts,
                lambda post: rx.box(
                    rx.vstack(
                        rx.heading(
                            post['title'],
                            size="5",
                            class_name="text-xl font-semibold"
                        ),
                        rx.text(
                            post['content'],
                            class_name=rx.cond(
                                EstadoForo.theme == "light",
                                "text-gray-700",
                                "text-gray-300"
                            )
                        ),
                        rx.hstack(
                            rx.badge(
                                f"Emoción: {post['emotion']}",
                                class_name=get_emotion_color(post['emotion'])
                            ),
                            rx.badge(
                                f"Riesgo: {post['suicide']}",
                                class_name=rx.cond(
                                    EstadoForo.theme == "light",
                                    "bg-gray-100 text-gray-800",
                                    "bg-gray-700 text-gray-200"
                                )
                            ),
                            spacing="3",
                            class_name="my-2"
                        ),
                        rx.text(
                            f"📅 {post['timestamp']} | 📝 {post['word_count']} palabras",
                            class_name=rx.cond(
                                EstadoForo.theme == "light",
                                "text-sm text-gray-500",
                                "text-sm text-gray-400"
                            )
                        ),
                        align_items="start",
                        width="100%",
                    ),
                    padding="6",
                    bg=EstadoForo.get_theme_colors["card"],
                    border_radius="xl",
                    shadow="md",
                    margin_bottom="4",
                    class_name="hover:shadow-lg transition duration-200"
                )
            ),
            spacing="4",
            width="100%"
        ),
        class_name="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8",
        padding_left=rx.cond(EstadoForo.sidebar_open, "0", "1rem"),
    )

def analysis():
    return rx.container(
        rx.vstack(
            rx.heading(
                "Análisis de Actividad",
                size="8",
                class_name="text-center text-4xl font-bold my-8"
            ),
            rx.flex(
                rx.box(
                    rx.vstack(
                        rx.text(
                            "Total de Publicaciones",
                            class_name=rx.cond(
                                EstadoForo.theme == "light",
                                "text-gray-600",
                                "text-gray-300"
                            ) + " text-lg"
                        ),
                        rx.text(
                            EstadoForo.total_posts,
                            class_name="text-4xl font-bold text-blue-500"
                        ),
                        padding="6",
                        align_items="center",
                    ),
                    bg=EstadoForo.get_theme_colors["card"],
                    border_radius="xl",
                    shadow="lg",
                    class_name="hover:shadow-xl transition duration-200 flex-1"
                ),
                rx.box(
                    rx.vstack(
                        rx.text(
                            "Emoción Predominante",
                            class_name=rx.cond(
                                EstadoForo.theme == "light",
                                "text-gray-600",
                                "text-gray-300"
                            ) + " text-lg"
                        ),
                        rx.text(
                            EstadoForo.emocion_predominante,
                            class_name=rx.cond(
                                EstadoForo.emocion_predominante != "N/A",
                                get_emotion_color(EstadoForo.emocion_predominante) + " text-4xl font-bold px-4 py-2 rounded-lg",
                                "text-4xl font-bold px-4 py-2" + rx.cond(
                                    EstadoForo.theme == "light",
                                    " text-gray-600",
                                    " text-gray-400"
                                )
                            )
                        ),
                        padding="6",
                        align_items="center",
                    ),
                    bg=EstadoForo.get_theme_colors["card"],
                    border_radius="xl",
                    shadow="lg",
                    class_name="hover:shadow-xl transition duration-200 flex-1"
                ),
                rx.box(
                    rx.vstack(
                        rx.text(
                            "Promedio de Palabras",
                            class_name=rx.cond(
                                EstadoForo.theme == "light",
                                "text-gray-600",
                                "text-gray-300"
                            ) + " text-lg"
                        ),
                        rx.text(
                            EstadoForo.promedio_palabras,
                            class_name="text-4xl font-bold text-green-500"
                        ),
                        padding="6",
                        align_items="center",
                    ),
                    bg=EstadoForo.get_theme_colors["card"],
                    border_radius="xl",
                    shadow="lg",
                    class_name="hover:shadow-xl transition duration-200 flex-1"
                ),
                gap="6",
                width="100%",
                flex_wrap="wrap",
            ),
            rx.divider(class_name="my-8"),
            rx.heading(
                "Historial de Publicaciones",
                size="6",
                class_name="text-2xl font-semibold my-6"
            ),
            rx.box(
                rx.foreach(
                    EstadoForo.posts,
                    lambda post: rx.box(
                        rx.hstack(
                            rx.text(
                                "📅 " + post['timestamp'],
                                class_name=rx.cond(
                                    EstadoForo.theme == "light",
                                    "text-gray-600",
                                    "text-gray-300"
                                )
                            ),
                            rx.spacer(),
                            rx.badge(
                                f"Emoción: {post['emotion']}",
                                class_name=get_emotion_color(post['emotion'])
                            ),
                            rx.text(
                                f"📝 {post['word_count']} palabras",
                                class_name=rx.cond(
                                    EstadoForo.theme == "light",
                                    "text-gray-600",
                                    "text-gray-300"
                                )
                            ),
                            class_name="w-full",
                        ),
                        padding="4",
                        bg=EstadoForo.get_theme_colors["card"],
                        border_radius="lg",
                        shadow="sm",
                        margin_bottom="3",
                        class_name="hover:shadow-md transition duration-200"
                    )
                ),
                width="100%",
                padding="4",
                bg=EstadoForo.get_theme_colors["card"],
                border_radius="xl",
                shadow="lg",
            ),
        ),
        class_name="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8",
        padding_left=rx.cond(EstadoForo.sidebar_open, "0", "1rem"),
    )

def index():
    return rx.box(
        sidebar(),
        toggle_button(),
        rx.box(
            rx.cond(
                EstadoForo.current_page == "home",
                home(),
                analysis(),
            ),
            margin_left=rx.cond(EstadoForo.sidebar_open, "240px", "0px"),
            transition="all 0.3s ease-in-out",
            min_height="100vh",
            bg=EstadoForo.get_theme_colors["bg"],
            color=EstadoForo.get_theme_colors["text"],
        ),
    )

app = rx.App()
app.add_page(index)