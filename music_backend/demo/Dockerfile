
FROM maven:3.6.3-openjdk-17 AS build
COPY . .
RUN mvn clean package

From openjdk:17.0.1-jdk-slim
COPY --from=build /target/demo-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT [ "java","-jar","demo.jar" ]

