# phoiweb

blog using react

# Build

- build docker container
  
  ```shell
  docker build --rm -f dockerfiles/Dockerfile --tag phoiweb .
  ```
- run docker container
  
  ```shell
  docker run -d -p 80:80 --restart=always --name phoiweb phoiweb
  ```

# Used fonts
- NanumGothic
- JetBrainsMono