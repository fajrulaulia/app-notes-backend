containers=`docker ps -a -q`
if [ -n "$containers" ]; then
  docker rm -f -v $containers
fi

volumes=`docker volume ls -q`
if [ -n "$volumes" ]; then
  docker volume rm $volumes 
fi
