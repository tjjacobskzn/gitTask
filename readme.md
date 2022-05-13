Note : Reviewer : Zack Atama.

comments: Hi Zack. This is task 4 of level 2. It does not request any code related to a capstone. Is it possible that
dropBox may be giving you the wrong folder ?

## If so please let me know so we can sort it out.

Kind regards

TJ Jacobs - HyperionDev student

# Task 4 of level 2 Requirements:


Compulsory Task 1
Follow these steps:
● Create an empty folder called task4-1_project.
● Open your terminal or command prompt and then change directory (cd) to
your newly created folder.
● Enter the git init command to Initialise your new repository.
● Enter the git status command and make a note of what you see. You
should have a clean working directory.
● Create a new file in the task4-1_project folder called helloWorld.js and write
a program that prints out the message “Hello World!”
● Run the git status command again. You should now see that your
helloWorld.js file is untracked.
● Enter the git add command followed by helloWorld.js to start tracking your
new file.
● Once again, run the git status command. You should now see that your
helloWorld.js file is tracked and staged to be committed
● Now that it is tracked, let us change the file helloWorld.js. Change the
message printed out by the program to “Git is Awesome!”
● Run git status again. You should see that helloWorld.js appears under a
section called “Changes not staged for commit”. This means that the file is
tracked but has been modified and not yet staged.
● To stage your file, simply run git add again.
● If you run git status again you should see that it is once again staged for
your next commit.
● You can now commit your changes by running the git commit -m
command. Remember to enter a suitable commit message after the -m
switch.
● Running the git status command should show a clean working directory
once again.
● Now run the git log command. You should see your commit listed. Take a
screenshot of the output and submit it to a code reviewer.




Compulsory Task 2
Follow these steps:
● Open your terminal or command prompt and change directory (cd) to the
folder task4-1_project created in the first task above.
● Create a new branch called issue-1 using the git branch command.
● Switch to your new issue-1 branch by using the git checkout command.
● Once you are on the issue-1 branch, change the helloWorld.js file. Modify
your program to accept input from the user and then print out whatever
was input.
● Add and commit your changes.
● Checkout the master branch and use the git merge command to merge
branches.
● Take a screenshot of the output after running the git merge command and
submit it to a code reviewer.