const port = 8080;

let color = Deno.env.get("COLOR");

if(color == undefined)
    color = "red";

const handler = (request: Request): Response => {

    const body = `
    <html lang="en" style="background-color: ${color}">
        <head>
            <title>The color app</title>
        </head>
    </html>`;

    return new Response(body, {
        status: 200,
        headers : {
            'content-type': "text/html"
        }
    });
};

Deno.serve({ port }, handler);