# wisdom

## Install

```bash
# build docker image
docker build -t wisdom-frontend-image .

# run docker container
docker run -v $(pwd)/src:/app/src:ro -d -p 3000:5173 --name wisdom-frontend-container wisdom-frontend-image
```
