# app-notes-backend
keumah-backend is a backend module wrriten by Javascrip, easy and integrated with contaner as service.

## System requirements
  - `bash`
  - `make`
  - `docker`
  - `docker-compose`
  - `git`
  - `nodejs` (running on development)

## Installation  
```bash
git https://github.com/fajrulaulia/keumah-backend.git
cd keumah-backend
make build-db
yarn
```

## Usage
- `make app_start` : build and Run backend and service
- `make app_stop`  : stop backend and service 
- `make build-db`  : build mongodb for development
- `yarn start`     : run backend locally for development

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## Author
Fajrul Aulia
[twitter](https://twitter.com/fajrulaulia_)

## License
[MIT](https://choosealicense.com/licenses/mit/)


