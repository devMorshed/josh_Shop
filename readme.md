## Steps to follow.
1. Clone the devPhase branch. 

```bash
git clone -b devPhase https://github.com/devMorshed/josh_Shop.git
```

2. Create & go to your new branch.

```bash
git checkout -b <your branch> 
```

3. Make your necessarry changes and push.

```bash
git add .
git commit -m "Khub kaj holo"
git push origin <your branch> 
```

4. Create a pull request from github. <h2>select devPhase as base</h2>. 

5. We will merge the codes from other branches to devPhase at free time and from devPhase to main after discussion at night. 

6. To see the updated codes at your local enviroment. 

```bash
git checkout devPhase
git pull origin devPhase
git checkout <your branch> 
git pull origin devPhase

```