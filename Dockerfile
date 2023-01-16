FROM mcr.microsoft.com/playwright:v1.29.0-focal
WORKDIR /app-backend
COPY package* ./
RUN npm install
COPY . .
CMD ["npm", "start"]