FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code
COPY . .

# Expose the port Flask runs on
EXPOSE 5005

# Run the app
CMD ["gunicorn", "--bind", "0.0.0.0:5005", "--timeout", "90", "app:app"]



