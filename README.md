Add easy_stack.yml file to root of your repo

deploy with one command

 ansible-palybook easy_stack.yml

easy_stack.yml
``` yaml

- hosts: localhost
  vars_files:
    - easy_stack.credentials.yml
  roles:
    - role: mikeifomin.easy_stack
      services:
        - dir: /src
          domain: example.com
```

 
If your have

 - ansible 2.3+
 - docker 
 - ubuntu 16.04 server
 - already have DNS configurations

app supported
 - pure node.js
 - meteor js
 - golang

if your 
 - dont want to use custom deployment scripts
 - need rollout updates out of box
 - deployment one command with 
 - extendable enfrastructue
 - bare server support (cloud)


 
## TODO

 - [ ] Check infrastructure (db, balancer)
 - [ ] Auto install infrastructure
   - [ ] docker registry
   - [ ] sentry
   - [ ] jenkins
 - [ ] Logs
 - [ ] Scale out - add servers
 - [ ] Backups
 - [ ] green-blue deployment
 - [ ] support auto dns configs

