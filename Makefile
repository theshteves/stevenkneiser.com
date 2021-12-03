default: 
	@echo "Hello $(LOGNAME), nothing to do by default"
	@echo "Try 'make help'"

# 
#    ___               _                 
#   / __\ __ ___  __ _| |_ ___  _ __ ___ 
#  / / | '__/ _ \/ _` | __/ _ \| '__/ __|
# / /__| | |  __/ (_| | || (_) | |  \__ \
# \____/_|  \___|\__,_|\__\___/|_|  |___/
#  __    __ _           
# / / /\ \ \ |__   ___  
# \ \/  \/ / '_ \ / _ \ 
#  \  /\  /| | | | (_) |
#   \/  \/ |_| |_|\___/ 
#    ___          _      
#   / __\___   __| | ___ 
#  / /  / _ \ / _` |/ _ \
# / /__| (_) | (_| |  __/
# \____/\___/ \__,_|\___|
#
# 
# all    - Do it all (except deploy)
all: clean update build test run

# build  - Build server
build: #update migrate test run
	npm run build

# clean  - Remove all generated files [TODO: unfinished]
clean:
	npm run clean

# help   - Display all comments
help:
	@egrep "^#" [Mm]akefile

# run    - Run server
run: #migrate
	npm run dev

# test   - Run tests
test:
	npm run lint
	#bundle exec htmlproofer public --enforce-https \
    --check-favicon --check-html --check-img-http --check-opengraph --check-sri \
    --url-swap "^(\/.*)|(http\:\/\/localhost\:4000\/):https://creatorswhocode.com/" \
    --url-ignore "https://fonts.gstatic.com/","https://pages.convertkit.com/"

# update - Install/update all packages
update:
	npm update
	npm install

# deploy - Upload to production servers
deploy:
	npm run deploy
