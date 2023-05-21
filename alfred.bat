@echo off

echo Script Start da Proz Educação ^
echo.

IF "%~1"=="--dev" (
    echo Iniciando ambiente de desenvolvimento...

    IF "%~2"=="--build" (
        echo Desconstruindo containers, caso existam...
        docker-compose down
        echo Construindo containers de desenvolvimento...
        docker-compose up --build
    )

    IF "%~2"=="--up" (
        echo Iniciando containers de desenvolvimento
        docker-compose up
    )
)

IF "%~1"=="--prod" (
    echo Fazendo deploy em ambiente de Produção...

    IF "%~2"=="--build" (
        echo Desconstruindo containers, caso existam...
        docker-compose -f docker-compose-prod.yml down
        echo Construindo containers de produção...
        docker-compose -f docker-compose-prod.yml up -d --build
    )

    IF "%~2"=="--up" (
        echo Iniciando containers de produção...
        docker-compose -f docker-compose-prod.yml up -d
    )
)