FROM mongo:3

COPY mongod.conf /etc/mongod.conf

EXPOSE 27017
CMD ["mongod", "--replSet", "test"]
