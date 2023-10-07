FROM denoland/deno:alpine-1.37.1

EXPOSE 8080
WORKDIR /app
ENV COLOR=blue
USER deno
COPY main.ts .
CMD ["run", "--allow-net", "--allow-env",  "main.ts"]