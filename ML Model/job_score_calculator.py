# Step 1: Import required libraries
import PyPDF2
import nltk
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import re
from nltk.corpus import stopwords

# Download NLTK stopwords (only needed once; comment out after running once)
nltk.download('stopwords')

# Step 2: Define a list of common skills
common_skills = [
    "python", "java", "javascript", "sql", "react", "node", "machine learning", "data analysis",
    "communication", "project management", "problem solving", "leadership", "css", "html", "c++", 
    "git", "docker", "kubernetes", "aws", "azure", "cloud computing", "data visualization"
]

# Step 3: Define functions to process the PDF and text

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text()
    return text

def preprocess_text(text):
    text = re.sub(r"[^a-zA-Z\s]", "", text).lower()
    stop_words = set(stopwords.words("english"))
    text = " ".join([word for word in text.split() if word not in stop_words])
    return text

def calculate_job_score_with_embeddings(resume_text, job_description_text, model):
    resume_embedding = model.encode(resume_text)
    job_description_embedding = model.encode(job_description_text)
    similarity = cosine_similarity([resume_embedding], [job_description_embedding])[0][0]
    return similarity * 100

def extract_skills(text):
    skills_found = set()
    for skill in common_skills:
        if re.search(r"\b" + re.escape(skill) + r"\b", text):
            skills_found.add(skill)
    return skills_found

# Step 4: Main function to calculate job fit and find missing skills

def main(resume_pdf, job_description_pdf):
    model = SentenceTransformer('all-MiniLM-L6-v2')
    resume_text = extract_text_from_pdf(resume_pdf)
    job_description_text = extract_text_from_pdf(job_description_pdf)

    resume_text = preprocess_text(resume_text)
    job_description_text = preprocess_text(job_description_text)

    # Calculate job suitability score
    score = calculate_job_score_with_embeddings(resume_text, job_description_text, model)
    print(f"Job Suitability Score: {score:.2f}%")

    # Extract and compare skills
    resume_skills = extract_skills(resume_text)
    job_description_skills = extract_skills(job_description_text)

    missing_skills = job_description_skills - resume_skills
    if missing_skills:
        print("\nSkills missing in the resume but required in the job description:")
        for skill in missing_skills:
            print(f"- {skill}")
    else:
        print("\nAll required skills are present in the resume.")

# Step 5: Specify PDF paths and run the main function
resume_pdf_path = "C:\\Users\\Shail Jain\\Dropbox\\PC\\Desktop\\TalentSync\\ML Model\\candidate_resume.pdf"
job_description_pdf_path = "C:\\Users\\Shail Jain\\Dropbox\\PC\\Desktop\\TalentSync\\ML Model\\job_description.pdf"

main(resume_pdf_path, job_description_pdf_path)