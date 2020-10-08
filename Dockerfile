FROM ubuntu:18.04
MAINTAINER huiling_loh_97@hotmail.com
EXPOSE 8080
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
ENV USER root
RUN npm install -g express-generator
RUN npm install express --save
RUN useradd -ms /bin/bash user
COPY app.js /tmp/start.sh
COPY start.sh /tmp/start.sh
RUN chmod a+x /tmp/start.sh
USER user
WORKDIR /tmp

CMD ["sh","/tmp/start.sh"]
