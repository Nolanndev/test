# Étape 1 : build (optionnel si transpilation ou bundling, sinon on peut s'en passer)
FROM node:latest AS build

# Crée un répertoire de travail
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances en production uniquement
RUN npm install --production

# Copie le reste de l'application
COPY . .


# Étape 2 : image finale ultra légère
FROM node:latest

# Crée un répertoire de travail dans le container
WORKDIR /app

# Copie uniquement les fichiers nécessaires depuis l'étape build
COPY --from=build /app /app

# Définit le port exposé dans le container
EXPOSE 3000

# Démarre l'application
CMD ["npm", "start"]
