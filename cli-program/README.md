This folder contains how i created a CLI based</br>
    1. Read/update other file data(readme.js)</br>
    2. cli based todo using commander library(index.js)</br>

1. Steps i followed for read/update data from the other files</br>
    A. Installed commander library</br>
    B. created a readfile.js, that contains the functionality information</br>
    C. a.txt is the file that is being read by that functionlity of cli-program</br>

2. How i created the library cli based todo</br>
    A. Installed commander library</br>
    B. index.js used to perform all the commands, it can be run as(node index.js -h) to see all the help commands</br>
    C. Lets see into action</br>
        a.) To add type - **node index.js add -a 26 -n Opendra** [Explanation: This commands gives the option to take input from user(-a as age and -n as person name) to save the data into data.json - No sequence matters]</br>
        b.) To update - **node index.js update 2 raj 26**[Explanation: it accepts 3 commands, first is id, sendond is new name and third is new age - sequence matters]</br>
        c.) To delete - **node index.js delete 2**[Explanation:- it accepts id and delete the data from data.json]</br>
        d.) To read - **node index.js read**[Explanation:- It will read all the json file data and prints each record.]</br>

3. Implementing middleware for all requests to handle errors, manage rate limiting