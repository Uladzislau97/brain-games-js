install:
	npm install

GAME = games

start:
	npx babel-node -- src/bin/brain-$(GAME).js

publish:
	npm publish --dry-run

lint:
	npx eslint .
