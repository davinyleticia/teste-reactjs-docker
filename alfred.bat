@echo off

echo Script Start da Proz Educação ^
echo.
echo Daviny - daviny@vidal.dev.br - https://daviny.dev\n ^
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
        docker-compose -f production.yml down
        echo Construindo containers de produção...
        docker-compose -f production.yml up -d --build
    )

    IF "%~2"=="--up" (
        echo Iniciando containers de produção...
        docker-compose -f production.yml up -d
    )
)