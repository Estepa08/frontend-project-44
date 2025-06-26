install:	
	@echo "Идёт установка..."
	npm ci
	@echo "Готово!"
	
.PHONY: install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run