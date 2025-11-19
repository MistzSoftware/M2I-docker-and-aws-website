FROM node:24-alpine

WORKDIR /app

# Copy package files
COPY lorem-site/package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY lorem-site/ ./

# Build the app for deployment
RUN npm run build

# Expose port
EXPOSE 4173

# Start the preview server
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]