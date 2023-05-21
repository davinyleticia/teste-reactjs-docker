#!/bin/bash

echo -e "Script Start da Proz Educação\n"

if [ "$1" == "--dev" ]; then
    echo "Iniciando ambiente de desenvolvimento..."

    if [ "$2" == "--build" ]; then
        echo "Desconstruindo containers, caso existam..."
        docker-compose down
        echo "Construindo containers de desenvolvimento..."
        docker-compose up --build
    fi

    if [ "$2" == "--up" ]; then
        echo "Iniciando containers de desenvolvimento"
        docker-compose up
    fi
fi

if [ "$1" == "--prod" ]; then
    echo "Fazendo deploy em ambiente de Produção..."

    if [ "$2" == "--build" ]; then
        echo "Desconstruindo containers, caso existam..."
        docker-compose -f docker-compose-prod.yml down
        echo "Construindo containers de produção..."
        docker-compose -f docker-compose-prod.yml up -d --build
    fi

    if [ "$2" == "--up" ]; then
        echo "Iniciando containers de produção..."
        docker-compose -f docker-compose-prod.yml up -d
    fi
fi