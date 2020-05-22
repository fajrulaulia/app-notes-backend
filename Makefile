app_start:
	make build-backend
	docker-compose -f "deployment/docker-compose.yml" up -d --build --force-recreate

app_stop:
	docker stop app_manager
	docker stop app_database
	docker stop app_backend
	
log_manager :
	docker logs app_manager -f --since 5m

log_database :
	docker logs app_database -f --since 5m

log_backend :
	docker logs app_backend -f --since 5m

exec_manager :
	docker exec -it app_manager bash

exec_database :
	docker exec -it app_database bash

exec_backend :
	docker exec -it app_backend sh

clean :
	make app_stop
	sudo chmod +x scripts/clean.sh
	./scripts/clean.sh

build-backend:
	docker build -t faaa_expmongo/backend -f deployment/Dockerfile .

build-db:
	docker-compose -f "deployment/docker-compose.yml" up -d --build --force-recreate app_database
	docker-compose -f "deployment/docker-compose.yml" up -d --build --force-recreate app_manager
