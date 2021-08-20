FROM webdevops/liquibase:postgres

COPY changelog migrations/changelog
COPY liquibase.properties migrations/liquibase.properties
COPY master.xml migrations/master.xml
COPY postgresql.jar postgresql/postgresql.jar

CMD ["update"] 