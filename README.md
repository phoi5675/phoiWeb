# phoiweb

blog using react

# build
- build docker container
  
  ```shell
docker build --rm -f dockerfiles/Dockerfile --tag phoiweb .
  ```
- run docker container
  
  ```shell
  docker run -d -p 80:80 --name phoiweb phoiweb
  ```