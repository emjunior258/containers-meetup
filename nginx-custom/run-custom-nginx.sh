docker run -p 8080:80 --name my-custom-nginx \
            -v $(pwd)/html:/usr/share/nginx/html:ro nginx:1.25.2