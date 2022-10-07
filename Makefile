lint: 
	npx eslint .
fix:
	npx eslint --fix .
publish:
	npm publish --dry-run
install:
	npm ci