import fastify from "fastify";
const app = fastify();

app.get("/", async () => {
    return {hello: "word"};
});

app.listen(Number(process.env.port), () => {
    console.log('Server listening at 3000');
});