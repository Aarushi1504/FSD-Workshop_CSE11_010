import http from "node:http";

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to my server!");
    }

    else if (req.url === "/users") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        const users = [
            {
                id: 1,
                name: "Aarushi",
                age: 20
            },
            {
                id: 2,
                name: "Rahul",
                age: 21
            }
        ];

        res.end(JSON.stringify(users));
    }

    else if (req.url === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("This is the About page");
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});