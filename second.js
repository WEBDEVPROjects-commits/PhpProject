function Unit1() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".CodeSpace").innerHTML = ""
    document.querySelector
    let currentIndex = -1
    let arr1 = [{
        Problem: "Introduction to Web Applications", Number: 1, Solution: `A web application is a software program that runs on a web server and is accessed via a web browser. These applications rely on the internet for data transfer and can include anything from e-commerce sites to social media platforms.`
    }, {
        Problem: "Client-Side Scripting vs. Server-Side Scripting", Number: 2, Solution: `<p>Client-Side Scripting:</p>
        <ul>
        <li>Code is executed on the user's browser (front-end).</li>
        <li>Example languages: JavaScript, HTML, CSS.</li>
        <li>Code is executed on the user's browser (front-end).</li>
        <li>Code is executed on the user's browser (front-end).</li>
        </ul><br>
        <p>Server-Side Scripting:</p>
        <ul>
        <li>Code is executed on the user's browser (front-end).</li>
        <li>Example languages: JavaScript, HTML, CSS.</li>
        <li>Code is executed on the user's browser (front-end).</li>
        <li>Code is executed on the user's browser (front-end).</li>
        </ul>
        
`}, {
        Problem: "Understanding Web Servers", Number: 3, Solution: `
        <p>A web server stores, processes, and delivers web pages to users via the internet.</p><br>
        <p>Local Servers vs. Remote Servers:</p><br>
        <h2>Local server</h2>
        <ul>
        <li>Installed on your personal computer.</li>
        <li>Example: WAMP, XAMPP (used for development and testing).</li>
        <ul/><br>
        <h2>Remote server</h2>
        <ul>
        <li>Hosted online and accessible from anywhere.</li>
        <li>Example: Apache servers on platforms like AWS, GoDaddy.</li>
        <ul/>


        ` }, {
        Problem: "Installing WAMP and Configuring PHP Environment", Number: 4, Solution: `
        <p>A web server stores, processes, and delivers web pages to users via the internet.</p><br>
        <h2>Steps to install WAMP:</h2>
        <ul>
        <li>Download WAMP from the official website.</li>
        <li>Run the installer and follow the instructions.</li>
        <li>After installation, start WAMP and open the local server on localhost.</li>
        <ul/><br>
        <h2>Configuring PHP:</h2>
        <ul>
        <li>Ensure the PHP environment is working by creating a test file (info.php)</li>
        <li>Open this file in the browser by navigating to localhost/info.php.</li>
        <ul/>  
        ` }, {
        Problem: "Static Website vs. Dynamic Website Development", Number: 5, Solution: `<h2>Static Website:</h2>
        <ul>
        <li>Contains fixed content (HTML files) that doesnt change unless modified manually.</li>
        <li>Example: Portfolio websites or company landing pages.</li>
        <ul/><br>
        <h2>Dynamic Website:</h2>
        <ul>
        <li>Content is generated dynamically using server-side scripting and databases.</li>
        <li>Example: E-commerce stores or news portals, where content updates frequently.</li>
        <ul/>` }, {
        Problem: "Embedding PHP Code in Web Pages", Number: 6, Solution: `
        <pre>
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;body&gt;
        &lt;h1&gt;My Website&lt;/h1&gt;
        &lt;?php
        echo "Welcome to PHP!";
        ?&gt;
        &lt;/body&gt;
        &lt;/html&gt;
        </pre>
        <p>This will display “Welcome to PHP!” within the HTML page when accessed via a browser.</p>
        `
    }, {
        Problem: "PHP Basics", Number: 7, Solution: `
        <h2>Tokens:</h2>
        <ul>
        <li>Smallest individual elements in PHP, like keywords, identifiers, constants, etc.</li>
        <ul/><br>
        <h2>Variables & Variable Scope:</h2>
        <ul>
        <li>Variables: Hold data for processing ($name = "John";).</li>
        <li>Scope: Can be local, global, or static (i.e., defined within a function or script).</li>
        </ul><br>
        <h2>Constants:</h2>
        <ul>
        <li>Values that do not change (define("PI", 3.14);).</li>
        </ul><br>
        <h2>Data Types:</h2>
        <ul>
        <li>Common types: int, float, string, array, object, boolean.</li>
        </ul><br>
        <h2>Number Handling:</h2>
        <ul>
        <li>PHP supports operations with integers and floating-point numbers ($sum = 5 + 2.5;).</li>
        </ul><br>
        <h2>Operands, Operators, and Expressions:</h2>
        <ul>
        <li>Operators: Arithmetic (+, -), Comparison (==, !=), Logical (&&, ||).</li>
        <li>Expressions: A combination of variables, constants, and operators ($total = $x + $y;).</li>
        </ul><br>
        <h2>Operator Precedence:</h2>
        <ul>
        <li>The order in which operations are performed (e.g., * has higher precedence than +).</li>
        </ul><br>
        <h2>Comments:</h2>
        <ul>
        <li>Single-line: // This is a comment</li>
        <li>Multi-line:<br>
        /* This 
        is a 
        multi-line comment */
        </li>
        </ul><br>
        <h2>Echo vs. Print:</h2>
        <ul>
        <li>Echo: Can output multiple values, slightly faster.
        Syntax:echo "Hello", " World!";
        </li>
        <li>Print: Returns 1 after execution.
        print "Hello World!";
        </li>
        </ul><br>

        `
    }, {
        Problem: "Control Structures", Number: 8, Solution: `
        <h1>Branching statements:</h1><br>
        <h2>If-else:</h2>
        <pre>
        if ($age > 18) {
            echo "Adult";
            } else {
                echo "Minor";
        }
        </pre><br>
        <h2>Ternary Operator:</h2>
        <pre>
        $status = ($age > 18) ? "Adult" : "Minor";
        </pre><br>
        <h2>Switch:</h2>
        <pre>
        switch ($day) {
        case "Monday":
        echo "Start of the week!";
        break;
         case "Friday":
        echo "Almost weekend!";
        break;
        default:
        echo "Have a nice day!";
        }
        </pre><br>
        <h1>Looping Statements:</h1><br>
        <h2>While:</h2>
        <pre>
        $i = 0;
        while ($i < 5) {
        echo $i;
        $i++;
        }
        </pre><br>
        <h2>Do-while</h2>
        <pre>
        $i = 0;
        do {
            echo $i;
            $i++;
        } while ($i < 5);
        </pre><br>
        <h2>For:</h2>
        <pre>
        for ($i = 0; $i < 5; $i++) {
            echo $i;
        }
        </pre><br>
        
        <h1>File Inclusion statements:</h1><br>
        <h2>include: Inserts the content of another PHP file</h2>
        <pre>
        include 'header.php';
        </pre><br>
        <h2>require: Similar to include but triggers a fatal error if the file is missing.</h2>
        <pre>
        require 'config.php';
        </pre><br>
    
        `
    }]

    arr1.forEach((element, i) => {
        let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
        document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

        document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
            currentIndex = i
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr1[currentIndex].Solution
        })
    })

    document.querySelector(".next").addEventListener("click", (e) => {
        if (currentIndex < arr1.length - 1) {
            currentIndex++
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr1[currentIndex].Solution

        }
    })
    document.querySelector(".previous").addEventListener("click", (e) => {
        if (currentIndex > 0) {
            currentIndex--;
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr1[currentIndex].Solution
        }
    });
}
function Unit2() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".CodeSpace").innerHTML = ""
    let currentIndex = -1
    let arr1 = [{
        "Problem": "Functions", "Number": 1, "Solution": `
        <h1>Functions</h1><br>
        <p>Function Definition: A PHP function is a reusable block of code. You define it using the function keyword.</p>
        <pre>
        function greet() {
        echo "Hello, World!";
        }</pre><br>
        <p>Creating and Invoking User-Defined Functions: After defining a function, you can call it by its name followed by parentheses.</p>
        <pre>
        greet();  // Outputs: Hello, World!
        </pre><br>
        <p>Formal Parameters vs. Actual Parameters: Formal parameters are in the function definition, while actual parameters are the values passed when calling the function.</p>
        <pre>
        function add($a, $b) {  // $a and $b are formal parameters
        return $a + $b;
        }
        echo add(3, 5);  // Outputs: 8 (3 and 5 are actual parameters)
        </pre><br>
        <p>Function and Variable Scope: Variables inside a function have local scope, and variables outside have global scope.</p>
        <pre>
        $name = "Alice";  // Global variable
        function display() {
             global $name;
             echo $name;
        }
        display();  // Outputs: Alice
        </pre><br>
        <p>Recursion: A function calling itself to solve a problem in steps.</p>
        <pre>
        function factorial($n) {
        if ($n <= 1) {
        return 1;
        }
        return $n * factorial($n - 1);
        }
        echo factorial(5);  // Outputs: 120
        </pre><br>
        <p>Library Functions: PHP has many built-in functions, such as strlen() for string length, array_push() to add items to an array, etc.</p><br>

        `},
    {
        "Problem": "String Handling", "Number": 2, "Solution": `
        <h1>String Handling</h1><br>
        <p>Interpolation with Curly Braces: Using variables within double-quoted strings.</p>
        <pre>
        $name = "Alice";
        echo "Hello, {$name}";  // Outputs: Hello, Alice    
        </pre><br>
        <p>Characters and String Indexes: Access characters in a string by index.</p>
        <pre>
        $str = "PHP";
        echo $str[0];  // Outputs: P   
        </pre><br>
        <p>String Operators: The . operator concatenates strings.</p>
        <pre>
        $greeting = "Hello" . " World!";
        echo $greeting;  // Outputs: Hello World!
        </pre><br>
        <p>Heredoc Syntax: A way to define multiline strings without escape sequences.</p>
        <pre>
        $text = <<<EOT
        This is a
        multiline string.
        EOT;
        echo $text;
        </pre><br>
        <p>String Functions:</p>
        <pre>
        $str = "Hello, World!";
        echo strlen($str);  // Outputs: 13
        echo strtoupper($str);  // Outputs: HELLO, WORLD!
        </pre><br>
        <p>Formatting Strings: sprintf() formats strings.</p>
        <pre>
        $num = 5;
        $str = sprintf("The number is %d", $num);
        echo $str;  // Outputs: The number is 5 
        </pre><br>
        <p>Comparing and Searching Strings: Functions like strcmp() and strpos().</p>
        <pre>
        echo strcmp("Hello", "hello");  // Outputs: -1
        echo strpos("Hello, World!", "World");  // Outputs: 7
        </pre><br>
        ` },
    {
        "Problem": "Arrays", "Number": 3, "Solution": `      
        <h1>Arrays:</h1><br>
         <p>PHP Arrays: Arrays store multiple values.</p>
        <pre>
        $colors = array("Red", "Green", "Blue");
        </pre><br>

        <p>Creating Arrays: You can create arrays with array() or [].</p>
        <pre>
        $fruits = ["Apple", "Banana", "Cherry"];
        </pre><br>
        <p>Accessing Array Elements: Access elements by index or key.</p>
        <pre>
        echo $fruits[1];  // Outputs: Banana
        </pre><br>
        <p>Multidimensional Arrays: Arrays within arrays.</p>
        <pre>
        $matrix = [
        [1, 2],
        [3, 4],
        ];
        echo $matrix[1][1];  // Outputs: 4
        </pre><br>
        <p>Inspecting Arrays: Use print_r() or var_dump() to view arrays.</p>
        <pre>
        print_r($fruits);
        </pre><br>
        <p>Deleting from Arrays: unset() removes elements.</p>
        <pre>
        unset($fruits[1]);
        print_r($fruits);  // Outputs: Array ( [0] => Apple [2] => Cherry )
        </pre><br>
        <p>Iterating with each() and foreach():</p>
        <pre>
        foreach ($fruits as $fruit) {
        echo $fruit . " ";
        }
        </pre><br>
        <p>Iterative Functions (current(), next(), prev(), reset(), end()):</p><br>
        <ul>
        <li>current(): Returns the current element.</li>
        <li>next(): Advances the internal pointer to the next element.</li>
        <li>prev(): Moves the pointer to the previous element.</li>
        <li>reset(): Moves the pointer to the first element.</li>
        <li>end(): Moves the pointer to the last element.</li>
        </ul><br>
        <pre>
        $numbers = [10, 20, 30];
        echo current($numbers);  // Outputs: 10
        next($numbers);
        echo current($numbers);  // Outputs: 20
        reset($numbers);
        echo current($numbers);  // Outputs: 10
        </pre><br>
        ` }]
    arr1.forEach((element, i) => {
        let Question = `<a id="Question${arr1[i].Number}">
<li>${arr1[i].Problem}</li>
</a>`
        document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

        document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
            currentIndex = i
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr1[currentIndex].Solution
        })
    })

    document.querySelector(".next").addEventListener("click", (e) => {
        if (currentIndex < arr1.length - 1) {
            currentIndex++
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr1[currentIndex].Solution

        }
    })
    document.querySelector(".previous").addEventListener("click", (e) => {
        if (currentIndex > 0) {
            currentIndex--;
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr1[currentIndex].Solution
        }
    });
}
function Unit3() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".CodeSpace").innerHTML = ""
    let currentIndex = -1
    let arr = [
        {
            Problem: `Forms`, Number: 1, Solution: `
            <p>Forms are essential for collecting user input in web applications. They consist of various HTML form controls such as text fields, radio buttons, checkboxes, and dropdown lists. PHP is used to process the data submitted through forms, allowing for dynamic web applications that respond to user input.</p><br>
            <ul>
            <li>Working with HTML Form Controls and PHP: HTML forms are used to gather user input, and PHP processes that input on the server. Common form controls include text fields, radio buttons, checkboxes, and dropdowns.</li>
            <li>Super Global Variables: PHP provides several super global variables that are accessible from anywhere in the script. The most commonly used ones for handling form data are:
            <pre>
            $_GET: Contains data sent to the script via URL parameters (query string).
            $_POST: Contains data sent via form submission using the POST method.
            $_REQUEST: Combines data from $_GET, $_POST, and $_COOKIE.
            </pre>
            </li>
            <li>Super Global Array: Arrays that are automatically populated by PHP to handle user input from forms. The data can be accessed by referencing the relevant super global variable.</li>
            <li>Importing User Input: User input is imported through form submission. For example, an HTML form can be created with fields.
            </li>
            <li>Accessing User Input: User input can be accessed in PHP scripts using the appropriate super global array. For example:
            <pre>$username = $_POST['username'];</li></pre>
            </ul>
            `
        },
        {
            Problem: "Integrating PHP and Database", Number: 2, Solution: `
            <ul>
            <li>Connecting to Database: Use mysqli or PDO to connect to a database. For example, using mysqli:
            <pre>
            $conn = new mysqli("localhost", "username", "password", "database");</li>
            </pre>
            <li>Making SQL Queries: SQL queries are written as strings to interact with the database (e.g., SELECT, INSERT, UPDATE, DELETE).</li>
            <li>Executing Queries: After preparing the SQL statement, it can be executed. For example:
            <pre>
            $result = $conn->query("SELECT * FROM users");
            </pre>
            </li>
            <li>Fetching Data Sets: After executing a query, use functions to retrieve the results. Common methods include:<br>
            fetch_assoc(): Fetch a result row as an associative array.<br>
            fetch_array(): Fetch a result row as both associative and numeric array.<br>
            fetch_row(): Fetch a result row as a numeric array.</li><br>
            <li>Integrating forms and databases:
            <ul>
            <li>Basic Form Submission to a Database: A form can submit data directly into a database. For instance:><br>
            <pre>
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $username = $_POST['username'];
            $sql = "INSERT INTO users (username) VALUES ('$username')";
            $conn->query($sql);
            }
            </pre>
            </li>
            <li>Editing Data with an HTML Form: To edit existing data, populate the form with current values and then update the database upon submission. Example:<br>
            <pre>
            // Fetch current data
            $result = $conn->query("SELECT * FROM users WHERE id = $userId");
            $user = $result->fetch_assoc();
            // HTML form for editing
            &lt;form action=&quot;edit.php&quot; method=&quot;post&quot;&gt;
            &lt;input type=&quot;hidden&quot; name=&quot;id&quot; value=&quot;&lt;?php echo $user['id']; ?&gt;&quot; /&gt;
            &lt;input type=&quot;text&quot; name=&quot;username&quot; value=&quot;&lt;?php echo $user['username']; ?&gt;&quot; /&gt;
            &lt;input type=&quot;submit&quot; /&gt;
            &lt;/form&gt;
            // Handling the update
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $id = $_POST['id'];
            $username = $_POST['username'];
            $sql = "UPDATE users SET username='$username' WHERE id=$id";
            $conn->query($sql);
            }
            </pre>
            </li>
            </ul>
            </li>
            </ul>

           
            ` },
    ];

    arr.forEach((element, i) => {
        let Question = `<a id="Question${arr[i].Number}">
    <li>${arr[i].Problem}</li>
    </a>`
        document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

        document.querySelector(`#Question${arr[i].Number}`).addEventListener("click", (e) => {
            currentIndex = i
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr[currentIndex].Solution
        })
    })

    document.querySelector(".next").addEventListener("click", (e) => {
        if (currentIndex < arr.length - 1) {
            currentIndex++
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr[currentIndex].Solution

        }
    })
    document.querySelector(".previous").addEventListener("click", (e) => {
        if (currentIndex > 0) {
            currentIndex--;
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr[currentIndex].Solution

        }
    });
}
function Unit4() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".CodeSpace").innerHTML = ""
    let currentIndex = -1
    let arr1 = [{
        Problem: "Maintaining User State", Number: 1, Solution: `
        <ul>
        <li>Introduction to Cookies: Cookies are small pieces of data stored on the user's computer by the web browser. They can be used to remember information about the user across sessions, like login credentials or preferences.</li>
        <li>Setting Time in a Cookie with PHP: You can set a cookie in PHP using the setcookie() function, specifying the cookie name, value, expiration time, path, and other parameters. Example:
        <pre>
        setcookie("username", "JohnDoe", time() + (86400 * 30), "/"); // 30 days expiration
        </pre>
        </li>
        <li>Deleting a Cookie: To delete a cookie, set its expiration time to a past date:
        <pre>
        setcookie("username", "", time() - 3600, "/"); // Deletes the cookie
        </pre>
        </li>
        <li>Creating Session Cookies: Session cookies are temporary and are deleted when the browser is closed. They can be created in the same way as regular cookies, but without setting an expiration time.</li>
        <li>Introduction to Sessions: Sessions are a way to store data across multiple pages. Unlike cookies, session data is stored on the server, making it more secure.</li>
        <li>Starting a Session: Begin a session using the session_start() function at the beginning of your PHP script:
        <pre>
        session_start();
        </pre>
        </li>
        <li>Registering Session Variables: After starting a session, you can store data in the $_SESSION super global array:
        <pre>$_SESSION['username'] = "pggc11";</pre>
        </li>
        <li>Working with Session Variables: Access session variables using the $_SESSION array:
        <pre>
        echo $_SESSION['username']; // Outputs: pggc11
        </pre>
        </li>
        <li>Destroying a Session: Use session_destroy() to delete all session data, and unset() to remove specific session variables:
        <pre>
        session_start();
        session_unset(); // Unset all session variables
        session_destroy(); // Destroy the session
        </pre>
        </li>
        <li>Passing Session IDs: Session IDs can be passed through URLs or stored in cookies. Use session_id() to retrieve or set the session ID.</li>
        <li>Encoding and Decoding Session Variables: You can encode session data with serialize() and decode it with unserialize() for complex data structures.</li>
        <li>Increase Session Expire Time: To increase the session duration, configure session settings in php.ini or set it using:
        <pre>
        ini_set('session.gc_maxlifetime', 3600); // 1 hour
        </pre>
        </li>
        <li>Working of Session Without Cookies: You can manage sessions without cookies by passing the session ID in the URL. Ensure that the session ID is included in every link:
        <pre>
        echo '&lt;a href="nextpage.php?PHPSESSID=' . session_id() . '">Next Page</a>';
        </pre>
        </li>
        </ul>
        `}, {
        Problem: "Working with File System", Number: 2, Solution: `
         <ul>
        <li>Understanding PHP File Permissions: PHP interacts with the file system according to the server's file permissions. Typical permissions include read, write, and execute, which determine what operations can be performed on files and directories.</li>
        <li>Opening and Closing a File: Use fopen() to open a file and fclose() to close it:
        <pre>
        $file = fopen("example.txt", "r"); // Open file for reading
        fclose($file); // Close the file
        </pre>
        </li>
        <li>File Reading and Writing Functions:
        <ul>
        <li>Reading: Functions like fgets(), fread(), or file_get_contents() are used to read file data.</li>
        <li>Writing: Use fwrite() or file_put_contents() to write data to a file.<br>
        <pre>
        $file = fopen("example.txt", "w");
        fwrite($file, "Hello, World!");
        fclose($file);
        </pre>
        </li>
        </ul>
        </li>//
        <li>File System and Directory Functions:
        <ul>
        <li>File Information: Functions like file_exists(), filesize(), filemtime() retrieve information about files.</li>
        <li>Directory Operations: Functions such as opendir(), readdir(), closedir(), mkdir(), and rmdir() are used to manage directories.<br>
        <pre>
        if (mkdir("new_directory")) {
        echo "Directory created successfully."; 
        }
        </pre>
        </li>
        </ul>
        </li>
        </ul>
        `
    },]

    arr1.forEach((element, i) => {
        let Question = `<a id="Question${arr1[i].Number}">
<li>${arr1[i].Problem}</li>
</a>`
        document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

        document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
            currentIndex = i
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr1[currentIndex].Solution
        })
    })

    document.querySelector(".next").addEventListener("click", (e) => {
        if (currentIndex < arr1.length - 1) {
            currentIndex++
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr1[currentIndex].Solution

        }
    })
    document.querySelector(".previous").addEventListener("click", (e) => {
        if (currentIndex > 0) {
            currentIndex--;
            // document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
            document.querySelector(".CodeSpace").innerHTML = arr1[currentIndex].Solution
        }
    });
}

document.querySelector(".Unit1").addEventListener("click", (e) => {
    Unit1();
})
document.querySelector(".Unit2").addEventListener("click", (e) => {
    Unit2();
})
document.querySelector(".Unit3").addEventListener("click", (e) => {
    Unit3();
})
document.querySelector(".Unit4").addEventListener("click", (e) => {
    Unit4();
})
