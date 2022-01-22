FROM nginx

# Use 80 port.
EXPOSE 80

# Set timezone to make run cron based on GMT+9.
ENV TZ="Asia/Seoul"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Change apt list to mirror in Korea.
RUN sed -i 's/archive.ubuntu.com/mirror.kakao.com/g' /etc/apt/sources.list

# Install packages.
RUN export DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y \
    htop vim nginx

# Copy webpage files
ADD ./build /build

# Delete default nginx config files.
RUN rm /etc/nginx/conf.d/default.conf

COPY ./dockerfiles/nginx_config.conf /etc/nginx/conf.d

RUN service nginx stop && service nginx start

CMD ["nginx", "-g", "daemon off;"]