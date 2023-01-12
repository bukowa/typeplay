.PHONY: test


test:
	npx tsc
	cd test
	npx tsc
	node --test
