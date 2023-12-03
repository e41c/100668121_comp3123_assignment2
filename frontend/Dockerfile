# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 80 to the outside world
EXPOSE 3000

# Build the application
RUN npm run build

# Command to run the application
CMD ["npm", "start"]
