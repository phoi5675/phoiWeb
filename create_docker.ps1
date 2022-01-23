# Stop docker container.
docker stop phoiweb
docker rm phoiweb
# Recreate image.
docker build --rm -f dockerfiles/Dockerfile --tag phoiweb .
# Run dockeer container.
docker run -d -p 80:80 --restart=always --name phoiweb phoiweb