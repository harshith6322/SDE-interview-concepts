git commands or https://github.com/joshnh/Git-Commands---all-COMMANDS

//git-bsaic---------------------------------------------------------------------------------------------------

*git config --global user.name "harshithreddy6322"
*git config --global user.email "harshithreddy6322gmail.com"

1.npm install git ---- to install git

2. git -v ---to know version

3.git init

4.git add <filename> -a or -all
git li

5.git commit -m "first commit"

.git status
.git log
.git rm -r [file-name.txt] Remove a file (or folder) in commit stage

6.git reset --remove commited stage

//--------resetting--repo-url-----------------------
git remote -v
git remote set-url origin https://github.com/your-username/new-repo.git

//git-branch,SWITCH---------------------------------------------------------------------------------------------------

1.git branch List all branches (the asterisk denotes the current branch)

2.git branch -a List all branches (local and remote)

3.git branch [branch name]------Create a new branch
4.git branch -D [branch name]----Delete a branch locally
5.git push origin --delete [branch name]-----Delete a remote branch

6.git switch(or)checkout {-d create new one} <Branch-name> ------change branch or create one switch to it
7.git checkout -b [branch name] origin/[branch name]-------------Clone a remote branch and switch to it
8.git branch -m [old branch name] [new branch name]-------------Rename a local branch
9.git diff [source branch] [target branch] Preview changes before merging

//GIT-MERGE,PUSH,PULL-------------------------------------------------------------------------------------------------

1.git merge <branch-name>
2.git merge [source branch] [target branch]---------Merge a branch into a target branch

0.git remote add origin [URL]-------------ADD REMOTE REPO
1.git push origin [branch name]----------------Push a branch to your remote repository
2.git push -u origin [branch name]-------------Push changes to remote repository (and remember the branch)

1.git pull-------------Update local repository to the newest commit
git pull origin [branch name]----------Pull changes from remote repository

12 git push -u origin main

/// how to grt verify or signatures label in gitHub using the gpg4win it an free software to manage keys----------------------------------

key-password = 6322 for gpg4win

git config --global --list to list git config files

1.gpg --full-generate-key ---in cmd run this commands
2.choose option
3.gpg --list-secret-keys --keyid-format LONG ---it wil give id DC9C7E8FA880B4B3 copy it
4.gpg --armor --export <your-key-id>--> DC9C7E8FA880B4B3 ---it will give an publick key very long copy and past it in github keys

5.git config --global user.name "harshithreddy6322" 6. git config --global user.email "harshithreddy6322gmail.com"
7.git config --global user.signingkey DC9C7E8FA880B4B3 ---change to your key 8. git config --global commit.gpgsign true ---tell git to verify my every commit push to github 9. git config --global tag.gpgsign true ---same for tag

10. in cmd write this command "where gpg" --C:\Program Files (x86)\GnuPG\bin\gpg.exe -- it will give location copy it
    11.git config --global gpg.program "C:\Program Files (x86)\GnuPG\bin\gpg.exe" --it will add gpg file to git

---------------------done-------

As a DevOps engineer, you'll need to be familiar with a variety of Git commands to manage version control, collaboration, and deployment pipelines. Here are key Git commands you should know:

1. **Repository Management**

   - `git init`: Initialize a new Git repository.
   - `git clone <repo>`: Clone a remote repository to your local machine.
   - `git remote add <name> <url>`: Add a remote repository.
   - `git fetch`: Download changes from the remote but don't merge them.

2. **Branching and Merging**

   - `git branch`: List, create, or delete branches.
   - `git checkout <branch>`: Switch to another branch.
   - `git checkout -b <new-branch>`: Create a new branch and switch to it.
   - `git merge <branch>`: Merge a branch into your current branch.
   - `git rebase <branch>`: Reapply commits on top of another base branch.

3. **Staging and Committing**

   - `git add <file>`: Stage a file for commit.
   - `git add .`: Stage all changes.
   - `git commit -m "message"`: Commit staged changes with a message.
   - `git commit --amend`: Edit the last commit.

4. **History and Logs**

   - `git log`: View commit history.
   - `git log --oneline --graph`: View a summarized graph of commit history.
   - `git diff`: Show changes between commits, branches, or working directory.

5. **Collaborating**

   - `git pull`: Fetch and merge changes from the remote.
   - `git push`: Push local changes to the remote repository.
   - `git push -u origin <branch>`: Push a branch to the remote for the first time.
   - `git pull --rebase`: Keep your branch up-to-date while avoiding extra merge commits.

6. **Handling Changes**

   - `git reset <file>`: Unstage a file.
   - `git reset --hard <commit>`: Reset to a specific commit, discarding changes.

7. **Reverting and Fixing Mistakes**

   - `git revert <commit>`: Revert a specific commit.
   - `git reset --soft <commit>`: Move the HEAD to a previous commit without affecting the working directory.
   - `git clean -f`: Remove untracked files from the working directory.

8. **Tagging**
   - `git tag <tagname>`: Tag a specific commit.
   - `git push origin <tagname>`: Push tags to the remote.

`git stash` is a useful command in Git that allows you to temporarily save changes that you don't want to commit right away. This is especially handy when you need to switch branches or work on something else but want to keep your uncommitted changes safe. Here are some common `git stash` commands and their uses:

### 1. **Basic Stash**

- Stashes all modified tracked files.
  ```bash
  git stash
  ```
- This saves your changes and reverts your working directory to the state of the last commit.

### 2. **Stash with a Message**

- Helps in identifying stashes when multiple stashes exist.
  ```bash
  git stash save "your message"
  ```

### 3. **Stashing Untracked and Ignored Files**

- To include untracked files (like new files you've added but haven't committed):
  ```bash
  git stash -u
  ```
- To include ignored files as well:
  ```bash
  git stash -a
  ```

### 4. **Listing Stashes**

- View all the stashes you've saved:
  ```bash
  git stash list
  ```

### 5. **Applying Stashes**

- Apply the most recent stash and keep it in the stash list:
  ```bash
  git stash apply
  ```
- Apply a specific stash by referencing its index:
  ```bash
  git stash apply stash@{index}
  ```
- Apply the stash and remove it from the stash list:
  ```bash
  git stash pop
  ```

### 7. **Dropping a Stash**

- Remove a specific stash:
  ```bash
  git stash drop stash@{index}
  ```
- Remove the most recent stash:
  ```bash
  git stash drop
  ```

### 8. **Clearing All Stashes**

- Remove all saved stashes:
  ```bash
  git stash clear
  ```

### 9. **Creating a Branch from a Stash**

- Create a new branch from a specific stash:
  ```bash
  git stash branch new-branch-name stash@{index}
  ```
- This will apply the stash to the new branch and remove it from the stash list.

These commands cover most of the typical operations you'd perform with `git stash`. Would you like an example of how to use any of these commands?
