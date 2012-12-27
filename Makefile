TESTSITE="pelican-blog"
TESTCONFIG="${TESTSITE}/pelicanconf.py"

all: testsite screenshot commit push

testsite:
	@echo "pelican -s \"${TESTCONFIG}\" \"${TESTSITE}\""
	@pelican -s "${TESTCONFIG}" "${TESTSITE}"

screenshot:
	@phantomjs ./screenshot.js

commit:
	@git commit -a

push:
	@git push
