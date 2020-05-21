app_start:
	make build
	docker-compose -f "deployment/docker-compose.yml" up -d --build --force-recreate

app_stop:
	docker stop app_manager
	docker stop app_database
	
log_manager :
	docker logs app_manager -f --since 5m

log_database :
	docker logs app_database -f --since 5m

exec_manager :
	docker exec -it app_manager bash

exec_database :
	docker exec -it app_database bash

clear_data :
	make app_stop
	sudo chmod +x clean.sh
	./clean.sh

build:
	docker build -t faaa/backend -f deployment/Dockerfile .
