build: lint compile
	@:

compile:
	@node_modules/.bin/babel -d generators/ src/

lint:
	@node_modules/.bin/eslint .

clean:
	@rm -rf generators

.PHONY: build compile lint clean
