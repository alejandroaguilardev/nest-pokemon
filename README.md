<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Ejecutar

```
yarn intall
```

2. Nest CLI install

```
npm i -g @nestjs/cli
```

3. Up Database

```
docker-compose up -d
```

5. Execute Seed
## Stack
# MongoDB
# Nestjs

6. clone ```.env.template``` to ```.env```

# Production Build
1.  clone ```.env.template``` to ```.env.prod``` and  assign```MONGODB=mongodb://mongo-poke:27017/nest-pokemon``` 

2. Generate Build
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

3. Execute 
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```