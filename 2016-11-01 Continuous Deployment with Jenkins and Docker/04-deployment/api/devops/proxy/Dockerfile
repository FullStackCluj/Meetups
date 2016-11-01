FROM nginx

RUN rm -v /etc/nginx/conf.d/default.conf

# copy nginx server configuration
COPY ./config/nginx.conf /etc/nginx/nginx.conf

# copy around25 domain configuration
COPY ./config/conf.d/default.conf /etc/nginx/conf.d/default.conf
