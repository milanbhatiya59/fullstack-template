.PHONY: dev server client

dev:
	(npm run dev:server) & (npm run dev)

server:
	npm run dev:server

client:
	npm run dev
