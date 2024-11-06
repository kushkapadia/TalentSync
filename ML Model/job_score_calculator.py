import PyPDF2
import nltk
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import re

# Download NLTK stopwords
nltk.download('stopwords')
from nltk.corpus import stopwords

def extract_text_from_pdf(pdf_path):
    """
    Extract text from a PDF file.
    """
    text = ""
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text()
    return text

def preprocess_text(text):
    """
    Clean and preprocess text data.
    """
    # Remove special characters and numbers
    text = re.sub(r"[^a-zA-Z\s]", "", text)
    
    # Convert to lowercase
    text = text.lower()
    
    # Remove stop words
    stop_words = set(stopwords.words("english"))
    text = " ".join([word for word in text.split() if word not in stop_words])
    
    return text

def calculate_job_score_with_embeddings(resume_text, job_description_text, model):
    """
    Calculate the similarity score using sentence embeddings.
    """
    # Generate embeddings for both resume and job description
    resume_embedding = model.encode(resume_text)
    job_description_embedding = model.encode(job_description_text)
    
    # Calculate cosine similarity
    similarity = cosine_similarity([resume_embedding], [job_description_embedding])[0][0]
    return similarity * 100  # Convert to percentage

def main(resume_pdf, job_description_pdf):
    # Initialize the model
    model = SentenceTransformer('all-MiniLM-L6-v2')
    
    # Extract text from PDFs
    resume_text = extract_text_from_pdf(resume_pdf)
    job_description_text = extract_text_from_pdf(job_description_pdf)
    
    # Preprocess text
    resume_text = preprocess_text(resume_text)
    job_description_text = preprocess_text(job_description_text)
    
    # Calculate job suitability score
    score = calculate_job_score_with_embeddings(resume_text, job_description_text, model)
    print(f"Job Suitability Score: {score:.2f}%")

# Example usage:
# Provide paths to resume and job description PDFs
main("candidate_resume.pdf", "job_description.pdf")
