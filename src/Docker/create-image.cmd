docker build --no-cache -f SQL\Dockerfile.PostgreSql -t privet/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t privet/app ../..
