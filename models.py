import pickle
import string
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

# Cargar los modelos entrenados
import os

base_path = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(base_path, 'modelo_sentimientos_regresion_logistica.pkl'), 'rb') as f:
    sentiment_model_log_reg = pickle.load(f)

with open(os.path.join(base_path, 'modelo_sentimientos_naive_bayes.pkl'), 'rb') as f:
    sentiment_model_nb = pickle.load(f)

with open(os.path.join(base_path, 'modelo_sentimientos_svm_lineal.pkl'), 'rb') as f:
    sentiment_model_svm = pickle.load(f)

with open(os.path.join(base_path, 'modelo_depresion_regresion_logistica.pkl'), 'rb') as f:
    suicide_model_log_reg = pickle.load(f)

with open(os.path.join(base_path, 'modelo_depresion_naive_bayes.pkl'), 'rb') as f:
    suicide_model_nb = pickle.load(f)

with open(os.path.join(base_path, 'modelo_depresion_svm_lineal.pkl'), 'rb') as f:
    suicide_model_svm = pickle.load(f)

# Cargar los vectorizadores
with open(os.path.join(base_path, 'tfidf_vectorizador_sentimientos.pkl'), 'rb') as f:
    tfidf_vectorizer_sentiment = pickle.load(f)

with open(os.path.join(base_path, 'tfidf_vectorizador_depresion.pkl'), 'rb') as f:
    tfidf_vectorizer_suicide = pickle.load(f)

stop_words_english = stopwords.words('english')
lemmatizer = WordNetLemmatizer()

def preprocess_text(text):
    # 1. Minúsculas
    text = text.lower()
    # 2. Eliminar puntuación
    text = ''.join([char for char in text if char not in string.punctuation])
    # 3. Tokenización (dividir en palabras)
    tokens = text.split()
    # 4. Eliminar Stop Words
    tokens = [word for word in tokens if word not in stop_words_english]
    # 5. Lematización (o Stemming)
    tokens = [lemmatizer.lemmatize(word) for word in tokens]
    return ' '.join(tokens)

def analyze_text(text):
    # Preprocesar el texto
    text_preprocessed = preprocess_text(text)
    
    # Vectorizar el texto
    text_vectorized_sentiment = tfidf_vectorizer_sentiment.transform([text_preprocessed])
    text_vectorized_suicide = tfidf_vectorizer_suicide.transform([text_preprocessed])
    
    # Predecir la emoción
    sentiment_predictions = [
        sentiment_model_log_reg.predict(text_vectorized_sentiment),
        sentiment_model_nb.predict(text_vectorized_sentiment),
        sentiment_model_svm.predict(text_vectorized_sentiment)
    ]
    sentiment_label = map_sentiment_label(max(set(sentiment_predictions), key=sentiment_predictions.count))
    
    # Predecir si es un texto de suicidio
    suicide_predictions = [
        suicide_model_log_reg.predict(text_vectorized_suicide),
        suicide_model_nb.predict(text_vectorized_suicide),
        suicide_model_svm.predict(text_vectorized_suicide)
    ]
    suicide_label = 'Suicidio' if max(set(suicide_predictions), key=suicide_predictions.count) == 1 else 'No Suicidio'
    
    return sentiment_label, suicide_label

def map_sentiment_label(label):
    # Mapear los números a las emociones correspondientes
    labels = {
        0: 'Tristeza',
        1: 'Alegría',
        2: 'Amor',
        3: 'Enojo',
        4: 'Miedo',
        5: 'Sorpresa'
    }
    return labels.get(label, 'Desconocido')